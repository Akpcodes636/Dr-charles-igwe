"use client";
interface PaginationProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function Pagination({
  activeIndex,
  setActiveIndex,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-[8px] pt-[10px] md:pt-[15px] lg:pt-[24px]">
      {[0, 1,2,3].map((index) => (
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
