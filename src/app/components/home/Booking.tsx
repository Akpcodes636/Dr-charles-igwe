"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Booking = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // only animate once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#000000] overflow-hidden">
      <div className="container-sm mx-auto pt-[30px]">
        <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row">
          {/* ✅ Left Text Section */}
          <div
            data-aos="fade-right"
            className="text-center md:text-start mb-[24px]"
          >
            <p className="text-white font-semibold text-[16px] md:text-[18px] lg:text-[24px]">
              BOOK YOUR{" "}
            </p>
            <h3 className="text-[18px] md:text-[20px] lg:text-[40px] font-semibold leading-[100%] text-white">
              ONE-ON-ONE
            </h3>
            <p className="text-[22px] md:text-[24px] font-semibold leading-[100%] text-white mb-[24px]">
              Session with Dr. Charles now!
            </p>

            <div
              data-aos="left"
              data-aos-delay="300"
              className="flex items-center justify-center md:items-start lg:items-start md:justify-start lg:justify-start"
            >
              <Link href="/booking">
                <Button type="button" style="danger" css="w-[217px] h-[56px]">
                  Book Charles to Speak
                </Button>
              </Link>
            </div>
          </div>

          {/* ✅ Right Image Section */}
          <div data-aos="fade-left" data-aos-delay="200">
            <Image
              src="/images/image-16i.png"
              width={500}
              height={500}
              alt="picture of dr charles igwe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
