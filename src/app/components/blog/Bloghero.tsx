"use client";

import Header from "../Header";

const Blog = () => {
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
          h-[224px] sm:h-[320px] md:h-[330px] lg:h-[360px]
          bg-[url('/images/mobile-contact.png')]
          md:bg-[url('/images/Hero.png')]
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
        <div className="relative py-[16px] md:py-[56px] lg:py-[96px]">
          <h3 className="text-white text-center font-semibold text-[22px] md:text-[30px] lg:text-[38px] leading-[28px] md:leading-[100%] lg:leading-[100%] mb-[8px]">
            Blog
          </h3>
          <p className="max-w-[330px] md:max-w-[500px] lg:max-w-[774px] mx-auto w-full text-white text-center text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px]">
            Have a question or want to work together? Send a message—I&apos;d
            love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
