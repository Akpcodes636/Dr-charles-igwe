"use client";

import { IoSearchOutline } from "react-icons/io5";

const BlogSearch = () => {
  return (
    <div className="relative w-full max-w-[186px] md:max-w-[250px] lg:max-w-[370px] mx-aut h-[44px]">
      <input
        type="search"
        placeholder="Search"
        className="w-full h-full rounded-[30px] border border-[#00000066] pl-4 pr-10 bg-transparent outline-none text-sm md:text-base placeholder:text-[#00000066]"
      />
      <IoSearchOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00000066] text-lg md:text-xl" />
    </div>
  );
};

export default BlogSearch;
