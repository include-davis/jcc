// Each subcommittee has its own Google Calendar (calendar_id comes from
// the CMS's committees collection, see cms-schemas.md) — the caller passes
// which one to read via ?calendarId=. GOOGLE_API_KEY stays a single shared
// env var since it's a general Cloud project credential, not tied to any
// one calendar.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const calendarId = searchParams.get("calendarId");

  if (!calendarId) {
    return Response.json([]);
  }

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${process.env.GOOGLE_API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return Response.json(data.items || []);
}
