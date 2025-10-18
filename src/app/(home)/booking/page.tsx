"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Booking = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Grab key values
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const bookingOptions = formData.getAll("booking_options");

    // ✅ Step 1: Basic validation
    if (!firstName || !lastName) {
      toast.warning("Please provide your first and last name.");
      setLoading(false);
      return;
    }

    if (!email) {
      toast.warning("Please enter your email address.");
      setLoading(false);
      return;
    }

    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!message) {
      toast.warning("Please include a message.");
      setLoading(false);
      return;
    }

    if (bookingOptions.length === 0) {
      toast.warning("Please select at least one booking option.");
      setLoading(false);
      return;
    }

    // ✅ Step 2: Add access key and proceed
    formData.append("access_key", "58e857f7-a17d-4ec0-b8c2-9223c32cfd63");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your booking request has been sent successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* Desktop Header */}
      <div>
        <div className="hidden lg:block">
          <Header />
        </div>

        {/* Hero Background with Gradient */}
        <div
          className="
        relative
        h-[224px] sm:h-[320px] md:h-[330px] lg:h-0
        bg-[url('/images/igwe-15.png')]
        md:bg-[url('/images/igwe-15.png')] lg:bg-none
        bg-no-repeat bg-cover bg-[position:center_20%]
      "
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

          {/* Mobile/Tablet Header */}
          <div className="relative block lg:hidden">
            <Header />
          </div>
        </div>
      </div>

      <div className="pt-[40px] md:pt-[55px] bg-white  pb-[120px]">
        <div className="">
          <h3 className="text-[20px] md:text-[24px] text-[#000000] leading-[100%] text-center mb-[24px] block md:block lg:hidden">
            Book Charles Igwe
          </h3>
          <div className="container-sm mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-[31px]">
              <div className="max-w-[604px] h-[912px] bg-green-600 hidden md:hidden lg:block">
                <Image
                  src="/images/igwe-15.png"
                  width={500}
                  height={500}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-[20px] flex items-center justify-center flex-col text-center">
                <h1 className="hidden md:hidden lg:block text-[24px] font-semibold leading-[100%] mb-[16px]">
                  Book Charles Igwe
                </h1>
                <p className="text-gray-300 text-[16px] max-w-[400px] mb-[24px]">
                  Schedule a one-on-one session with Dr. Charles Igwe to discuss
                  leadership, strategy, or personal development. Choose a time
                  that works best for you.
                </p>
                <div>
                  <Link href="https://calendar.app.google/hRezLqXgUea8joJFA">
                    <Button style="danger" type="button">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer bgColor="bg-[#000000]" />
    </section>
  );
};

export default Booking;
