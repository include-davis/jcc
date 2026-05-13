import fs from "fs/promises";

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const filePath = "subscribers.json";

    // read existing emails or initialize empty array if file doesn't exist
    let subscribers = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      subscribers = fileData.trim() ? JSON.parse(fileData) : [];
    } catch {
      // file doesn't exist yet, use empty array
    }

    // prevent duplicates
    if (subscribers.some(subscriber => subscriber.email === email)) {
      return res.status(400).json({ error: "Email already subscribed" });
    }

    // add new email and save
    subscribers.push({ email: email });
    await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));

    return res.status(200).json({ message: "Email subscribed successfully" });
  } catch (err) {
    console.error("Error processing subscription: ", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}