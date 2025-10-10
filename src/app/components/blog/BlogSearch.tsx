// app/components/blog/BlogSearch.tsx
"use client";
import { IoSearchOutline } from "react-icons/io5";

interface BlogSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const BlogSearch = ({ searchTerm, setSearchTerm }: BlogSearchProps) => {
  return (
    <div className="relative w-full max-w-[370px] h-[44px]">
      <input
        type="search"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-full rounded-full border border-[#00000040] pl-5 pr-12 bg-white text-[#000] placeholder:text-[#00000066] outline-none focus:ring-2 focus:ring-[#E28101] transition-all duration-200"
      />
      <IoSearchOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00000066] text-lg" />
    </div>
  );
};

export default BlogSearch;
