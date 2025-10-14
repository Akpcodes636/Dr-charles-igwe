"use client";

import React, { useState, useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { getBlogs, getFeaturedPost, getCategories } from "@/sanity/lib/client";
import Blog from "@/app/components/blog/Bloghero";
import Loader from "@/app/components/ui/Loader";
import BlogCardPreview from "@/app/components/blog/BlogCardPreview";
import BlogSearch from "@/app/components/blog/BlogSearch";
import BlogFilter from "@/app/components/blog/BlogFilter";
import BlogCard from "@/app/components/blog/BlogCard";
import Footer from "@/app/components/Footer";
import { Blogs, Category, FeaturedPost } from "../../../Types"; // ✅ keep consistent import

export default function BlogPage() {
  const [featured, setFeatured] = useState<FeaturedPost | null>(null);
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const [featuredData, blogsData, categoriesData] = await Promise.all([
          getFeaturedPost(),
          getBlogs(),
          getCategories(),
        ]);
        console.log(blogsData);
        setFeatured(featuredData);
        setBlogs(blogsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Filter blogs safely with typed objects
  const filteredBlogs = blogs.filter((blog) => {
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
    <section className="bg-white">
      <Blog />
      {loading ? (
        <div className="flex items-center justify-center h-[50vh]">
          <Loader />
        </div>
      ) : (
        <div className="container-sm mx-auto pt-[41px] pb-[120px]">
          {featured && (
            <div className="pb-[102px] md:pb-[88px] lg:pb-[96px]">
              <BlogCardPreview
                title={featured.title}
                excerpt={featured.excerpt || ""}
                author={featured.author || "Unknown Author"}
                publishedAt={featured.publishedAt || new Date().toISOString()}
                img={featured.img || "/fallback-image.jpg"}
                slug={featured.slug || ""}
              />
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
              filteredBlogs.map((b) => (
                <BlogCard
                  key={b._id}
                  title={b.title}
                  excerpt={b.excerpt || ""}
                  author={b.author || "Charles Igwesss"}
                  publishedAt={b.publishedAt || new Date().toISOString()}
                  img={b.img || "/fallback-image.jpg"}
                  slug={b.slug || ""}
                />
              ))
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
      )}
      <Footer bgColor="bg-[#000000]" />
    </section>
  );
}
