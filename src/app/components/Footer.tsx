"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { ChevronDown } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiDiscord, SiTiktok } from "react-icons/si";
import Newsletter from "./Newsletter";

interface FooterProps {
  bgColor?: string;
}

const FooterSection = ({
  title,
  children,
  isMobile,
}: {
  title: string;
  children: ReactNode;
  isMobile: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSection = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8 mt-[48px] x-[20px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h2 className="text-white text-[18px] font-semibold">{title}</h2>
        {isMobile && (
          <ChevronDown
            size={20}
            color="white"
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </div>
      <div
        className={`${
          isMobile
            ? `overflow-hidden transition-all duration-300 ease ${
                isOpen ? "max-h-[50vh]" : "max-h-0"
              }`
            : "block"
        }`}
      >
        <div className={`flex flex-col gap-[16px] mt-4`}>{children}</div>
      </div>
    </div>
  );
};

const SocialIcons = () => (
  <div className="flex gap-4 mt-4">
    <Link href="https://www.tiktok.com/@dr_khase"  target="_blank" rel="noopener noreferrer">
      <SiTiktok size={20} color="white" />
    </Link>

    <Link href="https://www.instagram.com/khase1712"  target="_blank" rel="noopener noreferrer">
      <Instagram size={20} color="white" />
    </Link>
    <Link href="https://x.com/khase24"  target="_blank" rel="noopener noreferrer">
      <RiTwitterXFill size={20} color="white" />
    </Link>
    <Link href="https://www.linkedin.com/in/charles-igwe/"  target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn size={20} color="white" />
    </Link>
    <Link href="https://www.youtube.com/@dr_charlescafe"  target="_blank" rel="noopener noreferrer">
      <IoLogoYoutube size={20} color="white" />
    </Link>
    <Link
    href="https://discord.gg/h3UuHpR5pP"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SiDiscord size={20} color="white" />
  </Link>
  </div>
);

const Footer = ({ bgColor }: FooterProps) => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const NavigationLinks = () => (
    <>
      {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
        <Link
          key={item}
          href={`/${item === "Home" ? "" : item.toLowerCase()}`}
          className="text-white font-extralight text-[12px]"
        >
          {item}
        </Link>
      ))}
    </>
  );

  const ServiceLinks = () => (
    <>
      {[
        { name: "Public Speaking & Keynote Engagements", href: "/speaking" },
        { name: "Mentorship & Coaching", href: "/mentorship" },
        {
          name: "Leadership Development & Training Programs",
          href: "/leadership",
        },
        { name: "Project & Program Management Advisory", href: "/project" },
      ].map((service) => (
        <Link
          key={service.name}
          href={service.href}
          className="text-white text-[12px]"
        >
          {service.name}
        </Link>
      ))}
    </>
  );

  // const Newsletter = () => (
  //   <div className="w-full max-w-[365px]">
  //     <h2 className="text-[16px] md:text-[18px] font-medium text-white mb-3">
  //       Subscribe to My Newsletter
  //     </h2>
  //     <p className="text-[14px] text-[#FFFFFFA6] mb-4">
  //       Get insights on leadership, growth, and innovation delivered straight to
  //       your inbox.
  //     </p>
  //     <div className="relative w-full max-w-[400px]">
  //       <input
  //         type="email"
  //         placeholder="Enter your email"
  //         className="w-full bg-[#FFFFF163] placeholder-white px-4 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffffff80] text-white"
  //       />
  //       <Button
  //         css="absolute right-0 top-0 bottom-1 w-[111px] h-[56px] rounded-none!"
  //         style="danger"
  //         type="button"
  //       >
  //         Subscribe
  //       </Button>
  //     </div>
  //   </div>
  // );

 <Newsletter />
  

  return (
    <footer className={`${bgColor} px-[20px] md:px-[0px]`}>
      <section className="pt-[40px] pb-[3px] md:pt-[50px] md:pb-[8px] lg:pt-[80px] lg:pb-[5px]">
        <div className="">
          <div className="text-center mb-[40px]">
            <h1 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[80px] text-white font-allison font-normal">
              Dr. Charles Igwe
            </h1>
            <p className="-mt-[15px] text-white text-center text-[12px] md:text-[13px] max-w-[527px] mx-auto leading-tight">
              Public Speaker | Mentor | Coach | Project & Program Management
              Advisory
            </p>
          </div>

          {/* Grid Layout */}
          <div
            className={`grid mb-[48px] ${
              isMobile
                ? "grid-cols-1 gap-y-[32px]"
                : isTablet
                  ? "grid-cols-2 gap-x-[2px] gap-y-[40px] px-[40px]"
                  : "grid-cols-12 gap-x-[0px] px-[30px]"
            }`}
          >
            {!isMobile && (
              <div className="col-span-5">
                <Newsletter />
              </div>
            )}

            {!isMobile && (
              <div className="col-span-2">
                <h4 className="text-white text-[16px] font-semibold mb-4">
                  Navigation
                </h4>
                <div className="flex flex-col gap-[12px] text-[14px]">
                  <NavigationLinks />
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="col-span-3">
                <h4 className="text-white text-[16px] font-semibold mb-4">
                  Services
                </h4>
                <div className="flex flex-col gap-[12px] text-[14px]">
                  <ServiceLinks />
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="col-span-2">
                <h4 className="text-white text-[16px] font-semibold mb-4">
                  Contact
                </h4>
                <div className="flex flex-col gap-[12px] text-[12px]">
                  <span className="text-white">
                       charles.igwe@ci3pro.ca
                  </span>
                  <SocialIcons />
                </div>
              </div>
            )}
          </div>

          {/* Mobile sections */}
          {isMobile && (
            <>
              <Newsletter />
              <FooterSection title="Quick links" isMobile={isMobile}>
                <NavigationLinks />
              </FooterSection>
              <FooterSection title="Services" isMobile={isMobile}>
                <ServiceLinks />
              </FooterSection>
              <FooterSection title="Contact" isMobile={isMobile}>
                <div className="flex flex-col gap-[16px] text-[14px]">
                  <span className="text-white">
                    charles.igwe@ci3pro.ca
                  </span>
                  <SocialIcons />
                </div>
              </FooterSection>
            </>
          )}

          <div
            className="border-t border-[#FFFFFF40] pt-6 mt-[40px]"
            // data-aos="fade-up"
          >
            <p className="text-white text-[14px] text-center">
              © {currentYear} Dr. Charles Igwe. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
