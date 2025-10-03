"use client";
import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";


interface EventCardProps {
  title: string;
  img: string;
  location: string;
  date: string;
  eventSlug: string;   //
}

const EventCard = ({ eventSlug, title, img, location, date }: EventCardProps) => {
    console.log(eventSlug);
  return (
    <div className="w-full max-w-[358px] md:max-w-[393px] mx-auto mb-[40px]">
      {/* Event Image */}
      <div className="w-full h-[160px] md:h-[216px] rounded-[10px] overflow-hidden">
        <Image
          src={img}
          className="w-full h-full object-cover rounded-[10px]"
          width={500}
          height={500}
          alt={title}
        />
      </div>

      {/* Event Details */}
      <div className="mt-4">
        <h3 className="text-white text-[20px] font-medium leading-[100%] mb-[16px]">
          {title}
        </h3>

        <div className="flex items-center gap-[8px] mb-[8px]">
          <IoLocationOutline size={18} color="#FFFFFFB2" />
          <p className="text-[#FFFFFFB2] text-[16px] font-normal">{location}</p>
        </div>

        <div className="flex items-center gap-[8px] mb-[8px]">
          <CiCalendar size={18} color="#FFFFFFB2" />
          <p className="text-[#FFFFFFB2] text-[16px] font-normal">{date}</p>
        </div>
        
        <Link href={`/gallery/events/${eventSlug}`}>
        <p className="text-[#FB8C00] text-[12px] font-normal cursor-pointer hover:underline">
          View Event Details
        </p>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
