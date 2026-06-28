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
          busyDates.push({
            start: event.start.toISOString(),
            end: event.end.toISOString(),
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
