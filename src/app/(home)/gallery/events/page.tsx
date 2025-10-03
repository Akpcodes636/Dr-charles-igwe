"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import EventCard from "@/app/components/ui/EventCard";
import { events } from "@/utils/contents/HomePage.content";
import { CiSearch } from "react-icons/ci";

const Page = () => {
  return (
    <section>
      <Header />
      <div className="container-sm mx-auto pt-[16px] md:pt-[100px]">
        <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row">
          <h2 className="text-white font-semibold text-[22px] md:text-[30px] leading-[28px] md;leading-[100%] mb-[24px]">
            Events Gallery
          </h2>
          <div className="mb-[40px]">
            <div className=" w-full max-w-[358px] h-[40px] flex items-center border border-white rounded-full px-3 bg-transparent shadow-sm">
              <input
                type="search"
                placeholder="Search events..."
                className="flex-1 bg-transparent outline-none px-2 text-sm placeholder-gray-500 text-white"
              />
              <CiSearch size="20" color="#FFFFFFB2" className="transition" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {events.map((event, index) => (
            <EventCard
              eventSlug={event.eventSlug}
              key={index}
              title={event.title}
              img={event.img}
              location={event.location}
              date={event.date}
            />
          ))}
        </div>
        <div className="py-[56px] md:py-[80px]">
          <h3 className="text-[20px] md:text-[24px] text-white leading-[100%] text-center font-semibold mb-[24px]">
            Want Charles to speak at your next event?
          </h3>
          <div className="flex items-center justify-center">
            <Button type="button" style="danger">
              Book Charles to Speak
            </Button>
          </div>
        </div>
      </div>
      <Footer
        bgColor="bg-[#000000]"
      />
    </section>
  );
};

export default Page;
