"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import React from "react";
import Button from "../ui/Button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaLinkedin } from "react-icons/lia";
// import Button from "../ui/Button";
export default function ContactForm() {
  return (
    <section className="">
      <div className="container-sm mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gp-y-[96px] items-center">
          {/* Contact Information Section */}
          <div className="w-full h-full order-1 shadow-[0px_4px_16px_1px_#00000014]">
            <div className="w-full min-h-[285px] lg:h-full px-[16px] md:px-[30px] pt-[32px] pb-[64px] lg:p-[80px_30px_214px] bg-[#16366F] rounded-[5px]">
              <div>
                <div className="mb-[16px] text-center lg:text-start">
                  <h2 className="heading text-[22px] font-semibold lg:text-[26px] leading-[28px] mb-[8px] text-[#FFFFFF] text-center">
                    Get in Touch.
                  </h2>
                  <p className="text-[18px] font-normal leading-[100%] text-[#FFFFFF]">
                    Have a question or want to work together? Send a message -
                    I&apos;d love to hear from you
                  </p>
                </div>

                <div className="mt-[24px]">
                  {/* Email */}
                  <Link
                    href="mailto:charlesjulius.igwe@gmail.com"
                    className="flex items-center gap-2 mb-[24px] md:mb-[30px] lg:mb-[34px]"
                  >
                    <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center bg-[#ECECEC]">
                      <Mail size={20} color="#FB8C00" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[18px] leading-[100%] text-[#FFFFFF]">
                        Email Us
                      </h2>
                      <p className="font-normal text-[14px] lg:text-[16px] leading-[150%] text-[#FFFFFFB2]">
                        charlesjulius.igwe@gmail.com
                      </p>
                    </div>
                  </Link>

                  <div>
                    <h3 className="text-[18px] font-medium text-[#FFFFFF] leading-[24px]">
                      Follow us on social media
                    </h3>

                    <div className="flex gap-6 mt-4">
                      <Link href="#">
                        <FaFacebookF  size={20} color="white" />
                      </Link>
                      <Link href="#">
                        <FaInstagram size={20} color="white" />
                      </Link>
                      <Link href="#">
                        <RiTwitterXFill size={20} color="white" />
                      </Link>
                      <Link href="#">
                        <FaLinkedinIn  size={20} color="white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-white  shadow-[0px_4px_16px_1px_#00000014]">
            <div className="w-full h-full rounded-[5px]">
              <div className="py-[40px] px-[25px] lg:py-[53px] lg:px-[52px]">
                <h2 className="font-semibold text-[24px] leading-[36px] text-center mb-[24px] text-[#16366F]">
                  Send a Message
                </h2>

                <form>
                  <div className="mb-[32px]">
                    <label
                      htmlFor="name"
                      className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-[50px] lg:h-[52px] bg-[#EFEFEF] rounded-[5px] px-4 focus:outline-none"
                    />
                  </div>

                  <div className="mb-[32px]">
                    <label
                      htmlFor="email"
                      className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full h-[50px] lg:h-[52px] bg-[#EFEFEF] rounded-[5px] px-4 focus:outline-none"
                    />
                  </div>

                  <div className="mb-[32px]">
                    <label
                      htmlFor="message"
                      className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                    >
                      Message
                    </label>
                    <textarea className="w-full h-[144px] lg:h-[152px] bg-[#EFEFEF] rounded-[5px] resize-none p-4 focus:border-[#E72418] focus:outline-none"></textarea>
                  </div>

                  <div className="flex justify-center md:justify-start lg:justify-start">
                    <Button
                      type="button"
                      css="w-[182px] h-[48px] flex items-center justify-center bg-[#B81A14] text-white text-[16px]"
                      style="danger"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Form Section */}
        </div>
      </div>
    </section>
  );
}
