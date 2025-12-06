"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const MentorshipHero = () => {
  return (
    <section className="bg-white">
      <div className="pt-[40px] md:pt-[80px] b-[80px] md:b-[100px]">
        <div className="flex flex-col md:flex-col lg:flex-row gap-[30px] pb-[80px] container-sm mx-auto">
          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  mx-auto h-[240px] md:h-[350px] lg:h-[464px] mb-[32px]">
            <Image
              src="/images/img-6.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-[50%_20%] rounded-[10px]"
            />
          </div>
          <div className="flex flex-col xl:py-[44px]">
            <p className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto text-[16px] md:text-[18px] text-[#000000] font-normal leading-[24px] md:leading-[32px] mb-[32px] md:mb-[28px]">
              Whether you&apos;re chasing your first certification or preparing
              for executive transition, I offer structured guidance that blends
              real-world experience with radical empathy.
            </p>

            <h3 className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] text-[24px] text-[#000000] mx-auto leading-[100%] font-medium md:font-semibold  mb-[16px] text-center">
              This is for you if you&apos;re:
            </h3>

            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[606px] mx-auto">
              <ul className="list-disc list-outside marker:text-[#FB8C00] pl-6 flex flex-col gap-[24px] mb-[40px] md:mb-[32px]">
                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  An emerging project manager stuck at “almost ready”.
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  A mid-career professional navigating cultural or career
                  transitions.
                </li>

                <li className="text-[16px] md:text-[18px] font-[400] leading-[24px] md:leading-[100%] text-[#000000]">
                  A leader who&apos;s questioning what&apos;s next..
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
              <Link href="/booking">
                <Button style="danger" type="button" css="w-[217px] h-[56px]">
                  Book a Coaching Call
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col itms-center justify-between md:flex-col lg:flex-row-reverse gap-[31px] container-sm mx-auto bg-[#0A1F44] py-[58px] md:py-[64px]">
          <h1 className="text-[#FFFFFF] text-center font-medium text-[24px] mb-[24px] block md:hidden lg:hidden">
            Coaching Outcomes:
          </h1>

          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  h-[240px] md:h-[500px] lg:h-[424px] mx-auto mb-[32px]">
            <Image
              src="/images/Maskg2.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-[50%_40%] rounded-[10px] "
            />
          </div>

          <div className="py-[38px]">
            <h3 className="hidden md:hidden lg:block text-center text-[24px] text-[#FFFFFF] font-medium mb-[16px]">
              Coaching Outcomes:
            </h3>
            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[600px] mx-auto">
              <div className="pb-[40px] md:pb-[32px]">
                <ul className="list-disc list-outside marker:text-[#FB8C00] pl-6 space-y-6">
                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    A tailored growth plan with strategic milestones
                  </li>

                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    Interview, certification, or promotion readiness
                  </li>

                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    Weekly momentum + lifetime mindset shift
                  </li>

                  <li className="text-[16px] md:text-[16px] lg:text-[18px] text-[#FFFFFF]">
                    Past mentees now lead programs in tech, construction,
                    energy, and public policy.
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
                <Link href="/booking">
                  <Button style="danger" type="button" css="w-[217px] h-[56px]">
                    Book a Coaching Call
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

export default MentorshipHero;
