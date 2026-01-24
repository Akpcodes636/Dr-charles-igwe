"use client";
import Image from "next/image";
import Audio from "../ui/Audio";
import SubHeader from "../ui/Subheader";
import Button from "../ui/Button";
import Link from "next/link";

const Community = () => {
  return (
    <section>
      <div>
        <SubHeader text="Fireside Chat Podcast" />
        <div className="py-[40px] md:py-[80px] container-sm mx-auto bg-[#0A1F44]">
          <div className="flex items-center justify-between gap-[30px] flex-col md:flex-col lg:flex-row">
            <div className="max-w-full md:max-w-full lg:max-w-full xl:max-w-[605px] w-full mx-auto h-[240px] md:h-[400px] lg:h-[640px] rounded-[10px]">
              <Image
                src="/images/hero-podcast.png"
                width={500}
                height={500}
                alt="a picture of dr charles igwe"
                className="w-full h-full object-contain hidden md:hidden lg:block"
              />
              <Image
                src="/images/AKP--161.png"
                width={500}
                height={500}
                alt="a picture of dr charles igwe"
                className="w-full h-full object-cover object-[30%_10%] block md:block lg:hidden border-[1.8px] border-[#E28101] rounded-[10px]"
              />
            </div>
            <div className="text-white pt-[40px] md:pt-[0px] lg:pt-[0px]">
              <p className="font-medium text-[16px] leading-[24px] max-w-full md:max-w-full lg:max-w-full xl:max-w-full w-full lg:max-w-[606px] mx-auto mb-[32px]">
                Join me monthly for 2 hours of authentic conversations with
                leaders on topics that matter to immigrant professionals.
              </p>

              <Audio />

              <div className="flex items-center pt-[30px] gap-[8px] flex-col md:flex-col lg:flex-row">
                <Link href="https://open.spotify.com/show/4J7Xkp2ZPTnmTqW9OTG5xq?si=H6F_y6OURfSKxuq8wjOXAA">
                  <Button style="danger" css="w-[300px] h-[56px]" type="button">
                    Listen to the Fireside Chat Podcast
                  </Button>
                </Link>
                <Link href="/event">
                  <Button style="nobg" css="w-[300px] h-[56px]" type="button">
                    Register for Upcoming Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
