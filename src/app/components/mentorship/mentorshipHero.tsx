"use client";
import Image from "next/image";
import Button from "../ui/Button";

const MentorshipHero = () => {
  return (
    <section className="bg-white">
      <div className="pt-[40px] md:pt-[80px] pb-[80px] md:pb-[100px] container-sm mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row gap-[30px] pb-[80px]">
          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  mx-auto h-[240px] lg:h-[296px] mb-[32px]">
            <Image
              src="/images/mentor.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col xl:py-[44px]">
            <p className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[606px] mx-auto text-[16px] md:text-[18px] text-[#000000] font-normal leading-[24px] md:leading-[32px] mb-[32px] md:mb-[28px]">
              Through mentorship and coaching, Charles helps professionals
              unlock hidden strengths, build confidence, and accelerate career
              growth. His approach combines practical industry experience with
              empathetic leadership to empower individuals to thrive.
            </p>
            <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
              <Button style="danger" type="button">
                Book Charles to Speak
              </Button>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="flex flex-col itms-center justify-between md:flex-col lg:flex-row-reverse gap-[31px]">
          <h1 className="text-[#000000] text-center font-medium text-[24px] mb-[24px] block md:hidden lg:hidden">
            What You&apos;ll Gain
          </h1>

          <div className="w-full max-w-[358px] sm:max-w-[500px]  md:max-w-[800px] lg:max-w-[500px] xl:max-w-[605px]  h-[240px] md:h-[300px] lg:h-[424px] mx-auto mb-[32px]">
            <Image
              src="/images/mentor-1.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-top rounded-[10px]"
            />
          </div>

          <div>
            <h3 className="hidden md:hidden lg:block text-center text-[24px] text-[#000000] font-medium mb-[16px]">
              What You&apos;ll Gain
            </h3>
            <div className="w-full max-w-[358px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[600px] mx-auto">
              <div className="pb-[40px] md:pb-[32px]">
                <ul className="list-disc l-6 space-y-6 marker:text-[#FB8C00]">
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold">
                      Career Growth Support –
                    </span>{" "}
                    Build clarity and confidence in your professional journey.
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold">
                      {" "}
                      Leadership Skills Development –{" "}
                    </span>{" "}
                    Strengthen decision-making and people management.
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold">
                      Personalized Coaching –
                    </span>{" "}
                    Tailored strategies to achieve individual and organizational
                    goals.
                  </li>
                  <li className="text-[16px] md:text-[16px] lg:text-[18px]">
                    <span className="font-semibold">
                      Personalized Coaching –
                    </span>{" "}
                    Tailored strategies to achieve individual and organizational
                    goals.
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start">
                <Button style="danger" type="button">
                  Book Charles to Speak
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipHero;
