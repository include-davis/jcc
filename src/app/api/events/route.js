export async function GET() {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events?key=${process.env.GOOGLE_API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  console.log('Raw events:', JSON.stringify(data.items, null, 2));
  return Response.json(data.items || []);
}
