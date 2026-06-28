import ical from 'node-ical';

const icsData = `BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260610
DTEND;VALUE=DATE:20260615
SUMMARY:Busy
END:VEVENT
END:VCALENDAR`;

async function test() {
  const events = await ical.async.parseICS(icsData);
  for (const event of Object.values(events)) {
    if (event.type === 'VEVENT') {
      console.log('Event:', event.summary);
      console.log('Start:', event.start, 'datetype:', event.datetype);
      console.log('End:', event.end, 'datetype:', event.datetype);
    }
  }
}
test();
