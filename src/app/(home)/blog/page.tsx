"use client";

import React, { useState, useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import {
  getBlogs,
  getFeaturedPost,
  getCategories,
  getTotalBlogs,
} from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const blogsPerPage = 6;

  const builder = imageUrlBuilder(client);

  function urlFor(source:string) {
    return builder.image(source);
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [featuredData, blogsData, categoriesData, totalCount] =
          await Promise.all([
            getFeaturedPost(),
            getBlogs(currentPage, blogsPerPage),
            getCategories(),
            getTotalBlogs(), 
          ]);
        // console.log(blogsData);
        setFeatured(featuredData);
        setBlogs(blogsData);
        setCategories(categoriesData);
        setTotalBlogs(totalCount);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

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
                img={
                  featured.img
                    ? urlFor(featured.img).width(800).quality(75).url()
                    : "/fallback-image.jpg"
                }
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
                  img={
                    b.img
                      ? urlFor(b.img).width(800).quality(75).url()
                      : "/fallback-image.jpg"
                  }
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

          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>

            <span className="text-gray-700 font-medium">
              Page {currentPage} of {Math.ceil(totalBlogs / blogsPerPage)}
            </span>

            <button
              disabled={currentPage >= Math.ceil(totalBlogs / blogsPerPage)}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      )}
      <Footer bgColor="bg-[#000000]" />
    </section>
  );
}
