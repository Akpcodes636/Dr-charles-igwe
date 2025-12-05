"use client";

import Link from "next/link";
import Header from "../Header";
import Button from "../ui/Button";

const ServicesHero = () => {
  return (
    <section>
      {/* Desktop Header */}
      <div className="hidden md:hidden lg:block">
        <Header />
      </div>

      {/* Hero Background with Gradient */}
      <div
        className="
          relative
          h-[416px]  sm:h-[420px] md:h-[330px] lg:h-[360px]
          bg-[url('/images/blog-img.jpg')]
          md:bg-[url('/images/blog-img.jpg')]
          bg-no-repeat bg-cover bg-center
        "
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

        {/* Mobile/Tablet Header */}
        <div className="relative block md:block lg:hidden">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="relative py-[16px] sm:py-[0px] md:py-[6px] lg:py-[96px]">
          <h3 className="text-white text-center font-semibold text-[22px] md:text-[30px] lg:text-[38px] leading-[28px] md:leading-[100%] lg:leading-[100%] mb-[8px]">
            Services
          </h3>
          <p className="max-w-[330px] md:max-w-[500px] lg:max-w-[774px] mx-auto w-full text-white text-center text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] mb-[24px] md:mb-[40px]">
            Empowering individuals and organizations through leadership,
            mentorship, and transformative learning experiences.
          </p>
          <div className="flex flex-col gap-y-[32px] md:flex-row md:gap-x-[60px] items-center justify-center  md:items-center md:justify-center">
            <Link href="/booking">
              <Button style="danger" type="button">
                Book Charles to Speak
              </Button>
            </Link>
            {/* <Link href="/podcast">
              <Button type="button" style="nobg" css="w-[217px]">
                Listen to Podcast
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
