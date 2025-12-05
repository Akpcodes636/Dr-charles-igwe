"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SubHeader from "../ui/Subheader";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section>
      <SubHeader text="Our Services" />
      <div className="py-[40px] container-sm mx-auto bg-[#0A1F44]">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {/* 1️⃣ Public Speaking */}
            <div
              className="w-full mx-auto max-w-[358px] md:max-w-[393px] h-[232px] bg-[#16366F] rounded-[5px] transition-all duration-300 hover:bg-[#E28101] hover:cursor-pointer group"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
            >
              <div className="py-[21px] px-[16px]">
                <div className="">
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px] group-hover:bg-black transition-all duration-300">
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

                  <div>
                    <h3 className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-white font-medium leading-[28px] mb-[8px] group-hover:text-black transition-all duration-300">
                    Public Speaking & Keynote Engagements                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2 group-hover:text-black transition-all duration-300">
                    Leadership, innovation, and resilience — told through real stories and with contagious clarity.
                    </p>
                    <Link
                      href="/speaking"
                      className="text-[#FB8C00] font-normal text-[12px] underline group-hover:text-black transition-all duration-300"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ Mentorship & Coaching */}
            <div
              className="w-full mx-auto max-w-[358px] md:max-w-[393px] h-[232px] bg-[#16366F] rounded-[5px] transition-all duration-300 hover:bg-[#E28101] hover:cursor-pointer group"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
            >
              <div className="py-[21px] px-[16px]">
                <div className="">
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px] group-hover:bg-black transition-all duration-300">
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

                  <div>
                    <h3 className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-white font-medium leading-[28px] mb-[8px] group-hover:text-black transition-all duration-300">
                    Leadership Development & Training Programs
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2 group-hover:text-black transition-all duration-300">
                    Transformation doesn&apos;t happen by accident — it&apos;s taught, modeled, and multiplied.
                    </p>
                    <Link
                      href="/mentorship"
                      className="text-[#FB8C00] font-normal text-[12px] underline group-hover:text-black transition-all duration-300"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3️⃣ Podcast & Fireside Chat Host */}
            <div
              className="w-full mx-auto max-w-[358px] md:max-w-[393px] h-[232px] bg-[#16366F] rounded-[5px] transition-all duration-300 hover:bg-[#E28101] hover:cursor-pointer group"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
            >
              <div className="py-[21px] px-[16px]">
                <div className="">
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px] group-hover:bg-black transition-all duration-300">
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

                  <div>
                    <h3 className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-white font-medium leading-[28px] mb-[8px] group-hover:text-black transition-all duration-300">
                    Project & Program Management Advisory
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2 group-hover:text-black transition-all duration-300">
                      Facilitating impactful conversations with global voices.
                    </p>
                    <Link
                      href="/project"
                      className="text-[#FB8C00] font-normal text-[12px] underline group-hover:text-black transition-all duration-300"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4️⃣ Leadership Development */}
            <div
              className="w-full mx-auto max-w-[358px] md:max-w-[393px] h-[232px] bg-[#16366F] rounded-[5px] transition-all duration-300 hover:bg-[#E28101] hover:cursor-pointer group"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
            >
              <div className="py-[21px] px-[16px]">
                <div className="">
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px] group-hover:bg-black transition-all duration-300">
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

                  <div>
                    <h3 className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-white font-medium leading-[28px] mb-[8px] group-hover:text-black transition-all duration-300">
                    Mentorship & Coaching
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2 group-hover:text-black transition-all duration-300">
                    Helping professionals go from overlooked to in-demand.
                    </p>
                    <Link
                      href="/mentorship"
                      className="text-[#FB8C00] font-normal text-[12px] underline group-hover:text-black transition-all duration-300"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 5️⃣ Image Card */}
            <div
              className="w-full mx-auto max-w-[358px] md:max-w-[393px] h-[232px] bg-[#16366F] rounded-[5px] hidden md:block lg:block"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
            >
              <Image
                src="/images/image-16.png"
                alt="service"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>

            {/* 6️⃣ Project & Program Management */}
            <div
              className="w-full mx-auto max-w-[358px] md:max-w-[393px] h-[232px] bg-[#16366F] rounded-[5px] transition-all duration-300 hover:bg-[#E28101] hover:cursor-pointer group"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
            >
              <div className="py-[21px] px-[16px]">
                <div className="">
                  <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px] group-hover:bg-black transition-all duration-300">
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

                  <div>
                    <h3 className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-white font-medium leading-[28px] mb-[8px] group-hover:text-black transition-all duration-300">
                    Podcast & Fireside Chat Host
                    </h3>
                    <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2 group-hover:text-black transition-all duration-300">
                    Facilitating impactful conversations with global voices.
                    </p>
                    <Link
                      href="/podcast"
                      className="text-[#FB8C00] font-normal text-[12px] underline group-hover:text-black transition-all duration-300"
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
