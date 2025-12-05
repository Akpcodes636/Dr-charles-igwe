"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const LeadershipHero = () => {
  return (
    <section className="bg-white">
      <div className="pt-[40px] md:pt-[80px]">
        <div className="flex flex-col md:flex-col lg:flex-row gap-[30px] pb-[80px] container-sm mx-auto">
          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  mx-auto h-[240px] lg:h-[528px] mb-[32px]">
            <Image
              src="/images/Maskg3.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-[50%_20%] rounded-[10px]"
            />
          </div>
          <div className="flex flex-col xl:py-[10px]">
            <div className="flex flex-col">
              <p className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto text-[16px] md:text-[18px] text-[#000000] font-normal leading-[24px] md:leading-[32px] mb-[32px] md:mb-[28px]">
                These programs are built for organizations that want to do more
                than “train.” They want to shape culture, upskill talent, and
                empower decision-makers from the inside out.
              </p>

              <h3 className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] text-[24px] text-[#000000] mx-auto leading-[100%] font-medium md:font-semibold mb-[16px] text-center">
                Program Focus Areas:
              </h3>

              <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto">
                <ul className="flex flex-col gap-[24px] mb-[40px] md:mb-[32px]">
                  <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                    <span className="text-[#FB8C00]">•</span> Strategic Thinking
                    & Decision Intelligence
                  </li>
                  <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                    <span className="text-[#FB8C00]">•</span> Team Empowerment &
                    Psychological Safety
                  </li>
                  <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                    <span className="text-[#FB8C00]">•</span> Leading Change in
                    Uncertain Times
                  </li>
                  <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                    <span className="text-[#FB8C00]">•</span>The Innovation
                    Mindset: How to Lead When You Don&apos;t Know the Answer
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
              <Link href="/booking">
                <Button style="danger" type="button">
                  Request a Custom Program
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col itms-center justify-between md:flex-col lg:flex-row-reverse gap-[31px] bg-[#0A1F44] container-sm mx-auto py-[42px] md:py-[92px]">
          <h1 className="text-[#FFFFFF] text-center font-medium text-[24px] mb-[24px] block md:hidden lg:hidden">
            Delivered Through:
          </h1>

          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  h-[240px] md:h-[300px] lg:h-[424px] mx-auto mb-[32px]">
            <Image
              src="/images/Photo1.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-top rounded-[10px]"
            />
          </div>

          <div>
            <h3 className="hidden md:hidden lg:block text-center text-[24px] text-[#FFFFFF] font-medium mb-[16px]">
              Delivered Through:
            </h3>
            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[600px] mx-auto">
              <div className="pb-[40px] md:pb-[32px]">
                <ul className="list-disc l-6 space-y-6 marker:text-[#FB8C00]">
                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    <span className="font-semibold"></span> 1–3 day intensives
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    <span className="font-semibold"></span> Modular online
                    learning + live sessions
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    <span className="font-semibold"></span> Executive
                    roundtables or cohort-style programs
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    <span className="font-semibold"></span> Bonus: All programs
                    come with a debrief & roadmap to ensure momentum
                    post-delivery.
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
                <Link href="/booking">
                  <Button style="danger" type="button">
                    Request a Custom Program
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
