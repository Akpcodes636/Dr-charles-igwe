"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const LeadershipHero = () => {
  return (
    <section className="bg-white">
      <div className="pt-[40px] md:pt-[80px] pb-[80px] md:pb-[150px] container-sm mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row gap-[30px] pb-[80px]">
          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  mx-auto h-[240px] lg:h-[296px] mb-[32px]">
            <Image
              src="/images/mentor.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-top rounded-[10px]"
            />
          </div>
          <div className="flex flex-col xl:py-[44px]">
            <p className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto text-[16px] md:text-[18px] text-[#000000] font-normal leading-[24px] md:leading-[32px] mb-[32px] md:mb-[28px]">
              Charles designs and delivers practical training programs that help
              leaders strengthen core competencies, embrace change, and unlock
              their team&apos;s potential. His sessions blend industry
              knowledge, real-world case studies, and interactive learning for
              maximum impact.
            </p>
            <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
              <Link href="/booking">
                <Button style="danger" type="button">
                  Book Charles to Speak
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col itms-center justify-between md:flex-col lg:flex-row-reverse gap-[31px]">
          <h1 className="text-[#000000] text-center font-medium text-[24px] mb-[24px] block md:hidden lg:hidden">
            Program Focus Areas
          </h1>

          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  h-[240px] md:h-[300px] lg:h-[424px] mx-auto mb-[32px]">
            <Image
              src="/images/PMEvolve.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-top rounded-[10px]"
            />
          </div>

          <div>
            <h3 className="hidden md:hidden lg:block text-center text-[24px] text-[#000000] font-medium mb-[16px]">
              Program Focus Areas
            </h3>
            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[600px] mx-auto">
              <div className="pb-[40px] md:pb-[32px]">
                <ul className="list-disc l-6 space-y-6 marker:text-[#FB8C00]">
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold">Strategic Thinking –</span>{" "}
                    Enhancing decision-making and foresight.
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold"> Team Empowerment – </span>{" "}
                    Building trust, collaboration, and accountability.
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold">Change Leadership –</span>{" "}
                    Guiding organizations through transformation.
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold">
                      Power Skills & Innovation Mindset –
                    </span>{" "}
                    Communication, empathy, driving creativity, and
                    problem-solving.
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
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
