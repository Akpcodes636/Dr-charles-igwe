"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { Instagram } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
// import { FaFacebook } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";

interface FooterProps {
  bgColor?: string; // optional so it falls back if not provided
}

// Reusable collapsible footer section for mobile
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
        <h4 className="text-white text-[18px] font-semibold">{title}</h4>
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

// Social icons component
const SocialIcons = () => (
  <div className="flex gap-6 mt-4">
    <Link href="#">
      <GrFacebookOption size={20} color="white" />
    </Link>
    <Link href="#">
      <Instagram size={20} color="white" />
    </Link>
    <Link href="#">
      <RiTwitterXFill size={20} color="white" />
    </Link>
    <Link href="#">
      <FaLinkedinIn size={20} color="white" />
    </Link>
    <Link href="#">
      <IoLogoYoutube size={20} color="white" />
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

  // Navigation Links
  const NavigationLinks = () => (
    <>
      <Link href="/" className="text-white font-extralight text-[12px]">
        Home
      </Link>
      <Link href="/about" className="text-white font-extralight text-[12px]">
        About
      </Link>
      <Link href="/services" className="text-white font-extralight text-[12px]">
        Services
      </Link>
      <Link href="/blog" className="text-white font-extralight text-[12px]">
        Blog
      </Link>
      <Link href="/contact" className="text-white font-extralight text-[12px]">
        Contact
      </Link>
    </>
  );

  const ServiceLinks = () => {
    return (
      <>
        <Link href="/speaking" className="text-white text-[12px]">
          Public Speaking
        </Link>
        <Link href="/mentorship" className="text-white text-[12px]">
          Mentorship & Coaching
        </Link>
        <Link href="/leadership" className="text-white text-[12px]">
          Leadership Development & Training Programs
        </Link>
        <Link href="/podcast" className="text-white text-[12px]">
          Podcast & Fireside Chat Host
        </Link>
        <Link href="/project" className="text-white text-[12px]">
          Project & Program Management Advisory
        </Link>
      </>
    );
  };

  // Newsletter form
  const Newsletter = () => (
    <div className="w-full max-w-[365px]">
      <h2 className="text-[16px] md:text-[18px] font-medium text-white mb-3">
        Subscribe to My Newsletter
      </h2>
      <p className="text-[14px] text-[#FFFFFFA6] mb-4">
        Get insights on leadership, growth, and innovation delivered straight to
        your inbox.
      </p>
      <div className="relative w-full max-w-[400px]">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-[#FFFFF163] placeholder-white px-4 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffffff80] text-white"
        />
        <Button
          css="absolute right-0 top-0 bottom-1 w-[111px] h-[56px] rounded-none!"
          style="danger"
          type="button"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );

  return (
    <footer className={`${bgColor} px-[20px] md:px-[0px] lg:px-[0px]`}>
      <section className="pt-[40px]  pb-[3px] md:pt-[50px] md:pb-[8px] lg:pt-[80px] lg:pb-[5px]">
        <div className="">
          {/* Top section: logo + description */}
          <div className="text-center mb-[40px]">
            <h1 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-white font-allison font-normal">
              Dr. Charles Igwe
            </h1>
            <p className="-mt-[15px] sm:-mt-[18px] md:-mt-[20px] lg:-mt-[35px] text-white text-center text-[12px] md:text-[13px] max-w-[527px] mx-auto leading-tight">
              Public Speaker | Mentor | Coach | Project & Program Management
              Advisory
            </p>
          </div>

          {/* Grid for sections */}
          <div
            className={`
    grid mb-[48px]
    ${
      isMobile
        ? "grid-cols-1 gap-y-[32px]"
        : isTablet
        ? "grid-cols-2 gap-x-[2px] gap-y-[40px] px-[40px]"
        : "grid-cols-12 gap-x-[0px] px-[50px]"
    }
  `}
          >
            {/* Newsletter - spans 5/12 */}
            {!isMobile && (
              <div className="col-span-5">
                <Newsletter />
              </div>
            )}

            {/* Navigation - spans 2/12 */}
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

            {/* Services - spans 3/12 */}
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

            {/* Contact - spans 2/12 */}
            {!isMobile && (
              <div className="col-span-2">
                <h4 className="text-white text-[16px] font-semibold mb-4">
                  Contact
                </h4>
                <div className="flex flex-col gap-[12px] text-[12px]">
                  <span className="text-white">
                    charlesjulius.igwe@gmail.com
                  </span>
                  {/* <span className="text-white text-[12px]">+1 900 765 47879</span> */}
                  <SocialIcons />
                </div>
              </div>
            )}
          </div>

          {/* Mobile collapsible sections */}
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
                    charlesjulius.igwe@gmail.com
                  </span>
                  <span className="text-white">+1 900 765 47879</span>
                  <SocialIcons />
                </div>
              </FooterSection>
            </>
          )}

          {/* Bottom copyright */}
          <div className="border-t border-[#FFFFFF40] pt-6 mt-[40px]">
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
