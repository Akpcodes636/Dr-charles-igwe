"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import KingdomCard from "@/app/components/ui/KingdomCard";
import { kingdomContent } from "@/utils/contents/HomePage.content";

const Page = () => {
  return (
    <section>
      <Header />
      <div className="">
        <div className="py-[46px] md:py-[96px]">
          <h2 className="text-[22px] md:text-[30px] lg:text-[38px] leading-[28px] text-center text-white font-bold mb-[12px]">
            Kingdom Arena
          </h2>
          <p className="text-center text-[14px] text-white leading-[100%] md:text-[18px] w-full max-w-[330px] md:max-w-full lg:max-w-full mx-auto">
            Meet the kings and queens who inspire, collaborate, and drive
            meaningful impact alongside Charles Igwe.
          </p>
        </div>
        <div className="bg-white pt-[36px] md:pt-[80px] pb-[60px] md:pb-[180px]">
          <div className="container-sm mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[80px] gap-x-[16px]">
              {kingdomContent.map((item, index) => (
                <KingdomCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer bgColor="bg-[#000000]" />
    </section>
  );
};

export default Page;
