import fs from "fs/promises";

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) return Response.json({ error: "Email is required" }, { status: 400 });

    const filePath = "subscribers.json";
    let subscribers = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      subscribers = fileData.trim() ? JSON.parse(fileData) : [];
    } catch {
      // file doesn't exist yet
    }

    if (subscribers.some((s) => s.email === email)) {
      return Response.json({ error: "Email already subscribed" }, { status: 400 });
    }

    subscribers.push({ email });
    await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));
    return Response.json({ message: "Email subscribed successfully" });
  } catch (err) {
    console.error("Error processing subscription: ", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
