"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import Button from "../ui/Button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // ✅ Step 1: Custom validation
    if (!name) {
      toast.warning("Please enter your name.");
      setLoading(false);
      return;
    }

    if (!email) {
      toast.warning("Please enter your email address.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!message) {
      toast.warning("Please enter a message before sending.");
      setLoading(false);
      return;
    }

    // ✅ Step 2: Proceed to Web3Forms API
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container-sm mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gp-y-[96px]">
          {/* Left Side: Get in Touch */}
          <div className="w-full h-full shadow-[0px_4px_16px_1px_#00000014]">
            <div className="w-full min-h-[285px] lg:h-full px-[16px] md:px-[30px] pt-[32px] pb-[64px] lg:p-[80px_30px_214px] bg-[#16366F] rounded-[5px]">
              <div>
                <div className="mb-[16px] text-center lg:text-start">
                  <h2 className="text-[22px] font-semibold lg:text-[26px] text-[#FFFFFF] text-center mb-[8px]">
                    Get in Touch.
                  </h2>
                  <p className="text-[18px] text-[#FFFFFF]">
                    Have a question or want to work together? Send a message —
                    I&apos;d love to hear from you.
                  </p>
                </div>

                <div className="mt-[24px]">
                  <Link
                    href="mailto:charlesjulius.igwe@gmail.com"
                    className="flex items-center gap-2 mb-[34px]"
                  >
                    <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center bg-[#ECECEC]">
                      <Mail size={20} color="#FB8C00" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[18px] text-[#FFFFFF]">
                        Email Us
                      </h2>
                      <p className="text-[14px] lg:text-[16px] text-[#FFFFFFB2]">
                        charles.igwe@ci3pro.ca
                      </p>
                    </div>
                  </Link>

                  <div>
                    <h3 className="text-[18px] font-medium text-[#FFFFFF]">
                      Follow us on social media
                    </h3>
                    <div className="flex gap-6 mt-4">
                      <Link href="#">
                        <FaFacebookF size={20} color="white" />
                      </Link>
                      <Link href="#">
                        <FaInstagram size={20} color="white" />
                      </Link>
                      <Link href="#">
                        <RiTwitterXFill size={20} color="white" />
                      </Link>
                      <Link href="#">
                        <FaLinkedinIn size={20} color="white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Send us a Message Form */}
          <div className="w-full h-full bg-white shadow-[0px_4px_16px_1px_#00000014]">
            <div className="py-[40px] px-[25px] lg:py-[53px] lg:px-[52px]">
              <h2 className="font-semibold text-[24px] text-center mb-[24px] text-[#16366F]">
                Send us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-[32px]"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="58e857f7-a17d-4ec0-b8c2-9223c32cfd63"
                />

                <div>
                  <label className="font-medium text-[16px] text-[#1E2A38]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full h-[50px] bg-[#EFEFEF] rounded-[5px] px-4 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-[16px] text-[#1E2A38]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full h-[50px] bg-[#EFEFEF] rounded-[5px] px-4 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-[16px] text-[#1E2A38]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Write your message..."
                    className="w-full h-[144px] bg-[#EFEFEF] rounded-[5px] resize-none p-4 focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex justify-center md:justify-start">
                  <Button
                    type="submit"
                    disabled={loading}
                    css="w-[182px] h-[48px] flex items-center justify-center bg-[#B81A14] text-white text-[16px]"
                    style="danger"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
