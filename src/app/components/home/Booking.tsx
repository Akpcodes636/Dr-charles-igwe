"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const Booking = () => {
  return (
    <section className="bg-[#000000]">
      <div className="container-sm mx-auto pt-[30px]">
        <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row">
          <div className="text-center md:text-start mb-[24px]">
            <p className="text-white font-extralight text-[16px] md:text-[18px] lg:text-[24px]">
              BOOK YOUR{" "}
            </p>
            <h3 className="text-[18px] md:text-[20px] lg:text-[40px] font-semibold leading-[100%] text-white">
              ONE-ON-ONE
            </h3>
            <p className="text-[22px] md:text-[24px] font-semibold leading-[100%] text-white mb-[24px]">
              Session with Dr. Charles now!
            </p>
            <div className="flex items-center justify-center md:items-start lg:items-start md:justify-start lg:justify-start">
              <Link href="/booking">
                <Button type="button" style="danger" css="w-[217px] h-[56px]">
                  Book Charles to Speak
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/Igwe-4.png"
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
