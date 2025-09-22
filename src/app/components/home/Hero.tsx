"use client";

import { heroImage } from "@/utils/contents/HomePage.content";
import Button from "../ui/Button";
import Image from "next/image";
import Header from "../Header";

const Hero = () => {
  return (
    <section className=" bg-[url(/images/Igwe-9.png)] bg-cover md:bg-cover lg:bg-cover bg-center md:bg-center lg:bg-bottom bg-no-repeat">
      <Header />
      <div className="container-sm  pb-[109px]">
        <div className="mb-[44px] md:mb-[56px] lg:mb-[96px]">
          <h1 className="text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] text-white font-allison text-center font-normal">
            Dr. Charles Igwe
          </h1>
          <p className="-mt-[15px] sm:-mt-[18px] md:-mt-[20px] lg:-mt-[35px] text-white text-center text-[12px] md:text-[13px] lg:text-[13px] font-normal leading-[100%] max-w-[248px] md:max-w-[400px] lg:max-w-[527px] mx-auto">
            Public Speaker | Mentor | Coach | Project & Program Management
            Advisory
          </p>
        </div>
        <div>
          <h1 className="hidden md:block  text-[37px] text-white text-center font-semibold mb-[16px]">
            Inspiring Growth. Empowering Leaders. Driving Transformation.
          </h1>
          <h1 className="md:hidden lg:hidden text-[32px] text-white font-semibold text-center">
            Inspiring Growth.
          </h1>
          <p className="text-white max-w-[358px] md:max-w-[500px] lg:max-w-[901px] mx-auto  text-[16px]  text-center mb-[40px]">
            Program Manager, Educator, and Leadership Coach with a passion for
            mentoring, public speaking, and helping organizations thrive in a
            rapidly changing world.
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row lg:flex-row justify-center gap-[32px] md:gap-[60px] lg:gap-[60px] mb-[80px]">
          <Button style="danger" css="" type="button">
            Book Charles to Speak
          </Button>
          <Button style="nobg" css="w-[217px]" type="button">
            Listen to Podcast
          </Button>
        </div>

        <div className="flex items-center justify-center gap-[53px] md:gap-[93px] lg:gap-[93px]">
          {heroImage.map((i, j) => {
            return (
              <div className=" w-[40px] h-[40px] md:w-[63.84px] md:h-[63.84px] lg:w-[63px] lg:h-[63px]"   key={j}>
                <Image
                  src={i.image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
        {/* <div className="">
          <div className="flex items-center justify-center gap-[93.94px] ">
            {heroImage.map((i, j) => {
              return (
                <div key={j} className="">
                  <Image
                    src={i.image}
                    alt="logos"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
