"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const ProjectHero = () => {
  return (
    <section className="bg-white">
      <div className="pt-[40px] md:pt-[80px] pb-[80px] md:pb-[100px] container-sm mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row gap-[30px] pb-[80px]">
          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  mx-auto h-[240px] md:h-[500px] lg:h-[672px] mb-[32px]">
            <Image
              src="/images/image-16x.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-[50%_20%] rounded-[10px]"
            />
          </div>
          <div className="flex flex-col xl:py-[44px]">
            <p className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto text-[16px] md:text-[18px] text-[#000000] font-normal leading-[24px] md:leading-[32px] mb-[32px] md:mb-[28px]">
              With 15+ years of leadership and service across infrastructure,
              energy, tech, manufacturing, and education and nuclear and clean
              sectors, I partner with organizations to:
            </p>

            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[606px] mx-auto mb-[40px]">
              <ul className="list-disc list-outside marker:text-[#FB8C00] pl-6 flex flex-col gap-[24px] mb-[40px] md:mb-[32px]">
                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  Deliver projects that don&apos;t just finish — they matter.
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  Advisory Solutions:
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  PMO setup &amp; transformation
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  Portfolio risk alignment and delivery audits
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  Program recovery and turnaround strategies
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  Executive coaching for project sponsors
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  The Innovation Mindset: How to Lead When You Don&apos;t Know
                  the Answer
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
              <Link href="/booking">
                <Button style="danger" type="button" css="w-[271px] h-[56px]">
                  Book a Strategy Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Second column
        <div className="flex flex-col itms-center justify-between md:flex-col lg:flex-row-reverse gap-[31px]">
          <h1 className="text-[#000000] text-center font-medium text-[24px] mb-[24px] block md:hidden lg:hidden">
            Expert Guidance, Tailored Solutions
          </h1>

          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  h-[240px] md:h-[300px] lg:h-[424px] mx-auto mb-[32px]">
            <Image
              src="/images/project-2.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-top rounded-[10px]"
            />
          </div>

          <div>
            <h3 className="hidden md:hidden lg:block text-center text-[24px] text-[#000000] font-medium mb-[16px]">
              Expert Guidance, Tailored Solutions
            </h3>
            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[600px] mx-auto">
              <div className="pb-[40px] md:pb-[32px]">
                <ul className="list-disc l-6 space-y-6 marker:text-[#FB8C00]">
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    Decades of leadership & project management experience
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    Practical, not just theoretical approaches
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    Proven track record with organizations and teams
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    Tailored frameworks that adapt to your unique challenges
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
                <Link href="/booking">
                  <Button style="danger" type="button">
                    Book Charles to Speak
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectHero;
