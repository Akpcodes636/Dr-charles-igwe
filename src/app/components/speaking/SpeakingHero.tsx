"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const SpeakingHero = () => {
  return (
    <section className="bg-white">
      <div className="pt-[40px] md:pt-[80px] pb-[80px] md:pb-[100px] container-sm mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row gap-[30px] pb-[80px]">
          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  mx-auto h-[240px] lg:h-[296px] mb-[32px]">
            <Image
              src="/images/group-1i.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-[50%_20%] rounded-[10px]"
            />
          </div>
          <div className="flex flex-col xl:py-[16px]">
            <p className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto text-[16px] md:text-[18px] text-[#000000] font-normal leading-[24px] md:leading-[32px] mb-[16px] md:mb-[28px]">
              Leadership, innovation, and resilience — told through real stories
              and delivered with contagious clarity.
            </p>
            <p className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto text-[16px] md:text-[18px] text-[#000000] font-normal leading-[24px] md:leading-[32px] mb-[16px] md:mb-[28px]">
              I&apos;ve spoken to rooms of 30 and auditoriums of 3,000 — but what
              never changes is the outcome: People leave with insight they can
              use and a fire they didn&apos;t expect.
            </p>
            <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
              <Link href="/booking">
                <Button style="danger" type="button" css="w-[217px] h-[56px]">
                  Invite Charles to Speak
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col itms-center justify-between md:flex-col lg:flex-row-reverse gap-[34px]">
          <h1 className="text-[#000000] text-center font-medium text-[24px] mb-[24px] block md:block lg:hidden">
          Signature Talks Include:
          </h1>

          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  h-[240px] md:h-[300px] lg:h-[624px] mx-auto mb-[32px]">
            <Image
              src="/images/group-2x.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>

          <div>
            <h3 className="hidden md:hidden lg:block text-left text-[24px] text-[#000000] font-medium mb-[16px]">
              Signature Talks Include:
            </h3>
            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[605px] mx-auto">
              <div className="pb-[40px] md:pb-[32px]">
                <ul className="list-disc l-6 space-y-6 marker:text-[#FB8C00]">
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    The Immigrant Advantage: – Resilience, Reinvention, and Real
                    Leadership
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    Project Management in the Age of AI
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                  Leading While Becoming – The Emotional Intelligence We Don&apos;t Talk About
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                  Innovation Isn&apos;t Optional – Making Change Stick in Traditional Environments
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                  Results You Can Expect
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                  Energized teams with renewed clarity
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                  Practical frameworks they can apply immediately
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center md:items-center md:justify-center  lg:items-start lg:justify-start">
                <Link href="/booking">
                  <Button style="danger" type="button" css="w-[217px] h-[56px]">
                    Invite Charles to Speak
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

export default SpeakingHero;
