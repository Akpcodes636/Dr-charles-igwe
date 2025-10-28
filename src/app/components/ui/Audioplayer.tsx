"use client";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-2  py- rounded-lg">
      {/* Play / Pause */}
      <button
        onClick={togglePlayPause}
        className="text-[#FFFFFF] text-[20px] hover:scale-110 transition cursor-pointer" aria-label="button"
      >
        {isPlaying ? <IoMdPause /> : <FaCirclePlay />}
      </button>
      <div className="flex items-center justify-between text-xs text-[#FFFFFF80]">
        <span className="text-[12px] font-normal text-[#FFFFFF80] leading-[100%]">
          0:01 / 4:00
        </span>
      </div>

      {/* Progress + Time */}
      <div className="flex flex-col flex-1">
        {/* Progress bar */}
        <input
          type="range"
          className="h-1 accent-white bg-[#FFFFFF33] rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}
