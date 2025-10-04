"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { AiFillAudio } from "react-icons/ai";
import {
  eventContent,
  podcastContent,
} from "@/utils/contents/HomePage.content";

const PodcastHero = () => {
  return (
    <section className="bg-white">
      <div className="container-sm mx-auto">
        <div className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[0px]">
          <h2 className="text-[24px] font-semibold text-[#000000] text-center md:text-center lg:text-start mb-[24px] md:mb-[32px]">
            Why Join Live?
          </h2>

          <div className="flex flex-col md:flex-row lg:flex-row gap-[24px] md:gap-[28px] lg:gap-[30px] items-center md:items-start lg:items-start">
            <div className="w-full max-w-[358px] sm:max-w-[800px]  md:max-w-[500px] lg:max-w-[605px] h-[300px] rounded-[10px] mx-auto">
              <Image
                src="/images/podcast-1.png"
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="w-full max-w-[358px] mx-auto sm:max-w-[800px] md:max-w-[500px] lg:max-w-[606px] h-[240px] md:h-[312px]">
              <p className="text-[16px] md:text-[17px] lg:text-[18px] font-normal text-[#000000] leading-[24px] md:leading-[32px] mb-[28px]">
                The Fireside Chat Podcast brings together industry leaders for
                honest conversations on leadership, innovation, and growth.
                Joining live gives you the chance to learn directly from
                experts, ask questions, and connect with a community of
                professionals passionate about making an impact.
              </p>
              <div className="flex items-center justify-center md:items-start md:justify-start">
                <Link href="/podcast">
                  <Button style="danger" type="button">
                    Listen to Podcast
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Latest Episodes */}
          <div className="py-[80px]">
            {/*  */}
            <div className="flex items-center justify-center md:justify-center lg:justify-between mb-[24px] md:mb-[8px]">
              <h2 className="text-[24px] font-[#000000] text-center font-medium leading-[100%] block md:block lg:hidden mb-[24px]">
                Latest Episodes
              </h2>
              <h2 className="text-[24px] font-[#000000] text-center font-medium leading-[100%] mb-[8px] hidden md:hidden lg:block">
                Latest Episodes
              </h2>
              <Link
                href="/"
                className="hidden md:hidden lg:block text-[14px] underline text-[#FB8C00] cursor-pointer font-normal"
              >
                View podcast
              </Link>
            </div>
            {/* Podcast Episodes  */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-[31px]">
              {podcastContent.map((podcast, index) => (
                <div key={index} className="mb-[64px]">
                  {/* Podcast thumbnail */}
                  <div className="bg-green-800 w-full max-w-[358px] sm:max-w-[800px] h-[136px] rounded-[10px] mx-auto md:max-w-[393px] md:h-[168px] mb-[24px] md:mb-[16px]">
                    <Image
                      src={podcast.img}
                      alt={podcast.title}
                      className="w-full h-full object-cover rounded-[10px]"
                      width={500}
                      height={500}
                    />
                  </div>

                  {/* Podcast details */}
                  <div className="w-full max-w-[358px] sm:max-w-[800px]  mx-auto md:max-w-[393px]">
                    <h3 className="text-[#000000] font-medium text-[20px] leading-[100%] mb-[8px]">
                      {podcast.title}
                    </h3>

                    <div className="flex items-center justify-start gap-[8px] mb-[8px]">
                      <CgProfile color="#606060B2" size={18} />
                      <p className="text-[#606060B2] text-[14px] font-normal">
                        {podcast.author}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center gap-2">
                        <CiCalendar size={20} />
                        <p className="text-[14px] text-[#00000066] font-normal">
                          {podcast.date}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <AiFillAudio size={20} color="#FB8C00" />
                        <p className="text-[#E28101] font-normal text-[16px] leading-[100%]">
                          Play Episode
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="py-[96px] ">
              <div>
                <h2 className="text-[24px] font-medium text-[#000000] leading-[100%] text-center md:text-start lg:text-start mb-[24px] md:mb-[32px]">
                  Upcoming Events
                </h2>
                <div className="flex flex-col gap-y-[40px]">
                  {eventContent.map((event, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center gap-x-[30px] flex-col sm:flex-col md:flex-row lg:flex-row"
                    >
                      {/* Image */}
                      <div className="w-full max-w-[358px] sm:max-w-[800px] md:max-w-[393px] mx-auto h-[136px] md:h-[165px] mb-[24px]">
                        <Image
                          src={event.img}
                          width={500}
                          height={500}
                          alt="pictures of incoming events"
                          className="w-full h-full object-cover rounded-[10px]"
                        />
                      </div>

                      {/* Text content */}
                      <div className="w-full mx-auto">
                        <h3 className="text-[#000000] font-medium text-[20px] leading-[100%] mb-[8px]">
                          {event.title}
                        </h3>

                        <div className="flex items-center justify-start gap-[8px] mb-[8px]">
                          <CgProfile color="#606060B2" size={18} />
                          <p className="text-[#606060B2] text-[14px] font-normal">
                            {event.authur}
                          </p>
                        </div>

                        <div className="flex gap-2 mb-[16px]">
                          <CiCalendar size={20} />
                          <p className="text-[14px] text-[#00000066] font-normal">
                            {event.date}
                          </p>
                        </div>

                        {/* Date and time */}
                        <div className="flex items-center justify-between">
                          <Link
                            href="/"
                            className="text-[16px] font-normal text-[#E28101] underline leading-[100%]"
                          >
                            Save the Date
                          </Link>
                          <Link
                            href="/"
                            className="text-[16px] font-normal text-[#E28101] underline leading-[100%]"
                          >
                            Register on Eventbrite
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;
