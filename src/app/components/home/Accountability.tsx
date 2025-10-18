"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import SubHeader from "../ui/Subheader";
import { AccountabilityText } from "@/utils/contents/HomePage.content";
import Button from "../ui/Button";

const Accountability = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // faster animation
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section>
      <SubHeader text="Join the Accountability Community" />
      <div className="container-sm mx-auto bg-[#0A1F44]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[27px] pt-[32px] pb-[162px] md:py-[89px] lg:py-[80px]">
          {/* Image section */}
          <div
            className="w-full max-w-[361px] md:max-w-[480px] lg:max-w-[608px] h-[320px] md:h-[420px] lg:h-[541px] mx-auto"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Image
              src="/images/igwe.png"
              alt="Pictures of Dr Charles and friends"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text section */}
          <div className="w-full max-w-[361px] md:max-w-[480px] lg:max-w-[605px] mx-auto h-[424px] py-[44.5px]">
            {/* Heading */}
            <h3
              className="mb-[32px] text-[16px] font-medium leading-[24px] text-white"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Set goals, find partners, and grow together with a network of
              driven professionals.
            </h3>

            {/* Text rows */}
            <div>
              {AccountabilityText.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-start gap-[12px] md:gap-[18px] mb-[40px]"
                  data-aos="fade-left"
                  data-aos-delay={150 + index * 150} // stagger timing
                >
                  {/* Icon box */}
                  <div className="w-full max-w-[48px] md:max-w-[50px] md:h-[50px] lg:max-w-[60px] lg:h-[60px] h-[48px] bg-[#FFFFFF66] rounded-[10px] flex items-center justify-center">
                    <div className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
                      <Image
                        src={item.icons}
                        alt={item.title}
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>

                  {/* Text box */}
                  <div className="w-full max-w-[298px] md:max-w-[359px] rounded-md">
                    <h3 className="text-[16px] leading-[24px] md:leading-[28px] font-normal text-[#FFFFFF]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              className="flex items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start"
              data-aos="fade-left"
              data-aos-delay={200 + AccountabilityText.length * 150}
            >
              <Button type="button" style="danger" css="w-[217px] h-[56px]">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accountability;
