"use client";
import { useState } from "react";
import Image from "next/image";
import SubHeader from "../ui/Subheader";
import Pagination from "../ui/Pagination";
import Button from "../ui/Button";

const About = () => {
  const images = [
    "/images/Igwe-10.png",
    "/images/Igwe-10.png",
    "images/Igwe-11.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="">
      <div>
        <SubHeader text="The VALUE Enthusiast" />
        <div className="py-[40px] container-sm mx-auto">
          <h3 className="text-[18px] md:text-[28px] lg:text-[30px] font-medium text-center text-[#FFFFFF] mb-[16px] md:mb-[28px] lg:mb-[48px]">
            About Me
          </h3>
          <div className="flex items-center gap-[30px] flex-col md:flex-col lg:flex-row">
            <div>
              <div className="w-[358px] md:w-[500px]  lg:w-[605px] h-[270px] md:h-[380px] lg:h-[456px]">
                <Image
                  src={images[currentIndex]}
                  width={500}
                  height={500}
                  alt="Picture of Dr Charles Igwe"
                  className="w-full h-full object-cover"
                />
              </div>
              <Pagination
                activeIndex={currentIndex}
                setActiveIndex={setCurrentIndex}
              />
            </div>
            <div>
              <p className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] w-full max-w-[358px] md:max-w-[480px]  mx-auto lg:max-w-[605px] pt-[32px] pb-[40px]">
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
                <Button style="danger" type="button" css="w-[217px] h-[56px]">
                  Explore my Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
