"use client";
import { useState } from "react";
import Image from "next/image";
import SubHeader from "../ui/Subheader";
import Pagination from "../ui/Pagination";
import Button from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  const images = [
    "/images/image00.jpg",
    "/images/Public-speaking-1.png",
    "/images/Igwe-34.png",
    "/images/image01.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section>
      <div>
        <SubHeader text="The VALUE Enthusiast" />
        <div className="py-[40px] container-sm mx-auto bg-[#0A1F44] overflow-hidden">
          <h3 className="text-[18px] md:text-[28px] lg:text-[30px] font-medium text-center text-[#FFFFFF] mb-[16px] md:mb-[28px] lg:mb-[48px]">
            About Me
          </h3>

          <div className="flex items-center gap-[30px] flex-col md:flex-col lg:flex-row">
            {/* Image section slides from LEFT */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full mx-auto max-w-full md:max-w-full lg:max-w-[605px] h-[270px] md:h-[380px] lg:h-[456px] border-[3px] border-[#E28101] rounded-[10px]">
                <Image
                  src={images[currentIndex]}
                  width={500}
                  height={500}
                  alt="Picture of Dr Charles Igwe"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <Pagination
                activeIndex={currentIndex}
                setActiveIndex={setCurrentIndex}
              />
            </motion.div>

            {/* Text section slides from RIGHT */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] w-full max-w-full md:max-w-full mx-auto lg:max-w-[605px]  mb-[40px]">
                My work has always been about one thing: helping people step
                into their next chapter ,with clarity, courage, and conviction.
              </p>
              <p className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] w-full max-w-full md:max-w-full mx-auto lg:max-w-[605px]  mb-[40px]">
                I&apos;m Dr. Charles Nnaemeka Igwe, educator, leadership coach,
                and Program Manager leading over 40 innovation projects in
                Canada&apos;s nuclear sector. I host the Fireside Chat series,
                where I sit down with global leaders to explore the forces that
                truly drive innovation, leadership, and growth.
              </p>
              <p className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] w-full max-w-full md:max-w-full mx-auto lg:max-w-[605px]  mb-[40px]">
                With more than a decade of experience delivering complex
                programs and developing talent in highly regulated industries,
                I&apos;ve learned that the true engine of transformation
                isn&apos;t process, it&apos;s people.
              </p>
              <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
                <Link href="/about">
                  <Button style="danger" type="button" css="w-[217px] h-[56px]">
                    Explore my Story
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
