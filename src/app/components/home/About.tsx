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
    "/images/Igwe-9.png",
    "/images/Public-speaking-1.png",
    "/images/Igwe-34.png",
    "/images/Igwe-34.png",
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
              <div className="w-full mx-auto max-w-[470px] md:max-w-[500px] lg:max-w-[605px] h-[270px] md:h-[380px] lg:h-[456px] border-[3px] border-[#E28101] rounded-[10px]">
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
              <p className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] w-full max-w-[358px] md:max-w-[500px] mx-auto lg:max-w-[605px] pt-[32px] pb-[40px]">
                Dr. Charles Igwe is a Program Manager, educator, and leadership
                coach with over a decade of experience leading complex projects
                and developing talent in highly regulated industries. As the
                host of the Fireside Chat series, he facilitates authentic
                conversations with global leaders on leadership, innovation, and
                career growth. Passionate about mentoring, coaching, and public
                speaking, Charles empowers individuals and organizations to
                unlock hidden potential, embrace innovation, and build powerful
                skills.
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
