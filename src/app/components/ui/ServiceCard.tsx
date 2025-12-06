"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

// Reusable card
interface ServiceCardProps {
    icon: string;
    title: string;
    text: string;
    link: string;
  }
  
  const ServiceCards: React.FC<ServiceCardProps> = ({ icon, title, text, link }) => {
  return (
    <div className="w-full mx-auto max-w-[358px] md:max-w-[393px] h-[232px] bg-[#16366F] rounded-[5px]">
      <div className="py-[21px] px-[16px]">
        {/* Icon */}
        <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px]">
          <div className="w-[22px] h-[19px]">
            <Image
              src={icon}
              width={500}
              height={500}
              alt={title}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h3 className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-white font-medium leading-[28px] mb-[8px]">
            {title}
          </h3>
          <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px] line-clamp-2">
            {text}
          </p>
          <Link
            href={link}
            className="text-[#FB8C00] font-normal text-[16px]"
          >
            <div className="flex items-center gap-[13px]">
            Learn more <span><FaArrowRight color="#FB8C00" size={20} /></span>

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
