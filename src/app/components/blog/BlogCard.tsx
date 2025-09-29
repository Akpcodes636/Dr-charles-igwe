"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface BlogCardProps {
  img: string;
  title: string;
  text: string;
  avatar: string;
  authorName: string;
  date:string
}

const BlogCard: React.FC<BlogCardProps> = ({
  img,
  title,
  text,
  avatar,
  authorName,
  date
}) => {
  return (
    <div className="flex flex-col">
      {/* Blog image */}
      <div className="w-full h-[160px] md:h-[250px] lg:h-[312px] rounded-[10px] overflow-hidden">
        <Image
          src={img}
          width={600}
          height={400}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog details */}
      <div className="mt-[16px]">
        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#000] mb-[8px]">
          {title}
        </h3>
        <p className="text-[16px] md:text-[18px] text-[#000000B2] mb-[12px]">
          {text}
        </p>

        <div className="flex items-center gap-4 mb-[12px]">
          <div className="flex items-center gap-2">
            <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
              <Image
                src={avatar}
                width={32}
                height={32}
                alt={authorName}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-[#00000066] text-[14px] md:text-[16px]">
              {authorName}
            </p>
          </div>
          <p className="text-[#00000066] text-[14px] font-normal md:text-[16px]">
            {date}
          </p>
        </div>

        {/* Read more */}
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="text-[16px] text-[#E28101]">Read more</p>
          <FaArrowRight color="#E28101" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
