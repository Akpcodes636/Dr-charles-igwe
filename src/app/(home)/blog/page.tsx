"use client";
import BlogCard from "@/app/components/blog/BlogCard";
import BlogCardPreview from "@/app/components/blog/BlogCardPreview";
import BlogFilter from "@/app/components/blog/BlogFilter";
import Blog from "@/app/components/blog/Bloghero";
import BlogSearch from "@/app/components/blog/BlogSearch";
import Footer from "@/app/components/Footer";
import { blogContent } from "@/utils/contents/HomePage.content";

const Page = () => {
  return (
    <section>
      <div>
        <Blog />
      </div>
      <div className="container-sm mx-auto bg-white pt-[41px] pb-[120px]">
        <div className="pb-[102px] md:pb-[88px] lg:pb-[96px]">
          <BlogCardPreview />
        </div>
        <div className="flex items-center justify-between">
          <BlogSearch />
          <BlogFilter />
        </div>
        <div className="pt-[40px] md:pt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
          {blogContent.map((b, i) => (
            <BlogCard key={i} {...b} />
          ))}
        </div>
      </div>
      <Footer bgColor="bg-[#000000]" />
    </section>
  );
};

export default Page;
