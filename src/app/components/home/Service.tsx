"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import SubHeader from "../ui/Subheader";
import { services } from "@/utils/contents/HomePage.content";

const ServiceCard = ({
  title,
  description,
  icon,
  link,
}: {
  title: string;
  description: string;
  icon: string;
  link: string;
}) => {
  return (
    <div
      className="h-[232px] bg-[#16366F] rounded-[5px] p-[21px]
                 transition-all duration-300 hover:bg-[#E28101]
                 group cursor-pointer"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-out-cubic"
    >
      {/* Icon */}
      <div
        className="bg-white w-[40px] h-[40px] flex items-center justify-center
                   rounded-[5px] mb-[16px]
                   group-hover:bg-black transition-all duration-300"
      >
        <Image
          src={icon}
          width={22}
          height={19}
          alt="icon"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <h3
        className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px]
                   text-white font-medium leading-[28px] mb-[8px]
                   group-hover:text-black transition-all duration-300"
      >
        {title}
      </h3>

      <p
        className="text-[#FFFFFFB2] font-normal text-[16px] leading-[24px]
                   mb-[8px] line-clamp-2
                   group-hover:text-black transition-all duration-300"
      >
        {description}
      </p>

      <Link
        href={link}
        className="text-[#FB8C00] font-normal text-[12px] underline
                   group-hover:text-black transition-all duration-300"
      >
        Learn more
      </Link>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section>
      <SubHeader text="Our Services" />

      <div className="bg-[#0A1F44] py-[40px]">
        <div className="container-sm mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[40px]">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
