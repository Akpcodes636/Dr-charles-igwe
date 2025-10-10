
// import Footer from "@/app/components/Footer";
// import Header from "@/app/components/Header";
// import GoBack from "@/app/components/ui/GoBack";
// import Button from "@/app/components/ui/Button";
// import { IoLocationOutline } from "react-icons/io5";
// import { CiCalendar } from "react-icons/ci";
// import { Play } from "lucide-react";
// import Image from "next/image";
// import { getSingleEventBySlug } from "@/sanity/lib/client";
// import { PortableText } from "@portabletext/react";
// import { getYouTubeThumbnail } from "@/app/helper/getYouTubeThumbnail";

import EventPageClientLoader from "@/app/components/Event/EventPageClientLoader";

// export default async function EventPage({
//   params,
// }: {
//   params: { eventSlug: string };
// }) {
//   const { eventSlug } = params;
//   const event = await getSingleEventBySlug(eventSlug);
//   console.log(event);

//   return (
//     <section>
//       <div>
//         <Header />
//         <div className="pt-[16px] md:pt-[40px]">
//           <div className="container-sm mx-auto">
//             <GoBack />

//             {/* Banner */}
//             <div className="pt-[40px]">
//               <div className="w-full mx-auto bg-green-600 h-[200px] md:h-[240px] rounded-[10px] overflow-hidden">
//                 <Image
//                   src={event.img || "/images/placeholder.png"}
//                   width={800}
//                   height={500}
//                   alt={event.title}
//                   className="w-full h-full object-cover"
//                   placeholder="blur"
//                   blurDataURL="/images/placeholder-blur.png"
//                 />
//               </div>

//               {/* Event Details */}
//               <div className="py-[24px] flex flex-col md:flex-row md:items-center md:justify-center gap-x-[30px] gap-y-[8px]">
//                 <div>
//                   <h3 className="text-white text-[20px] font-medium mb-[8px]">
//                     {event.title}
//                   </h3>
//                 </div>

//                 <div className="flex items-center gap-[8px] mb-[8px]">
//                   <IoLocationOutline size={18} color="#FFFFFFB2" />
//                   <p className="text-[#FFFFFFB2] text-[16px] font-normal">
//                     {event.location}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-[8px] mb-[8px]">
//                   <CiCalendar size={18} color="#FFFFFFB2" />
//                   <p className="text-[#FFFFFFB2] text-[16px] font-normal">
//                     {/* {new Date(event.date).toLocaleDateString("en-GB")} */}
//                     {new Date(event.date).toLocaleDateString("en-GB", {
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                     })}
//                   </p>
//                 </div>
//               </div>

//               {/* About Event */}
//               <div className="mb-[64px] md:mb-[94px]">
//                 <h3 className="text-[16px] md:text-[22px] font-normal text-white mb-[16px]">
//                   About Event
//                 </h3>
//                 <div className="text-white text-[16px] font-normal space-y-3">
//                   <PortableText value={event.description} />
//                 </div>
//               </div>

//               {/* Photos */}
//               {event.galleryImages && event.galleryImages.length > 0 && (
//                 <div className="pb-[60px]">
//                   <h3 className="text-white text-[20px] md:text-[22px] font-medium md:font-semibold mb-[24px]">
//                     Photos
//                   </h3>
//                   <div className="flex flex-col lg:flex-row gap-[24px]">
//                     {event.galleryImages.map((photo: any, index: number) => (
//                       <div
//                         key={index}
//                         className="w-full max-w-[358px] sm:max-w-full md:max-w-full lg:max-w-full md:h-[200px] h-[160px] mx-auto rounded-[10px] overflow-hidden"
//                       >
//                         <Image
//                           src={photo.url}
//                           alt={event.title}
//                           width={500}
//                           height={500}
//                           placeholder="blur"
//                           blurDataURL="/images/placeholder-blur.png" // small base64 or low-quality image
//                           className="w-full h-full object-cover object-center"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Videos */}
//               {event.videos && event.videos.length > 0 && (
//                 <div className="pb-[96px]">
//                   <h3 className="text-white text-[20px] md:text-[22px] font-medium md:font-semibold mb-[24px]">
//                     Videos
//                   </h3>

//                   <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-[24px]">
//                     {event.videos.map((video: any, index: number) => {
//                       // Optional: generate YouTube thumbnail automatically
//                       // const getYouTubeThumbnail = (url: string) => {
//                       //   const videoId =
//                       //     url.split("v=")[1]?.split("&")[0] ||
//                       //     url.split("youtu.be/")[1];
//                       //   return videoId
//                       //     ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
//                       //     : "/images/placeholder.png";
//                       // };

//                       return (
//                         <div className="flex justify-center flex-col md:flex-row lg:flex-row gap-[31px] w-full">
//                           <div
//                             key={index}
//                             className="relative mx-auto w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-full md:h-[200px] h-[160px] rounded-[10px] overflow-hidden"
//                           >
//                             <Image
//                               src={getYouTubeThumbnail(video.url)}
//                               width={500}
//                               height={500}
//                               alt={video.title || event.title}
//                               className="w-full h-full object-cover"
//                             />

//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <a
//                                 href={video.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
//                               >
//                                 <Play className="w-8 h-8 text-red-600" />
//                               </a>
//                             </div>
//                           </div>

//                           <div
//                             key={index}
//                             className="relative mx-auto w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-full md:h-[200px] h-[160px] rounded-[10px] overflow-hidden"
//                           >
//                             <Image
//                               src={getYouTubeThumbnail(video.url)}
//                               width={500}
//                               height={500}
//                               alt={video.title || event.title}
//                               className="w-full h-full object-cover"
//                             />

//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <a
//                                 href={video.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
//                               >
//                                 <Play className="w-8 h-8 text-red-600" />
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* CTA Section */}
//               <div className="py-[56px] md:py-[80px]">
//                 <h3 className="text-[20px] md:text-[24px] text-white text-center font-semibold mb-[24px]">
//                   Want Charles to speak at your next event?
//                 </h3>
//                 <div className="flex items-center justify-center">
//                   <Button type="button" style="danger">
//                     Book Charles to Speak
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer bgColor="bg-[#000000]" />
//       </div>
//     </section>
//   );
// }


// import EventPageClientLoader from "./EventPageClientLoader";

interface EventPageProps {
  params: {
    eventSlug: string;
  };
}

export default function Page({ params }: EventPageProps) {
  const { eventSlug } = params;
  return <EventPageClientLoader eventSlug={eventSlug} />;
}
