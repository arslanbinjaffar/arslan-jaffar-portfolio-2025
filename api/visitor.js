import { kv } from "@vercel/kv";

const COUNT_KEY = "portfolio:visitor_count";
const SESSION_PREFIX = "portfolio:visitor_session:";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    if (req.method === "GET") {
      const count = (await kv.get(COUNT_KEY)) ?? 0;
      return res.status(200).json({ count: Number(count) });
    }

    if (req.method === "POST") {
      const { visitorId } = req.body || {};
      if (!visitorId || typeof visitorId !== "string") {
        return res.status(400).json({ error: "visitorId required" });
      }

      const sessionKey = `${SESSION_PREFIX}${visitorId}`;
      const seen = await kv.get(sessionKey);

      if (!seen) {
        await kv.set(sessionKey, "1", { ex: 60 * 60 * 24 });
        const count = await kv.incr(COUNT_KEY);
        return res.status(200).json({ count: Number(count), incremented: true });
      }

      const count = (await kv.get(COUNT_KEY)) ?? 0;
      return res.status(200).json({ count: Number(count), incremented: false });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Visitor counter error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
