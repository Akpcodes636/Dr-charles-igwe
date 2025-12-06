"use client";
import Header from "../Header";

const AboutHeader = () => {
  return (
    <section>
      <div>
        <div className="bg-[#0A1F44] h-[276px] md:h-[280px] lg:h-full">
          <Header />
          <div className="py-[30px] md:py-[45px] lg:py-[84px]">
            <h2 className="text-[22px] md:text-[30px] lg:text-[38px] text-center text-[#FFFFFF] font-semibold leading-[28px] md:leading-[100%] block md:block lg:hidden ">
              Meet Dr. Charles Igwe
            </h2>
            <h2 className="text-[22px] md:text-[30px] lg:text-[38px] text-center text-[#FFFFFF] font-semibold leading-[28px] md:leading-[100%] hidden md:hidden lg:block">
              About Dr. Charles Igwe
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
