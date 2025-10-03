"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import GoBack from "@/app/components/ui/GoBack";
import { Play, Play as PlayIcon } from "lucide-react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Page = () => {
  return (
    <section>
      <div>
        <Header />
        <div className="pt-[16px] md:pt-[40px]">
          <div className="container-sm mx-auto">
            <GoBack />
            <div className="pt-[40px]">
              <div className="w-full max-w-full sm:max-w-full md:max-w-full mx-auto bg-green-600 h-[200px] md:h-[240px] rounded-[10px]">
                <Image
                  src="/images/charles.png"
                  width={500}
                  height={500}
                  alt="picture of charles igwe"
                  className="w-full h-full object-cover rounded-[10px] hidden md:block lg:block"
                />
                <Image
                  src="/images/charles-2.png"
                  width={500}
                  height={500}
                  alt="picture of charles igwe"
                  className="w-full h-full object-cover rounded-[10px] block md:hidden lg:hidden"
                />
              </div>
              <div className="py-[24px] flex items-start justify-start md:items-center md:justify-center gap-x-[30px] gap-y-[8px] flex-col md:flex-row lg:flex-row">
                <div>
                  <h3 className="text-white text-[20px] font-medium leading-[100%] mb-[8px]">
                    Leadership Summit 2024
                  </h3>
                </div>
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <IoLocationOutline size={18} color="#FFFFFFB2" />
                  <p className="text-[#FFFFFFB2] text-[16px] font-normal">
                    Toronto, Canada
                  </p>
                </div>

                <div className="flex items-center gap-[8px] mb-[8px]">
                  <CiCalendar size={18} color="#FFFFFFB2" />
                  <p className="text-[#FFFFFFB2] text-[16px] font-normal">
                    March 15, 2024
                  </p>
                </div>
              </div>

              <div className="mb-[64px] md:mb-[94px]">
                <h3 className="text-[16px] font-normal leading-[100%] text-white md:text-[22px] mb-[16px]">
                  About Event
                </h3>
                <p className="text-white text-[16px] font-normal">
                  Lorem ipsum dolor sit amet consectetur. Bibendum eros volutpat
                  est tellus id suscipit sed tortor. Ac amet vel enim molestie
                  fermentum tempor et ipsum. Magna libero eu commodo risus.
                  Lectus diam tortor ut vestibulum eget vel. Nec tellus enim
                  justo adipiscing eu vitae at sed. Ornare netus vel volutpat
                  porttitor et.
                </p>
              </div>

              {/* Photos */}
              <div className="pb-[60px]">
                <h3 className="text-white text-[20px] md:text-[22px] font-medium md:font-semibold leading-[100%] mb-[24px]">
                  Photos
                </h3>
                <div className="flex items-center gap-x-[30px] gap-y-[24px] flex-col md:flex-col lg:flex-row">
                  <div className="w-full max-w-[358px] md:max-w-full md:h-[200px] mx-auto  h-[160px]">
                    <Image
                      src="/images/charles-2.png"
                      width={500}
                      height={500}
                      alt="picture of charles igwe"
                      className="w-full h-full object-cover rounded-[10px] md:rounded-[5px]"
                    />
                  </div>
                  <div className="w-full max-w-[358px] md:max-w-full md:h-[200px] mx-auto h-[160px] rounded-[10px] md:rounded-[5px]">
                    <Image
                      src="/images/charles-2.png"
                      width={500}
                      height={500}
                      alt="picture of charles igwe"
                      className="w-full h-full object-cover rounded-[10px] md:rounded-[5px]"
                    />
                  </div>
                  <div className="w-full max-w-[358px] md:max-w-full md:h-[200px] mx-auto h-[160px] rounded-[10px] md:rounded-[5px]">
                    <Image
                      src="/images/charles-2.png"
                      width={500}
                      height={500}
                      alt="picture of charles igwe"
                      className="w-full h-full object-cover rounded-[10px] md:rounded-[5px]"
                    />
                  </div>
                  <div className="w-full max-w-full sm:max-w-full md:max-w-full md:h-[200px] mx-auto h-[160px] rounded-[10px] md:rounded-[5px]">
                    <Image
                      src="/images/charles-2.png"
                      width={500}
                      height={500}
                      alt="picture of charles igwe"
                      className="w-full h-full object-cover rounded-[10px] md:rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
              {/* Videos */}
              <div className="pb-[96px]">
                <h3 className="text-white text-[20px] md:text-[22px] font-medium md:font-semibold leading-[100%] mb-[24px]">
                  Videos
                </h3>
                <div className="flex items-center justify-between gap-x-[31px] gap-y-[24px] flex-col md:flex-row">
                  {/* First Thumbnail */}
                  <div className="relative w-full max-w-[358px] md:max-w-full md:h-[200px] mx-auto h-[160px] rounded-[10px] md:rounded-[5px] overflow-hidden">
                    <Image
                      src="/images/charles-2.png"
                      width={500}
                      height={500}
                      alt="picture of charles igwe"
                      className="w-full h-full object-cover rounded-[10px] md:rounded-[5px]"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition">
                        <Play className="w-8 h-8 text-red-600" />
                      </div>
                    </div>
                  </div>

                  {/* Second Thumbnail */}
                  <div className="relative w-full max-w-[358px] md:max-w-full md:h-[200px] mx-auto h-[160px] rounded-[10px] md:rounded-[5px] overflow-hidden">
                    <Image
                      src="/images/charles-2.png"
                      width={500}
                      height={500}
                      alt="picture of charles igwe"
                      className="w-full h-full object-cover rounded-[10px] md:rounded-[5px]"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition">
                        <Play className="w-8 h-8 text-red-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-[56px] md:py-[80px]">
                <h3 className="text-[20px] md:text-[24px] text-white leading-[100%] text-center font-semibold mb-[24px]">
                  Want Charles to speak at your next event?
                </h3>
                <div className="flex items-center justify-center">
                  <Button type="button" style="danger">
                    Book Charles to Speak
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer bgColor="bg-[#000000]" />
      </div>
    </section>
  );
};

export default Page;
