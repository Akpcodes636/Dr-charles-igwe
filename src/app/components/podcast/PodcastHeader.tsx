"use client";

"use client";
import Link from "next/link";
import Header from "../Header";
import Button from "../ui/Button";

const PodcastHeader = () => {
  return (
    <section>
      {/* Desktop Header */}
      <div className="hidden md:hidden lg:block">
        <Header />
      </div>

      {/* Hero Background */}
      <div
        className="
              h-[328px] sm:h-[320px] md:h-[350px] lg:h-[312px]
              bg-[url('/images/mobile-contact.png')]
              md:bg-[url('/images/Hero.png')]
              bg-no-repeat bg-cover bg-center
            "
      >
        {/* Mobile/Tablet Header */}
        <div className="block md:block lg:hidden">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="py-[16px] md:py-[56px] lg:py-[96px]">
          <h3 className="text-[#FFFFFF] text-center font-semibold text-[22px] md:text-[30px] lg:text-[38px] leading-[28px] md:leading-[100%] lg:leading-[100%] mb-[8px]">
            Fireside Chat with Global Leaders
          </h3>
          <p className="max-w-[330px] md:max-w-[500px] lg:max-w-full mx-auto w-full text-[#FFFFFF] text-center text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px]">
            Hosted by Dr. Charles Igwe, featuring authentic conversations on
            leadership, innovation, and growth.
          </p>
          <div className="flex items-center justify-center mt-[16px]">
            <Link href="/">
            <Button style="nobg" type="button">
              Listen to Podcast
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHeader;
