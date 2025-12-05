"use client";
import Footer from "@/app/components/Footer";
import Testimonies from "@/app/components/home/Testimonies";
import ServicesHero from "@/app/components/services/ServiceHero";
import Button from "@/app/components/ui/Button";
import ServiceCards from "@/app/components/ui/ServiceCard";
import {
  AccountabilityText,
  Servicestext,
} from "@/utils/contents/HomePage.content";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section>
      <div>
        <ServicesHero />
        <div>
          <div className=" bg-white pt-[48px] md:pt-[80px] pb-[60px] md:pb-[80px]">
            <h1 className="text-[24px] md:text-[28px] font-medium md:font-semibold text-[#000000] leading-[100%] mb-[24px] md:mb-[32px] text-center">
              What I offer?
            </h1>
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-[24px]">
              {Servicestext.map((service, i) => (
                <div key={i} className="">
                  <ServiceCards
                    icon={service.icon}
                    title={service.title}
                    text={service.text}
                    link={service.link}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="container-sm mx-auto bg-white pt-[96px]">
                <h1 className="text-[#000000] text-center font-medium text-[24px] md:text-[28px] leading-[100%]">
                  Join the Accountability Community
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[27px] pt-[32px] pb-[162px] md:py-[89px] lg:py-[80px]">
                  <div
                    className="w-full max-w-[361px] md:max-w-[480px] lg:max-w-[608px] h-[320px] md:h-[420px]
                    lg:h-[541px]  mx-auto"
                  >
                    <Image
                      src="/images/Group-2i.png"
                      alt="Pictures of Dr charles and friends"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full max-w-[361px] md:max-w-[480px] lg:max-w-[605px] mx-auto h-[424px] py-[44.5px]">
                    <h3 className="mb-[32px] text-[16px] font-medium leading-[24px] text-[#000000]">
                      Set goals, find partners, and grow together with a network
                      of driven professionals.
                    </h3>
                    <div>
                      {AccountabilityText.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-start gap-[12px] md:gap-[18px] mb-[40px]"
                        >
                          {/* Icon box */}
                          <div className="w-full max-w-[48px] md:max-w-[50px] md:h-[50px] lg:max-w-[60px] lg:h-[60px] h-[48px] bg-[#16366F] rounded-[10px] flex items-center justify-center">
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
                            <h3 className="text-[16px] leading-[24px] md:leading-[28px] font-normal text-[#000000]">
                              {item.title}
                            </h3>
                          </div>
                          {/* Button box */}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start">
                      <Button
                        type="button"
                        style="danger"
                        css="w-[217px] h-[56px]"
                      >
                        Join the Community
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-[56px] md:py-[66px] bg-[#16366F] container-sm mx-auto">
              <div className="mb-[64px]">
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#FFFFFF] text-center mb-4">
                  Signature Frameworks
                </h2>
                <p className="text-[18px] leading-[32px] text-center font-normal text-white">
                  The CI3 Model – Clarity, Intent, Implementation, Impact. Every
                  service I offer is powered by my CI3 model. This isn&apos;t
                  theory. It&apos;s how{" "}
                  <span className="text-[#FB8C00]">
                    I led 40+ hydrogen projects, taught 500 students, and
                    mentored 6+ professionals annually into certified
                    leadership.
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[30px]">
                <div>
                  <ul className="list-disc pl-6 space-y-2  lg:space-y-6 mb-2 lg:mb-8 marker:text-[#FB8C00]">
                    <li className=" text-[16px] md:text-[18px]  font-semibold leading-[32px] text-white">
                      <span className="text-[#FB8C00]">Clarity –</span> Define
                      what success looks like
                    </li>

                    <li className="text-[16px] md:text-[18px] font-semibold leading-[32px] text-white">
                      <span className="text-[#FB8C00]">Intent –</span> Align
                      with the &apos;why&apos; and the stakeholders
                    </li>

                    <li className="text-[16px] md:text-[18px] font-semibold leading-[32px] text-white">
                      <span className="text-[#FB8C00]">Intent –</span> Align
                      with the &apos;why&apos; and the stakeholders
                    </li>

                    <li className="text-[16px] md:text-[18px] font-semibold leading-[32px] text-white">
                      <span className="text-[#FB8C00]">Impact –</span> Measure
                      what matters, not what&apos;s easiest
                    </li>
                  </ul>

                  <p className="text-[16px] md:text-[16px]  lg:text-[18px] font-semibold leading-[32px] text-[#FFFFFF] mb-[16px]">
                     Still Not Sure Where You Fit?
                  </p>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] leading-[32px] font-normal mb-[32px] text-[#FFFFFF]">
                    Let&apos;s talk. Whether you need a coach, speaker, or
                    strategic partner — the best way to start is a conversation.
                  </p>
                
                  <Link href="/booking">
                  <Button style="danger" type="button">
                    Book a Free Discovery Call
                  </Button>
                  </Link>
                </div>

                <div className="mx-auto max-w-full sm:max-w-full md:max-w-full lg:max-w-[605px] h-[320px] md:h-[320px] lg:h-[550px] xl:h-[472px] w-full bg-green-800 rounded-[10px]">
                  <Image
                    src="/images/Maskg(2).png"
                    width={500}
                    height={500}
                    alt="an image of Charles freeborn"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>

            <Testimonies />
          </div>
        </div>
        <Footer bgColor="bg-[#000000]" />
      </div>
    </section>
  );
};

export default Services;
