
// app/blog/BlogPageClient.tsx
"use client";
import { useState } from "react";
import BlogCard from "@/app/components/blog/BlogCard";
import BlogCardPreview from "@/app/components/blog/BlogCardPreview";
import BlogFilter from "@/app/components/blog/BlogFilter";
import BlogSearch from "@/app/components/blog/BlogSearch";
import { FaRegNewspaper } from "react-icons/fa6";


interface BlogPageClientProps {
  featured: any;
  blogs: any[];
  categories: any[];
}

export default function BlogPageClient({
  featured,
  blogs,
  categories,
}: BlogPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter((blog: any) => {
    // Search filter
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      blog.title?.toLowerCase().includes(searchLower) ||
      blog.excerpt?.toLowerCase().includes(searchLower) ||
      blog.description?.toLowerCase().includes(searchLower);

    // Category filter
    const matchesCategory =
      !selectedCategory ||
      blog.categories?.some((cat: any) => cat._id === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-sm mx-auto bg-white pt-[41px] pb-[120px]">
      {featured && (
        <div className="pb-[102px] md:pb-[88px] lg:pb-[96px]">
          <BlogCardPreview {...featured} />
        </div>
      )}
      <div className="flex items-center justify-between gap-[51px]">
        <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <BlogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="pt-[40px] md:pt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((b: any) => <BlogCard key={b._id} {...b} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-gray-500 py-10">
            <FaRegNewspaper className="w-16 h-16 mb-3 text-gray-400 animate-pulse" />
            <p className="text-center text-gray-500">
              No blog posts found matching
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
