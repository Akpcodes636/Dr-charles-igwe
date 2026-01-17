import { NextResponse } from "next/server";

// Define a type for your API response
type ApiResponse = {
  message: string;
};

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      const response: ApiResponse = { message: "Email is required" };
      return NextResponse.json(response, { status: 400 });
    }

    // Mailchimp config
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY?.split("-")[1]; // ex: us21

    if (!LIST_ID || !API_KEY || !DATACENTER) {
      const response: ApiResponse = { message: "Mailchimp environment variables not set" };
      return NextResponse.json(response, { status: 500 });
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

      const response: ApiResponse = { message: "Subscription failed: " + errorText };
      return NextResponse.json(response, { status: res.status });
    }

    const response: ApiResponse = { message: "Subscribed successfully" };
    return NextResponse.json(response);

  } catch (error: unknown) {
    console.error("Server error:", error);

    let message = "Subscription failed";
    if (error instanceof Error) {
      message += ": " + error.message;
    }

    const response: ApiResponse = { message };
    return NextResponse.json(response, { status: 500 });
  }
}
