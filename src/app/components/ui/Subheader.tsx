"use client";

interface SubHeaderProps {
  text: string;
}

export default function SubHeader({ text }: SubHeaderProps) {
  return (
    <div className="bg-[#FFFFFF] p-[10px] md:p-[15px] lg:p-[20px]">
      <h2 className="text-[24px] font-semibold text-[#000000] md:text-[28px] lg:text-[32px] text-center leading-[100%]">
        {text}
      </h2>
    </div>
  );
}
