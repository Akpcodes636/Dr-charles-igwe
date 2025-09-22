"use client";
import Image from "next/image";
import AudioPlayer from "./Audioplayer";
import { communityText } from "@/utils/contents/HomePage.content";
// import { communityText } from "./data"; // you can move the array into a separate file if you want

const Audio = () => {
  return (
    <div className="grid gap-[40px] w-full max-w-[1200px] mx-auto">
      {communityText.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-[358px] md:max-w-[480px] lg:max-w-[606px] mx-auto border border-[#FFFFFF80] rounded-[8px] shadow-lg"
        >
          <div className="px-[16px] py-[8px] flex flex-col gap-4">
            {/* Title + Icon */}
            <div className="flex items-center gap-3">
              <div className="w-full max-w-[37px] h-[37px] rounded-[6px] bg-white flex items-center justify-center">
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt="microphone"
                  className="object-contain"
                />
              </div>
              <h3 className="text-[16px] md:text-[16px] lg:text-[18px] font-medium leading-snug text-white">
                {item.title}
              </h3>
            </div>

            {/* Author + Player (desktop/tablet) */}
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/images/Author.png"
                    alt="author"
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[10px] text-white">{item.author}</p>
              </div>
              <AudioPlayer />
            </div>

            {/* Author + Player (mobile) */}
            <div className="flex flex-col gap-3 lg:hidden">
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/images/Author.png"
                    alt="author"
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-white">{item.author}</p>
              </div>
              <AudioPlayer />
            </div>

            {/* Description */}
            <p className="text-[#FFFFFFB2] text-[12px] md:text-[14px] lg:text-[14px] leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Audio;
