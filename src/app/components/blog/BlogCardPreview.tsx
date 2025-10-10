"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface BlogCardPreviewProps {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  img: string;
  slug: string;
}

const BlogCardPreview: React.FC<BlogCardPreviewProps> = ({
  title,
  excerpt,
  author,
  publishedAt,
  img,
  slug
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-x-[30px]">
      <div className="w-full mx-auto max-w-full sm:max-w-full md:max-w-full  lg:max-w-[606px] h-[160px] md:h-[312px] rounded-[10px] overflow-hidden">
        <Image
          src={img}
          width={600}
          height={312}
          alt={title}
          className="w-full h-full object-cover"
          priority={false}
        />
      </div>

      <div className="mt-[24px] mx-auto max-w-[358px] sm:max-w-full md:max-w-full  lg:max-w-[606px] mb-[16px]">
        <p className="text-[#FB8C00] text-[16px] font-medium mb-[8px]">
          Featured
        </p>
        <h3 className="text-[24px] font-medium text-[#000000] mb-[8px]">
          {title}
        </h3>
        <p className="text-[18px] text-[#000000B2] mb-[24px]">{excerpt}</p>

        <div className="flex items-center gap-[20px]">
          <p className="text-[#00000066] text-[16px]">{author}</p>
          <p className="text-[#00000066] text-[16px]">
            {new Date(publishedAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <Link href={`/blog/${slug}`}>
          <div className="flex items-center gap-2 mt-[24px] cursor-pointer">
            <p className="text-[16px] text-[#E28101]">Read more</p>
            <FaArrowRight color="#E28101" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardPreview;
