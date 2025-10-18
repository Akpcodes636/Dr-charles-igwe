"use client";
import { getFiresideChats } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import Loader from "../ui/Loader";

interface FiresideChat {
  _id: string;
  title: string;
  speakerName: string;
  speakerPosition: string;
  imageUrl: string;
  date: string;
  tagline: string;
  registrationLink: string;
  description?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
}

export default function PodcastHero() {
  const [events, setEvents] = useState<FiresideChat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFireSideEvents() {
      try {
        const data = await getFiresideChats();
        setTimeout(() => {
          setEvents(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    }
    fetchFireSideEvents();
  }, []);

  const createGoogleCalendarUrl = (event: FiresideChat) => {
    if (!event.startDate || !event.endDate) return "#"; // avoid invalid dates

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return null;
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const start = formatDate(event.startDate);
    const end = formatDate(event.endDate);
    if (!start || !end) return "#";

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      event.description || ""
    )}&location=${encodeURIComponent(event.location || "")}`;
  };

  return (
    <section className="bg-white">
      <div className="container-sm mx-auto py-[96px]">
        <h2 className="text-[24px] font-medium text-[#000000] leading-[100%] text-center md:text-start lg:text-start mb-[24px] md:mb-[32px]">
          Upcoming Events
        </h2>

        <div className="flex flex-col gap-y-[40px]">
          {loading ? (
            <div className="flex items-center justify-center min-h-screen">
              <Loader />
            </div>
          ) : (
            events.map((event) => (
              <div
                key={event._id}
                className="flex items-center justify-center gap-x-[30px] flex-col sm:flex-col md:flex-row lg:flex-row"
              >
                {/* Image */}
                <div className="w-full max-w-full sm:max-w-[800px] md:max-w-[393px] mx-auto h-[136px] md:h-[165px] mb-[24px]">
                  <Image
                    src={event.imageUrl}
                    width={500}
                    height={500}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>

                {/* Text content */}
                <div className="w-full mx-auto">
                  <h3 className="text-[#000000] font-medium text-[20px] leading-[100%] mb-[8px]">
                    {event.title}
                  </h3>

                  <div className="flex items-center justify-start gap-[8px] mb-[8px]">
                    <CgProfile color="#606060B2" size={18} />
                    <p className="text-[#606060B2] text-[14px] font-normal">
                      {event.speakerName}, {event.speakerPosition}
                    </p>
                  </div>

                  <div className="flex gap-2 mb-[16px]">
                    <CiCalendar size={20} />
                    <p className="text-[14px] text-[#00000066] font-normal">
                      {event.date
                        ? new Date(event.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "Date to be announced"}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={createGoogleCalendarUrl(event)}
                      target="_blank"
                      className="text-[16px] font-normal text-[#E28101] underline leading-[100%]"
                    >
                      Save to Calendar
                    </Link>

                    {event.registrationLink && (
                      <Link
                        href={event.registrationLink}
                        target="_blank"
                        className="text-[16px] font-normal text-[#E28101] underline leading-[100%]"
                      >
                        Register on Eventbrite
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
