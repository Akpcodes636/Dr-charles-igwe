"use client";

import { useState } from "react";
import { toast } from "sonner";
import Button from "./ui/Button";
// import Button from "../ui/Button";

const isValidEmail = (email: string) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Successfully subscribed to the newsletter!");
      setEmail("");
    } catch (err: any) {
      toast.error(err.message || "Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[365px]">
      <h2 className="text-[16px] md:text-[18px] font-medium text-white mb-3">
        Subscribe to My Newsletter
      </h2>

      <p className="text-[14px] text-[#FFFFFFA6] mb-4">
        Get insights on leadership, growth, and innovation delivered straight to
        your inbox.
      </p>

      <div className="relative w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-[#FFFFF163] placeholder-white px-4 h-[56px]
                     rounded-md focus:outline-none focus:ring-2
                     focus:ring-[#ffffff80] text-white"
        />

        <Button
          css="absolute right-0 top-0 w-[111px] h-[56px] rounded-none!"
          style="danger"
          type="button"
          fn={handleSubscribe}
          disabled={loading}
        >
          {loading ? "subscribing..." : "Subscribe"}
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
