"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoBack from "@/app/components/ui/GoBack";
import Button from "@/app/components/ui/Button";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { Play } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { getYouTubeThumbnail } from "@/app/helper/getYouTubeThumbnail";
import Loader from "../ui/Loader";
import { getSingleEvent } from "@/sanity/schemaTypes/queries";
import Link from "next/link";
import { PortableTextBlock } from "@portabletext/types";



interface GalleryImage {
  url: string;
  alt?: string;
}

interface Video {
  url: string;
  title?: string;
}

interface Event {
  _id: string;
  title: string;
  slug?: string;
  img?: string;
  location?: string;
  date?: string;
  description: PortableTextBlock[];
  galleryImages?: GalleryImage[];
  videos?: Video[];
}

interface EventPageClientLoaderProps {
  eventSlug: string;
}

export default function EventPageClientLoader({
  eventSlug,
}: EventPageClientLoaderProps) {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const fetchedEvent: Event = await client.fetch(getSingleEvent, {
          slug: eventSlug,
        });

        console.log(fetchedEvent);

       
          setEvent(fetchedEvent);
          setLoading(false);
      } catch (err) {
        console.error("Error fetching event:", err);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventSlug]);

  return (
    <section>
      <Header />

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        event && (
          <div className="pt-[16px] md:pt-[40px]">
            <div className="container-sm mx-auto">
              <GoBack />

              {/* Banner */}
              <div className="pt-[40px]">
                {/* <div className="max-w-full  mx-auto rounded-[10px] overflow-hidden"> */}
                <div className="w-full h-[40vh] md:h-[60vh] rounded-[10px] overflow-hidden">
                  <Image
                    src={event.img || "/images/placeholder.png"}
                    width={800}
                    height={500}
                    alt={event.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Event Details */}
                <div className="py-[24px] flex flex-col md:flex-row md:items-center md:justify-center gap-x-[30px] gap-y-[8px]">
                  <div>
                    <h3 className="text-white text-[20px] font-medium mb-[8px]">
                      {event.title}
                    </h3>
                  </div>

                  {event.location && (
                    <div className="flex items-center gap-[8px] mb-[8px]">
                      <IoLocationOutline size={18} color="#FFFFFFB2" />
                      <p className="text-[#FFFFFFB2] text-[16px]">
                        {event.location}
                      </p>
                    </div>
                  )}

                  {event.date && (
                    <div className="flex items-center gap-[8px] mb-[8px]">
                      <CiCalendar size={18} color="#FFFFFFB2" />
                      <p className="text-[#FFFFFFB2] text-[16px]">
                        {new Date(event.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  )}
                </div>

                {/* About Event */}
                <div className="mb-[64px] md:mb-[94px]">
                  <h3 className="text-[16px] md:text-[22px] font-normal text-white mb-[16px]">
                    About Event
                  </h3>
                  <div className="text-white text-[16px] font-normal space-y-3">
                    <PortableText value={event.description} />
                  </div>
                </div>

                {/* Photos */}
                {event.galleryImages && event.galleryImages.length > 0 && (
                  <div className="pb-[60px]">
                    <h3 className="text-white text-[20px] md:text-[22px] font-medium md:font-semibold mb-[24px]">
                      Photos
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
                      {event.galleryImages.map((photo, index) => (
                        <div
                          key={index}
                          className="w-full max-w-full md:min-h-[200px]  min-h-[160px] mx-auto rounded-[10px] overflow-hidden"
                        >
                          <Image
                            src={photo.url}
                            alt={photo.alt || event.title}
                            width={500}
                            height={500}
                            placeholder="blur"
                            blurDataURL="/images/placeholder-blur.png"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Videos */}
                {event.videos && event.videos.length > 0 && (
                  <div className="pb-[96px]">
                    <h3 className="text-white text-[20px] md:text-[22px] font-medium md:font-semibold mb-[24px]">
                      Videos
                    </h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-[24px]">
                      {event.videos.map((video, index) => (
                        <div
                          key={index}
                          className="relative mx-auto w-full md:min-h-[200px] min-h-[160px] rounded-[10px] overflow-hidden"
                        >
                          <Image
                            src={getYouTubeThumbnail(video.url)}
                            width={500}
                            height={500}
                            alt={video.title || event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
                            >
                              <Play className="w-8 h-8 text-red-600" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="py-[56px] md:py-[80px]">
                  <h3 className="text-[20px] md:text-[24px] text-white text-center font-semibold mb-[24px]">
                    Want Charles to speak at your next event?
                  </h3>
                  <div className="flex items-center justify-center">
                    <Link href="/booking">
                      <Button type="button" style="danger">
                        Book Charles to Speak
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}

      <Footer bgColor="bg-[#000000]" />
    </section>
  );
}
