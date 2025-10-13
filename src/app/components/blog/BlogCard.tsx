
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface BlogCardProps {
  slug?: string;
  img: string;
  title: string;
  excerpt: string;
  author?: string;
  publishedAt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  img,
  title,
  excerpt,
  author,
  publishedAt
}) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[216px] rounded-[10px] overflow-hidden">
        <Image
          src={img}
          width={600}
          height={400}
          alt={title}
          className="w-full h-full object-cover"
          priority={false}
        />
      </div>

      <div className="mt-[16px]">
        <h3 className="text-[22px] font-medium text-[#000] mb-[8px]">
          {title}
        </h3>
        <p className="text-[16px] md:text-[18px] text-[#000000B2] mb-[12px] line-clamp-2">
          {excerpt || "No excerpt available."}
        </p>

        <div className="flex items-center gap-4 mb-[12px]">
          <p className="text-[#00000066] text-[16px]">{author}</p>
          <p className="text-[#00000066] text-[16px]">
            {new Date(publishedAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <Link href={`/blog/${slug}`} className="flex items-center gap-2">
          <p className="text-[16px] text-[#E28101]">Read more</p>
          <FaArrowRight color="#E28101" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
