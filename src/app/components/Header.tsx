"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

interface NavChild {
  title: string;
  router: string;
}

interface NavLink {
  title: string;
  router?: string;
  icon?: React.ReactNode;
  children?: NavChild[];
}

const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
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
      router: "/services",
    },
    {
      title: "Gallery",
      icon: <IoIosArrowDown />,
      children: [
        { title: "Events", router: "/gallery/events" },
        { title: "Kingdom Arena", router: "/gallery/kingdom-arena" },
      ],
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

  const closeNav = () => {
    setOpenNav(false);
    setOpenDropdown(null);
  };
  const openNavMenu = () => setOpenNav(true);

 const toggleDropdown = (title: string) => {
  setOpenDropdown(openDropdown === title ? null : title);
};

  return (
    <header className="bg-transparent md:bg-transparent lg:bg-white xl:bg-white p-[12px]">
      {/* Overlay for mobile when nav is open */}
      <div className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div
          onClick={closeNav}
          className={`${
            openNav
              ? "translate-x-0 duration-150"
              : "duration-150 max-xl:translate-x-[200%]"
          } fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px] xl:hidden`}
        />

        {/* {/* Hamburger Menu (mobile only) */}
        <div className="flex items-center justify-end lg:hidden w-full">
          <div
            onClick={openNavMenu}
            className="flex items-center justify-center rounded-full bg-white p-2 cursor-pointer"
          >
            <RxHamburgerMenu size={28} className="text-black" />
          </div>
        </div>
        <div className="container-sm flex items-center justify-center gap-10">
          {/* Nav Links */}
          <nav
            className={`
              ${openNav ? "translate-x-0 duration-150" : "duration-150 max-lg:translate-x-[200%]"}
              fixed left-0 right-0 top-0 z-50 min-h-screen px-8 pt-10 pb-20 max-lg:bg-white
              lg:relative lg:left-0 lg:right-0 lg:bottom-0 xl:static lg:flex-col lg:min-h-full lg:p-0 text-center
            `}
          >
            {/* Close Icon (mobile only) */}
            <div className="flex items-end justify-end lg:hidden">
              <X
                onClick={closeNav}
                size={24}
                className="text-black cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-center">
              {/* Nav Links */}
              <ul className="flex flex-col items-center justify-center text-[16px] font-normal text-[#00000080] max-lg:mt-9 lg:flex-row gap-10 lg:gap-[70px] xl:gap-[97px]">
                {navLinks?.map((l, i) => (
                  <li key={i} className="relative group">
                    {l.children ? (
                      <button
                        type="button"
                        onClick={() => toggleDropdown(l.title)}
                        onMouseEnter={() => setOpenDropdown(l.title)}
                        //  onMouseLeave={() => setOpenDropdown(null)}
                        className="hover:text-black flex items-center justify-center gap-1 cursor-pointer"
                      >
                        {l.title}
                        {l.icon}
                      </button>
                    ) : (
                      <Link
                        href={l.router!}
                        onClick={closeNav}
                        className="hover:text-black flex items-center justify-center gap-1"
                      >
                        {l.title}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {l.children && openDropdown === l.title && (
                      <ul
                        onMouseLeave={() =>
                          setOpenDropdown(null)
                        }
                        className="absolute left-0 top-full mt-2 min-w-[180px] flex flex-col bg-white shadow-2xl rounded-lg z-50"
                      >
                        {l.children.map((child, idx) => (
                          <li key={idx}>
                            <Link
                              href={child.router}
                              onClick={closeNav}
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button (mobile only, inside nav) */}
            <div className="mt-10 max-w-full w-[217px] h-[56px] mx-auto lg:hidden flex items-center justify-center">
              <Link href="/booking">
                <Button type="button" style="danger" css="w-[217px] h-[56px]">
                  Book Charles to Speak
                </Button>
              </Link>
            </div>
          </nav>
          {/* CTA Button (desktop only) */}
          <div className="hidden lg:block">
            <Link href="/booking">
              <Button type="button" style="danger" css="w-[217px] h-[56px]">
                Book Charles to Speak
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
