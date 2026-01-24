// app/api/spotify-episodes/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
    const SHOW_ID = process.env.SPOTIFY_SHOW_ID; // ex: 4J7Xkp2ZPTnmTqW9OTG5xq

    // 1️⃣ Get token
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      },
      body: "grant_type=client_credentials",
    });
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // 2️⃣ Fetch episodes
    const res = await fetch(
      `https://api.spotify.com/v1/shows/${SHOW_ID}/episodes?market=US&limit=20`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = await res.json();
    return NextResponse.json(data.items); // Return array of episodes
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch Spotify episodes" }, { status: 500 });
  }
}
