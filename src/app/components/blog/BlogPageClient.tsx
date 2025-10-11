// app/blog/BlogPageClient.tsx
"use client";

import { useState } from "react";
import BlogCard from "@/app/components/blog/BlogCard";
import BlogCardPreview from "@/app/components/blog/BlogCardPreview";
import BlogFilter from "@/app/components/blog/BlogFilter";
import BlogSearch from "@/app/components/blog/BlogSearch";
import { FaRegNewspaper } from "react-icons/fa6";
// import { PortableTextBlock } from "@portabletext/types";



interface Category {
  _id: string;
  title: string;
  slug?: string;
}

interface Author {
  _id: string;
  name: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface Blog {
  _id: string;
  title: string;
  slug?: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  excerpt?: string;
  description?: string;
  author?: Author;
  categories?: Category[];
  publishedAt?: string;
  // body?: PortableTextBlock[];
}

interface BlogPageClientProps {
  featured: Blog;
  blogs: Blog[];
  categories: Category[];
}

export default function BlogPageClient({
  featured,
  blogs,
  categories,
}: BlogPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter((blog: Blog) => {
    const searchLower = searchTerm.toLowerCase();

    const matchesSearch =
      !searchTerm ||
      blog.title?.toLowerCase().includes(searchLower) ||
      blog.excerpt?.toLowerCase().includes(searchLower) ||
      blog.description?.toLowerCase().includes(searchLower);

    const matchesCategory =
      !selectedCategory ||
      blog.categories?.some((cat: Category) => cat._id === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-sm mx-auto bg-white pt-[41px] pb-[120px]">
      {/* 📰 Featured Post */}
      {featured && (
        <div className="pb-[102px] md:pb-[88px] lg:pb-[96px]">
          <BlogCardPreview
            title={featured.title}
            excerpt={featured.excerpt ?? ""}
            author={featured.author?.name ?? "Unknown Author"}
            publishedAt={featured.publishedAt ?? new Date().toISOString()}
            img={featured.mainImage?.asset?.url ?? "/images/placeholder.png"}
            slug={featured.slug ?? "#"}
          />
        </div>
      )}

      {/* 🔍 Search + Filter */}
      <div className="flex items-center justify-between gap-[51px]">
        <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <BlogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* 🧱 Blog Cards */}
      <div className="pt-[40px] md:pt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((b: Blog) => (
            <BlogCard
              key={b._id}
              slug={b.slug}
              img={b.mainImage?.asset.url || "/default.jpg"}
              title={b.title}
              excerpt={b.excerpt || b.description || ""}
              author={b.author?.name || "Unknown"}
              publishedAt={b.publishedAt || ""}
              // body={b.body || ""}
             />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-gray-500 py-10">
            <FaRegNewspaper className="w-16 h-16 mb-3 text-gray-400 animate-pulse" />
            <p className="text-center text-gray-500">
              No blog posts found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
