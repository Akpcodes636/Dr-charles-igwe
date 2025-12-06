// "use client";
// import Footer from "@/app/components/Footer";
// import Header from "@/app/components/Header";
// import Button from "@/app/components/ui/Button";
// import EventCard from "@/app/components/ui/EventCard";
// import { events } from "@/utils/contents/HomePage.content";
// import { CiSearch } from "react-icons/ci";

// const Page = () => {

//   return (
//     <section>
//       <Header />
//       <div className="container-sm mx-auto pt-[16px] md:pt-[100px]">
//         <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row">
//           <h2 className="text-white font-semibold text-[22px] md:text-[30px] leading-[28px] md;leading-[100%] mb-[24px]">
//             Events Gallery
//           </h2>
//           <div className="mb-[40px]">
//             <div className=" w-full max-w-[358px] h-[40px] flex items-center border border-white rounded-full px-3 bg-transparent shadow-sm">
//               <input
//                 type="search"
//                 placeholder="Search events..."
//                 className="flex-1 bg-transparent outline-none px-2 text-sm placeholder-gray-500 text-white"
//               />
//               <CiSearch size="20" color="#FFFFFFB2" className="transition" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
//           {events.map((event, index) => (
//             <EventCard
//               eventSlug={event.eventSlug}
//               key={index}
//               title={event.title}
//               img={event.img}
//               location={event.location}
//               date={event.date}
//             />
//           ))}
//         </div>
//         <div className="py-[56px] md:py-[80px]">
//           <h3 className="text-[20px] md:text-[24px] text-white leading-[100%] text-center font-semibold mb-[24px]">
//             Want Charles to speak at your next event?
//           </h3>
//           <div className="flex items-center justify-center">
//             <Button type="button" style="danger">
//               Book Charles to Speak
//             </Button>
//           </div>
//         </div>
//       </div>
//       <Footer
//         bgColor="bg-[#000000]"
//       />
//     </section>
//   );
// };

// export default Page;

"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/ui/Button";
import EventCard from "@/app/components/ui/EventCard";
import { CiSearch } from "react-icons/ci";
import { getEvents } from "@/sanity/lib/client";
import Loader from "@/app/components/ui/Loader";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa6";

interface Event {
  slug: string;
  title: string;
  img: string;
  location: string;
  date: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getEvents();

        // ⏳ simulate a loading delay (e.g., 2 seconds)
        setTimeout(() => {
          setEvents(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#0A1F44] border-[1px] border-white">
      <Header />
      {/* <h1 className="text-white text-8xl">Hello World!!!</h1> */}
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="container-sm mx-auto pt-[16px] md:pt-[100px] px- transition-opacity duration-500 ease-in">
          {/* Header + Search */}
          <div className="flex items-center justify-between flex-col md:flex-row">
            <h2 className="text-white font-semibold text-[22px] md:text-[30px] mb-[24px]">
              Events Gallery
            </h2>
            <div className="mb-[40px]">
              <div className="w-full max-w-[358px] h-[40px] flex items-center border border-white rounded-full px-3 bg-transparent shadow-sm">
                <input
                  type="search"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent outline-none px-2 text-sm placeholder-gray-500 text-white"
                />
                <CiSearch size="20" color="#FFFFFFB2" />
              </div>
            </div>
          </div>

          {/* Event Cards */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={index}
                  slug={event.slug}
                  title={event.title}
                  img={event.img}
                  location={event.location}
                  date={event.date}
                />
              ))}
            </div>
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-gray-500 py-10">
              <FaRegNewspaper className="w-16 h-16 mb-3 text-gray-400 animate-pulse" />
              <p className="text-center text-gray-500">
                No events found matching
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="py-[56px] md:py-[80px]">
            <h3 className="text-[20px] md:text-[24px] text-white text-center font-semibold mb-[24px]">
              Want Charles to speak at your next event?
            </h3>
            <div className="flex items-center justify-center">
              <Link href="/booking">
                <Button type="button" style="danger" css="w-[217px] h-[56px]">
                  Book Charles to Speak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer bgColor="bg-[#000000]" />
    </section>
  );
}
