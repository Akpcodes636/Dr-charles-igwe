"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  img: string;
  title: string;
  text: string;
  link: string;
}

const AboutCard: React.FC<ServiceItem> = ({ img, title, text, link }) => {
  return (
    <div className="">
      {/* Image Section */}
      <div className="max-w-full md:max-w-full xl:max-w-[393px] h-[200px] md:h-[285px] mx-auto w-full rounded-[10px] mb-[24px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover object-[50%_20%]"
          width={500}
          height={500}
        />
      </div>

      {/* Text Section */}
      <div>
        <h3 className="text-[20px] text-[#000000] font-medium leading-[100%] mb-[8px] text-start sm:text-center  md:text-center lg:text-center">
          {title}
        </h3>

        <p className="text-[16px] md:text-[18px] leading-[24px] font-normal text-[#000000B2] mb-[12px] text-start sm:text-center md:text-center lg:text-center">
          {text}
        </p>

        <Link
          href="/"
          className="text-[#E28101] text-[16px] font-normal leading-[100%] text-start sm:text-center md:text-center lg:text-center block"
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;
