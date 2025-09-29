"use client";
import { IoFilter } from "react-icons/io5";

const BlogFilter = () => {
  return (
    <div className="w-[121px] h-[44px] border-[1px] border-[#00000066] rounded-[5px] p-2">
      <div className="flex items-center justify-between">
        <p className="text-[#00000066]">Filter</p>
        <IoFilter color="#00000066" />
      </div>
    </div>
  );
};

export default BlogFilter;
