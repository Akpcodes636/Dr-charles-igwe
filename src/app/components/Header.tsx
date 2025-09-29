"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react"; // Close icon
// import { navLinks } from "@/utils/contents/HomePage.content";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./ui/Button";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const navLinks = [
    {
      title: "Home",
      router: "/",
    },
    {
      title: "About",
      router: "/about",
    },
    {
      title: "Services",
      router: "/Services",
    },
    {
      title: "Gallery",
      router: "/Gallery",
      icon: <IoIosArrowDown />,
    },
    {
      title: "Blog",
      router: "/blog",
    },
    {
      title: "Contact",
      router: "/contact",
    },
  ];

  const closeNav = () => setOpenNav(false);
  const openNavMenu = () => setOpenNav(true);

  return (
    <header className="bg-transparent md:bg-transparent lg:bg-white xl:bg-white p-[12px]">
      {/* Overlay for mobile when nav is open */}
      <div
        onClick={closeNav}
        className={`${
          openNav
            ? "translate-x-0 duration-150"
            : "duration-150 max-xl:translate-x-[200%]"
        } fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px] xl:hidden`}
      />

      <div className="container-sm flex items-center justify-between">
        {/* Hamburger Menu (mobile only) */}
        <div className="flex items-center justify-end lg:hidden w-full">
          <div
            onClick={openNavMenu}
            className="flex items-center justify-center rounded-full bg-white p-2 cursor-pointer"
          >
            <RxHamburgerMenu size={28} className="text-black" />
          </div>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            openNav
              ? "translate-x-0 duration-150"
              : "duration-150 max-lg:translate-x-[200%]"
          } fixed left-0 right-0 top-0 z-50 min-h-screen px-8 pt-10 pb-20 max-lg:bg-white lg:relative lg:left-0 lg:right-0 lg:bottom-0 
     xl:static lg:flex-col lg:min-h-full lg:p-0`}
        >
          {/* Close Icon (mobile only) */}
          <div className="flex justify-end lg:hidden">
            <X
              onClick={closeNav}
              size={24}
              className="text-black cursor-pointer"
            />
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col items-center text-[16px] font-normal text-[#00000080] max-lg:mt-9 lg:flex-row gap-10 lg:gap-[70px] xl:gap-[97px]">
            {navLinks?.map((l, i) => (
              <li onClick={closeNav} key={i}>
                <Link href={l.router} className="hover:text-black flex items-center justify-center gap-1">
                  {l.title}
                  {l.icon}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (mobile only, inside nav) */}
          <div className="mt-10 max-w-full w-[217px] h-[56px] mx-auto lg:hidden flex items-center justify-center">
            <Button type="button" style="danger" css="w-full">
              Book Charles to Speak
            </Button>
          </div>
        </nav>

        {/* CTA Button (desktop only) */}
        <div className="hidden lg:block">
          <Button type="button" style="danger" css="w-[217px]">
            Book Charles to Speak
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
