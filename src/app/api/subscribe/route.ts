import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Mailchimp config
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY?.split("-")[1]; // ex: us21

    if (!LIST_ID || !API_KEY || !DATACENTER) {
      return NextResponse.json(
        { message: "Mailchimp environment variables not set" },
        { status: 500 }
      );
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed", // or "pending" for double opt-in
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Mailchimp API error:", errorText);
      return NextResponse.json(
        { message: "Subscription failed: " + errorText },
        { status: res.status }
      );
    }

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json(
      { message: "Subscription failed: " + error.message },
      { status: 500 }
    );
  }
}
