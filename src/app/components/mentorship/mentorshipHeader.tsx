"use client";
import Image from "next/image";
import Header from "../Header";

const MentorshipHeader = () => {
  return (
    <section>
      {/* Desktop Header */}
      <div className="hidden md:hidden lg:block">
        <Header />
      </div>

      {/* Hero Background */}
      <div
        className="
              h-[240px] sm:h-[320px] md:h-[350px] lg:h-[232px]
              bg-[url('/images/blog-img.jpg')]
              md:bg-[url('/images/blog-img.jpg')]
              bg-no-repeat bg-cover bg-center
            "
      >
        {/* Mobile/Tablet Header */}
        <div className="block md:block lg:hidden">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="py-[0px] md:py-[56px] lg:py-[96px]">
          <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-[10px]">
            <span>
              <Image
                src="/icons/emoji-flat_handshake.png"
                width={500}
                height={500}
                className="w-[30px] h-[26px] block md:block lg:hidden"
                alt="speaking icon"
              />
            </span>
            <h3 className="text-[#FFFFFF] text-center font-semibold text-[22px] md:text-[30px] lg:text-[38px] leading-[28px] md:leading-[100%] lg:leading-[100%] mb-[8px]">
              Mentorship & Coaching
            </h3>
            <span>
              <Image
                src="/icons/emoji-flat_handshake.png"
                width={500}
                height={500}
                className="w-[30px] h-[26px] hidden md:hidden lg:block"
                alt="speaking icon"
              />
            </span>
          </div>
            <p className="max-w-[330px] md:max-w-[500px] lg:max-w-full mx-auto w-full text-[#FFFFFF] text-center text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px]">
            Helping professionals go from overlooked to in-demand.
            </p>
        </div>
      </div>
    </section>
  );
};

export default MentorshipHeader;
