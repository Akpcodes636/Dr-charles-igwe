"use client";

import Header from "@/app/components/Header";

const ContactHero = () => {
  return (
    <section>
      {/* Desktop Header */}
      <div className="hidden md:hidden lg:block">
        <Header />
      </div>

      {/* Hero Background */}
      <div
        className="
          h-[300px] sm:h-[340px] md:h-[350px] lg:h-[376px]
          bg-[url('/images/mobile-contact.png')]
          md:bg-[url('/images/Hero.png')]
          bg-no-repeat bg-cover bg-center
        "
      >

        
        {/* Mobile/Tablet Header */}
        <div className="block md:block lg:hidden">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="py-[16px] md:py-[56px] lg:py-[96px]">
          <h3 className="text-[#FFFFFF] text-center font-semibold text-[22px] md:text-[30px] lg:text-[38px] leading-[28px] md:leading-[100%] lg:leading-[100%] mb-[8px]">
            Contact Us
          </h3>
          <p className="max-w-[358px] md:max-w-[500px] lg:max-w-[774px] mx-auto w-full text-[#FFFFFF] text-center text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px]">
            Have a question or want to work together? Send a message—I&apos;d
            love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
