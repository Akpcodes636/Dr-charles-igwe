"use client";
import Image from "next/image";

type TestimonialCardProps = {
  image: string;
  text: string;
  name: string;
  role: string;
};

const TestimonialCard = ({ image, text, name, role }: TestimonialCardProps) => {
  return (
    <div className="max-w-[200px] md:max-w-[300px] lg:max-w-[330px] w-full h-[259px] md:h-[300px] lg:h-[383px] overflow-hidden shrink-0">
      {/* Image + Quote */}
      <div className="relative w-full h-[204px] md:h-[230px] lg:h-[310px]">
        <Image
          src={image}
          alt={`Testimonial from ${name}`}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />

        {/* Overlay for text */}
        <div className="absolute bottom-6 md:bottom-10 left-3 ">
          <p className="text-[12px] md:text-[14px] lg:text-[16px] text-white">
            “{text}”
          </p>
        </div>
      </div>

      {/* Name + Role */}
      <div className="bg-[#FB8C00] py-3">
        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-black font-medium text-center">
          {name}
        </h3>
        <p className="text-[10px] md:text-[12px] text-black/80 font-normal text-center">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
