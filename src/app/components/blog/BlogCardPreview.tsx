"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const BlogCardPreview = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-col lg:flex-row gap-x-[30px]">
      <div className="w-full sm:max-w-[558px] max-w-[600px] md:max-w-[550px] lg:max-w-[604px] h-[160px] md:h-[250px] lg:h-[312px] rounded-[10px]">
        <Image
          src="/images/Blog-1.png"
          width={500}
          height={500}
          alt="pictures of dr charles"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div className="mt-[24px] w-full max-w-[600px] sm:max-w-[558px] md:max-w-[550px] lg:max-w-[605px] mb-[16px]">
        <p className="text-[#FB8C00] text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[100%] mb-[8px]">
          Featured
        </p>
        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#000000] mb-[8px]">
          The Power of Accountability in Leadership
        </h3>
        <p className="text-[16px] md:text-[18px] font-normal text-[#000000B2] leading-[24px] md:leading-[28px] mb-[8px] md:mb-[15px] lg:mb-[24px]">
          Discover how building accountability structures can transform teams,
          drive ownership, and unlock hidden potential.
        </p>
        <div className="flex items-center justify-start gap-[20px]">
          <div className="flex items-center justify-center gap-[8px]">
            <div className="w-[32px] h-[32px] bg-green-800 rounded-full">
              <Image
                src="/images/avatar.png"
                width={500}
                height={500}
                alt="images of the dr charles"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-[#00000066] text-[14px] md:text-[16px] font-normal">
              Dr. Charles Igwe
            </p>
          </div>
          <p className="text-[#00000066] text-[14px] font-normal md:text-[16px]">
            10 Sept 2025
          </p>
        </div>
        <div className="flex items-start justify-start mt-[16px] md:mt-[24px]">
          <div className="flex items-center justify-start gap-2">
            <p className="text-[16px] text-[#E28101] font-normal leading-[100%]">
              Read more
            </p>
            <FaArrowRight color="#E28101" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardPreview;
