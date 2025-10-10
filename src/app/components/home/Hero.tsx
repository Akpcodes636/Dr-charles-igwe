"use client";

import { heroImage } from "@/utils/contents/HomePage.content";
import Button from "../ui/Button";
import Header from "../Header";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import HeroLogos from "../ui/HeroLogos";
import { useState } from "react";

const Hero = () => {
  const words = [
    "Inspiring Growth.",
    "Empowering Leaders.",
    "Driving Transformation.",
  ];

  const [currentWord, setCurrentWord] = useState(0);

  return (
    <section className="bg-[url(/images/Hero-1.jpg)] bg-cover md:bg-cover lg:bg-cover bg-center md:bg-center lg:bg-bottom bg-no-repeat">
      <Header />
      <div className="container-sm pb-[109px]">
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
          {/* Desktop */}
          <h1 className="hidden md:block text-[56px] text-white text-center font-semibold mb-[16px]">
            <span
              className={`${
                currentWord === 1 ? "text-[#FB8C00]" : "text-white"
              }`}
            >
              <Typewriter
                words={words}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={200}
                delaySpeed={2000}
                onLoopDone={() =>
                  setCurrentWord((prev) => (prev + 1) % words.length)
                }
                onType={(count) => setCurrentWord(count % words.length)}
              />
            </span>
          </h1>

          {/* Mobile */}
          <h1 className="md:hidden lg:hidden text-[32px] text-white font-semibold text-center">
          <span
              className={`${
                currentWord === 1 ? "text-[#FB8C00]" : "text-white"
              }`}
            >
            <Typewriter
              words={words}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              onLoopDone={() =>
                setCurrentWord((prev) => (prev + 1) % words.length)
              }
              onType={(count) => setCurrentWord(count % words.length)}
              />
              </span>
          </h1>

          <p className="text-white max-w-[358px] md:max-w-[500px] lg:max-w-[901px] mx-auto text-[16px] text-center mb-[40px]">
            Program Manager, Educator, and Leadership Coach with a passion for
            mentoring, public speaking, and helping organizations thrive in a
            rapidly changing world.
          </p>
        </div>

        <div className="flex items-center flex-col md:flex-row lg:flex-row justify-center gap-[32px] md:gap-[60px] lg:gap-[60px] mb-[80px]">
          <Link href="/booking">
            <Button style="danger" css="" type="button">
              Book Charles to Speak
            </Button>
          </Link>
          <Link href="/about">
            <Button style="nobg" css="w-[217px]" type="button">
              Learn more
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <HeroLogos heroImage={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
