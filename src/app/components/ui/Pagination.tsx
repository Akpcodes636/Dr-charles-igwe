"use client";
import { useEffect } from "react";

interface PaginationProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}


export default function Pagination({
  activeIndex,
  setActiveIndex,
}: PaginationProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      // move to the next index (wrap around to 0 after last)
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [setActiveIndex]);

  return (
    <div className="flex items-center justify-center gap-[8px] pt-[10px] md:pt-[15px] lg:pt-[24px]">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`cursor-pointer transition-all duration-300 ${
            activeIndex === index
              ? "w-[30px] bg-[#D9790F]"
              : "w-[8px] bg-[#D9D9D9]"
          } h-[8px] rounded-[19px]`}
        ></div>
      ))}
    </div>
  );
}
