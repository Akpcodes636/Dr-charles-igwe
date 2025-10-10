// "use client";
// import { useState, useMemo } from "react";
// import BlogCard from "@/app/components/blog/BlogCard";
// import BlogCardPreview from "@/app/components/blog/BlogCardPreview";
// import BlogFilter from "@/app/components/blog/BlogFilter";
// import BlogSearch from "@/app/components/blog/BlogSearch";
// import Footer from "@/app/components/Footer";
// import BlogServer from "@/app/components/blog/BlogServer";
// // import BlogServer from "@/app/components/blog/BlogServer";
// // import BlogServer from "@/app/components/blog/BlogServer";
// // import Blog from "@/app/components/blog/Bloghero";

// interface BlogPost {
//   _id: string;
//   slug: string;
//   title: string;
//   excerpt: string;
//   author: string;
//   publishedAt: string;
//   body: any;
//   img: string;
//   featured?: boolean;
//   post:string
// }

// interface Props {
//   featured: BlogPost;
//   blog: BlogPost[];
// }

// const BlogClientPage: React.FC<Props> = ({ featured, blog }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterAuthor, setFilterAuthor] = useState<string | null>(null);

//   const filteredPosts = useMemo(() => {
//     console.log(blog);
//     return blog.filter((post) => {
//       const matchesSearch =
//         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesAuthor = filterAuthor ? post.author === filterAuthor : true;
//       return matchesSearch && matchesAuthor;
//     });
//   }, [searchTerm, filterAuthor, blog]);


//   return (
//     <section>
//       <div>
//         {/* <BlogServer /> */}
//       </div>

//       <div className="container-sm mx-auto bg-white pt-[41px] pb-[120px]">
//         {featured && (
//           <div className="pb-[102px] md:pb-[88px] lg:pb-[96px]">
//             <BlogCardPreview {...featured} />
//           </div>
//         )}

//         <div className="flex items-center justify-between mb-8">
//           <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//           {/* <BlogFilter
//             filterAuthor={filterAuthor}
//             setFilterAuthor={setFilterAuthor}
//             posts={blog}
//           /> */}
//         </div>

//         <div className="pt-[40px] md:pt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
//           {filteredPosts.map((b) => (
//             <BlogCard key={b._id} {...b} />
//           ))}
//         </div>
//       </div>

//       <Footer bgColor="bg-[#000000]" />
//     </section>
//   );
// };

// export default BlogClientPage;



// // app/blog/page.tsx
// import BlogCard from "@/app/components/blog/BlogCard";
// import BlogCardPreview from "@/app/components/blog/BlogCardPreview";
// import BlogFilter from "@/app/components/blog/BlogFilter";
// import Blog from "@/app/components/blog/Bloghero";
// // import BlogHero from "@/app/components/blog/BlogHero";
// import BlogSearch from "@/app/components/blog/BlogSearch";
// import Footer from "@/app/components/Footer";
// import { getBlogs, getFeaturedPost } from "@/sanity/lib/client";
// // import { getBlogs, getFeaturedPost } from "@/sanity/client";

// export default async function Page() {
//   const featured = await getFeaturedPost();
//   const blogs = await getBlogs();

//   return (
//     <section>
//       <div>
//         <Blog />
//       </div>

//       <div className="container-sm mx-auto bg-white pt-[41px] pb-[120px]">
//         {featured && (
//           <div className="pb-[102px] md:pb-[88px] lg:pb-[96px]">
//             <BlogCardPreview {...featured} />
//           </div>
//         )}

//         <div className="flex items-center justify-between">
//           <BlogSearch />
//           <BlogFilter />
//         </div>

//         <div className="pt-[40px] md:pt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
//           {blogs.map((b: any) => (
//             <BlogCard key={b._id} {...b} />
//           ))}
//         </div>
//       </div>

//       <Footer bgColor="bg-[#000000]" />
//     </section>
//   );
// }



// // app/blog/page.tsx
// import { getBlogs, getFeaturedPost, getCategories } from "@/sanity/lib/client";
// import Blog from "@/app/components/blog/Bloghero";
// import Footer from "@/app/components/Footer";
// import BlogPageClient from "@/app/components/blog/BlogPageClient";
// import BlogWithLoader from "@/app/components/ui/BlogPageClient";

// export default async function Page() {
//   const featured = await getFeaturedPost();
//   const blogs = await getBlogs();
//   const categories = await getCategories();
  
  
//   return (
//     <section>
//       <div>
//       <Blog />
//       <BlogPageClient featured={featured} blogs={blogs} categories={categories} />
//       </div>
//       {/* <BlogPageClient featured={featured} blogs={blogs}   /> */}
//       <Footer bgColor="bg-[#000000]" />
//     </section>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
// import Blog from "./Bloghero";
// import BlogCardPreview from "./BlogCardPreview";
// import BlogCard from "./BlogCard";
// import BlogSearch from "./BlogSearch";
// import BlogFilter from "./BlogFilter";
// import Footer from "../Footer";
// import Loader from "./Loader";
import { FaRegNewspaper } from "react-icons/fa6";
import { getBlogs, getFeaturedPost, getCategories } from "@/sanity/lib/client";
import Blog from "@/app/components/blog/Bloghero";
import Loader from "@/app/components/ui/Loader";
import BlogCardPreview from "@/app/components/blog/BlogCardPreview";
import BlogSearch from "@/app/components/blog/BlogSearch";
import BlogFilter from "@/app/components/blog/BlogFilter";
import BlogCard from "@/app/components/blog/BlogCard";
import Footer from "@/app/components/Footer";

export default function BlogPage() {
  const [featured, setFeatured] = useState<any>(null);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [featuredData, blogsData, categoriesData] = await Promise.all([
          getFeaturedPost(),
          getBlogs(),
          getCategories(),
        ]);

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

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter((blog) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      blog.title?.toLowerCase().includes(searchLower) ||
      blog.excerpt?.toLowerCase().includes(searchLower) ||
      blog.description?.toLowerCase().includes(searchLower);

    const matchesCategory =
      !selectedCategory ||
      blog.categories?.some((cat: any) => cat._id === selectedCategory);

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
              filteredBlogs.map((b) => <BlogCard key={b._id} {...b} />)
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
