"use client";
import Image from "next/image";
import Pagination from "../ui/Pagination";
import { useState } from "react";
import Button from "../ui/Button";
import Footer from "../Footer";

const AboutHero = () => {
  const images = [
    "/images/igwe-10.png",
    "/images/igwe-6.png",
    "/images/igwe-2.png",
    "/images/igwe-54.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="bg-white">
      <div className="py-[32px] md:py-[50px] lg:pt-[205px] container-sm mx-auto flex items-center justify-center flex-col md:flex-row lg:flex-row gap-[30px]">
        <div className="mb-[8px]">
          {/* <div className="max-w-[358px] sm:max-w-[400px] md:max-w-[300px] lg:max-w-[605px] mx-auto h-[240px] md:h-[400px] lg:h-[456px]"> */}
          <div className="max-w-[358px] sm:max-w-[400px] md:max-w-[500px] md:h-[450px] lg:max-w-[605px] lg:h-[456px] w-full h-[240px] sm:h-[400px]">
            <Image
              src={images[currentIndex]}
              width={500}
              height={500}
              alt="pictures of Charles Igwe"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="block lg:hidden">
            <Pagination
              activeIndex={currentIndex}
              setActiveIndex={setCurrentIndex}
            />
          </div>
        </div>
        <div>
          <p className="w-full mx-auto max-w-[358px] md:max-w-[500px] lg:max-w-[605px] text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[24px] md:leading-[26px] lg:leading-[34px] font-normal text-[#000000]">
            Dr. Charles Igwe is a Program Manager, educator, and leadership
            coach with over a decade of experience leading complex projects and
            developing talent in highly regulated industries. As the host of the
            Fireside Chat series, he facilitates authentic conversations with
            global leaders on leadership, innovation, and career growth.
            Passionate about mentoring, coaching, and public speaking, Charles
            empowers individuals and organizations to unlock hidden potential,
            embrace innovation, and build powerful skills.
          </p>
          <div className="mt-[20px] md:mt-[10px] lg:mt-[20px] flex items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start">
            <Button style="danger" type="button">
              Book Charles to Speak
            </Button>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="container-sm mx-auto py-[32px] md:py-[120px] flex items-center justify-center flex-col-reverse md:flex-row gap-[30px]">
        <div className="max-w-[358px] sm:max-w-[400px] md:max-w-[500px]  lg:max-w-[605px] mx-auto w-full">
          <p className=" text-[16px] md:text-[17px] lg:text-[20px] font-normal leading-[24px] md:leading-[34px] text-[#000000]">
            Some of his certifications include globally recognized credentials
            that reflect his expertise in project management, leadership, and
            continuous improvement.
          </p>
          <ul className="flex flex-wrap gap-y-[16px] md:gap-y-[20px] lg::gap-y-[32px] list-disc list-inside text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-black mt-[16px] marker:text-[#621FA2] mb-[15px] md:mb-[17px] lg:mb-[40px]">
            <li className="w-1/3">PMP</li>
            <li className="w-1/3">PMI-RMP</li>
            <li className="w-1/3">PMI-ACP</li>
            <li className="w-1/3">PRINCE2</li>
            <li className="w-1/3">MSP</li>
            <li className="w-1/3">IAM Cert</li>
            <li className="w-1/2">Lean Six Sigma Black Belt</li>
            <li className="w-1/3">LEED GA</li>
          </ul>
          <div className="flex items-center justify-center md:items-start md:justify-start">
          <Button style="danger" type="button">
            Book Charles to Speak
          </Button>

          </div>
        </div>
        <div className="max-w-[358px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[605px] md:h-[400px] lg:h-[465px] w-full mx-auto h-[240px] mb-[24px] ">
          <Image
            src="/images/Igwe-54.png"
            width={500}
            height={500}
            alt="Picture of Charles"
            className="rounded-[10px] w-full h-full object-cover"
          />
        </div>
      </div>
      <Footer bgColor="bg-[#000000]" />
    </section>
  );
};

export default AboutHero;
