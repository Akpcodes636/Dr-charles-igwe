"use client";
import { Servicestext } from "@/utils/contents/HomePage.content";
import ServiceCard from "../ui/ServicesCard";
import SubHeader from "../ui/Subheader";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section>
      <SubHeader text="Our Services" />
      {/* {Servicestext.map((service, index) => {
            return (
              <ServiceCard
              key={index}
                icon={service.icon}
                title={service.title}
                text={service.text}
                link={service.link}
              />
            );
          })} */}
      <div className="py-[40px] container-sm mx-auto">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            <div className="w-full mx-auto max-w-[358px] md:max-w-[393px]  h-[232px] bg-[#16366F] rounded-[5px]">
              <div className="py-[21px] px-[16px]">
                <div className="">
                  {/* Icon */}
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px]">
                    <div className="w-[22px] h-[19px]">
                      <Image
                        src="/icons/microphone.png"
                        width={500}
                        height={500}
                        alt="icon"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[22px] text-white font-medium leading-[28px] mb-[8px]">
                      Public Speaking
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2">
                      Leadership, Innovation, Continuous Improvement — delivered
                      through impactful talks,
                    </p>
                    <Link
                      href="/speaking"
                      className="text-[#FB8C00] font-normal text-[12px] underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* second service context */}
            <div className="w-full mx-auto max-w-[358px]  md:max-w-[393px]   h-[232px] bg-[#16366F] rounded-[5px]">
              <div className="py-[21px] px-[16px]">
                <div className="">
                  {/* Icon */}
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px]">
                    <div className="w-[22px] h-[19px]">
                      <Image
                        src="/icons/Briefcase.png"
                        width={500}
                        height={500}
                        alt="icon"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[22px] text-white font-medium leading-[28px] mb-[8px]">
                      Mentorship & Coaching
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2">
                      Guiding emerging leaders with clarity and purpose through
                      practical training and growth programs.
                    </p>
                    <Link
                      href="/mentorship"
                      className="text-[#FB8C00] font-normal text-[12px] underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Third service context */}
            <div className="w-full mx-auto max-w-[358px]  md:max-w-[393px]   h-[232px] bg-[#16366F] rounded-[5px]">
              <div className="py-[21px] px-[16px]">
                <div className="">
                  {/* Icon */}
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px]">
                    <div className="w-[22px] h-[19px]">
                      <Image
                        src="/icons/podcast.png"
                        width={500}
                        height={500}
                        alt="icon"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[22px] text-white font-medium leading-[28px] mb-[8px]">
                      Podcast & Fireside Chat Host
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2">
                      Facilitating impactful conversations with global voices.
                    </p>
                    <Link
                      href="/mentorship"
                      className="text-[#FB8C00] font-normal text-[12px] underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth service context */}
            <div className="w-full mx-auto max-w-[358px]  md:max-w-[393px]   h-[232px] bg-[#16366F] rounded-[5px]">
              <div className="py-[21px] px-[16px]">
                <div className="">
                  {/* Icon */}
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px]">
                    <div className="w-[22px] h-[19px]">
                      <Image
                        src="/icons/healthicons.png"
                        width={500}
                        height={500}
                        alt="icon"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[22px] text-white font-medium leading-[28px] mb-[8px] ">
                      Leadership Development & Training Programs
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2">
                      Strengthening leaders with practical skills for growth
                    </p>
                    <Link
                      href="/mentorship"
                      className="text-[#FB8C00] font-normal text-[12px] underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Fifth service context */}
            <div className="w-full mx-auto max-w-[358px]  md:max-w-[393px]   h-[232px] bg-[#16366F] rounded-[5px] hidden md:block lg:block">
              <Image
                src="/images/Igwe-9.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover "
              />
            </div>

            {/* Sixth service context */}
            <div className="w-full mx-auto max-w-[358px]  md:max-w-[393px]   h-[232px] bg-[#16366F] rounded-[5px]">
              <div className="py-[21px] px-[16px]">
                <div className="">
                  {/* Icon */}
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px]">
                    <div className="w-[22px] h-[19px]">
                      <Image
                        src="/icons/Icon.png"
                        width={500}
                        height={500}
                        alt="icon"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[22px] text-white font-medium leading-[28px] mb-[8px]">
                      Project & Program Management Advisory
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2">
                      Providing strategic guidance to ensure successful delivery
                      and long-term impact.,
                    </p>
                    <Link
                      href="/mentorship"
                      className="text-[#FB8C00] font-normal text-[12px] underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
