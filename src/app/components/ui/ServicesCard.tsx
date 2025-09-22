"use client";
import { Servicestext } from "@/utils/contents/HomePage.content";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  icon:string,
  title:string,
  text:string,
  link:string
}


const ServiceCard = ({icon, title,text,link}:ServiceCardProps) => {
  return (
    <div className="w-full mx-auto max-w-[358px]  h-[232px] bg-[#16366F] rounded-[5px]">
      <div className="py-[21px] px-[16px]">
          <div className="">

            {/* Icon */}
            <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[5px] mb-[16px]">
              <div className="w-[22px] h-[19px]">
                <Image
                  src={icon}
                  width={500}
                  height={500}
                  alt="icon"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-[22px] text-white font-medium leading-[28px] mb-[8px]">
                {title}
              </h3>
              <p className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px] mb-[8px]">
                {text}
              </p>
              <Link
                href={link}
                className="text-[#FB8C00] font-normal text-[12px] underline"
              >
                Learn more
              </Link>
            </div>

          </div>
      </div>
    </div>
  );
};

export default ServiceCard;
