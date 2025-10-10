// "use client";

// import { useState } from "react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import Button from "@/app/components/ui/Button";
// import EventCard from "@/app/components/ui/EventCard";
// import { CiSearch } from "react-icons/ci";

// interface Event {
//   slug: string;
//   title: string;
//   img: string;
//   location: string;
//   date: string;
// }


// export default function EventsClient({ events }: { events: Event[] }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredEvents = events.filter((event) =>
//     event.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   console.log(filteredEvents)
//   return (
//     <section>
//       <Header />
//       <div className="container-sm mx-auto pt-[16px] md:pt-[100px]">
//         {/* Header + Search */}
//         <div className="flex items-center justify-between flex-col md:flex-row">
//           <h2 className="text-white font-semibold text-[22px] md:text-[30px] mb-[24px]">
//             Events Gallery
//           </h2>
//           <div className="mb-[40px]">
//             <div className="w-full max-w-[358px] h-[40px] flex items-center border border-white rounded-full px-3 bg-transparent shadow-sm">
//               <input
//                 type="search"
//                 placeholder="Search events..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="flex-1 bg-transparent outline-none px-2 text-sm placeholder-gray-500 text-white"
//               />
//               <CiSearch size="20" color="#FFFFFFB2" />
//             </div>
//           </div>
//         </div>

//         {/* Event Cards */}
//         {filteredEvents.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
//             {filteredEvents.map((event, index) => (
//               <EventCard
//                 key={index}
//                 slug={event.slug}

//                 title={event.title}
//                 img={event.img}
//                 location={event.location}
//                 date={event.date}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="col-span-full text-center text-gray-500 py-10">
//             No events found matching "{searchTerm}"
//           </p>
//         )}

//         {/* CTA Section */}
//         <div className="py-[56px] md:py-[80px]">
//           <h3 className="text-[20px] md:text-[24px] text-white text-center font-semibold mb-[24px]">
//             Want Charles to speak at your next event?
//           </h3>
//           <div className="flex items-center justify-center">
//             <Button type="button" style="danger">
//               Book Charles to Speak
//             </Button>
//           </div>
//         </div>
//       </div>
//       <Footer bgColor="bg-[#000000]" />
//     </section>
//   );
// }
