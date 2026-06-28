import ical from 'node-ical';

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  // Prevent Vercel and browser from caching this endpoint
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // The actual Google Calendar iCal link should be provided via environment variables.
  // For now, if it's not present, we will generate mock dates to prove it works.
  const CALENDAR_URL = process.env.ICAL_URL || '';

  try {
    let busyDates: { start: string; end: string }[] = [];

    if (!CALENDAR_URL) {
      // If no URL is provided, return empty array
      busyDates = [];
    } else {
      const events = await ical.async.fromURL(CALENDAR_URL);
      for (const event of Object.values(events)) {
        if (event.type === 'VEVENT') {
          let startStr = event.start.toISOString();
          let endStr = event.end.toISOString();

          // All-day events in iCal have exclusive end dates (the day after).
          // We need to subtract 1 day from the end date to make it inclusive,
          // and format them as YYYY-MM-DD so the frontend doesn't shift them by timezone.
          if ((event as any).datetype === 'date') {
            const s = event.start;
            startStr = `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, '0')}-${String(s.getDate()).padStart(2, '0')}`;
            
            const e = new Date(event.end.getTime() - 24 * 60 * 60 * 1000);
            endStr = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, '0')}-${String(e.getDate()).padStart(2, '0')}`;
          }

          busyDates.push({
            start: startStr,
            end: endStr,
          });
        }
      }
    }

    res.status(200).json({ busyDates });
  } catch (error) {
    console.error('Error fetching calendar:', error);
    res.status(500).json({ error: 'Failed to fetch calendar data' });
  }
}
