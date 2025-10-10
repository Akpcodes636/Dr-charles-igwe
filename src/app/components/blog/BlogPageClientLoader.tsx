"use client";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
//  import { getSinglePost, getRelatedPosts } from "@/sanity/lib/queries";
import { IoCalendarClearOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getRelatedPosts, getSinglePost } from "@/sanity/schemaTypes/queries";
import PageLoader from "../ui/PageLoader";
//  import { getRelatedPosts, getSinglePost } from "@/sanity/schemaTypes/queries";

interface BlogPageClientLoaderProps {
    slug: string;
  }
  
  export default function BlogPageClientLoader({ slug }: BlogPageClientLoaderProps) {
    const [post, setPost] = useState<any>(null);
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const fetchedPost = await client.fetch(getSinglePost, { slug });
          const fetchedRelated = await client.fetch(getRelatedPosts, { slug });
          setPost(fetchedPost);
          setRelatedPosts(fetchedRelated);
        } catch (err) {
          console.error("Error fetching blog data:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [slug]);
  return (
    <section className="bg-[#FFFFFF]">
      <Header />
      {loading ? (
    <div className="flex justify-center items-center h-screen">
      <PageLoader />
    </div>
  ) : (
      <div className="container-sm mx-auto py-[32px] md:py-[90px]">
        {/* Main post */}
        <div className="w-full max-w-[358px] sm:max-w-full md:max-w-full lg:max-w-full mx-auto h-[240px] rounded-[10px] mb-[44px]">
          <Image
            src={post.img}
            width={800}
            height={500}
            alt={post.title}
            className="w-full h-full object-cover rounded-[10px]"
            priority={false}
          />
        </div>

        <div className="flex items-center justify-center gap-[40px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/avatar.png"
              width={32}
              height={32}
              alt="Author avatar"
              className="rounded-full"
            />
            <p className="text-[#00000066] text-[16px]">{post.author}</p>
          </div>

          <div className="flex items-center gap-2">
            <IoCalendarClearOutline color="#00000066" />
            <p className="text-[#00000066] text-[16px]">
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <h3 className="text-[26px] text-[#000] text-center mt-[32px] mb-[24px]">
          {post.title}
        </h3>

        <div className="prose prose-lg md:prose-xl lg:prose-2xl mx-auto mb-[40px] prose-headings:font-semibold prose-headings:text-[#000] prose-p:text-[#000000B2] prose-p:leading-relaxed prose-li:marker:text-[#E28101] prose-a:text-[#E28101] prose-a:no-underline hover:prose-a:underline prose-table:shadow-md prose-table:rounded-xl prose-table:border border-[#ddd] prose-th:bg-[#E28101] prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-td:p-3 prose-td:border-t border-[#eee] overflow-x-auto">
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-bold text-[#000] mt-10 mb-6 leading-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#000] mt-8 mb-4">
                    {children}
                  </h2>
                ),
                normal: ({ children }) => (
                  <p className="text-[18px] md:text-[20px] text-[#000000B2] leading-[30px] mb-6">
                    {children}
                  </p>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc ml-6 space-y-2 text-[#000000B2]">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal ml-6 space-y-2 text-[#000000B2]">
                    {children}
                  </ol>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                link: ({ value, children }) => (
                  <a
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E28101] hover:underline"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                table: ({ value }) => (
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full border border-[#ddd] rounded-xl text-left">
                      <thead className="bg-[#E28101] text-white">
                        <tr>
                          {value.rows[0].cells.map(
                            (cell: string, i: number) => (
                              <th key={i} className="p-3 font-semibold">
                                {cell}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {value.rows.slice(1).map((row: any, i: number) => (
                          <tr
                            key={i}
                            className={
                              i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                            }
                          >
                            {row.cells.map((cell: string, j: number) => (
                              <td
                                key={j}
                                className="p-3 border-t border-[#eee] text-[#000000B2]"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ),
              },
            }}
          />
        </div>

        {/* Related Blog Section */}
        <div className="mt-[90px]">
          <h2 className="text-center text-[26px] text-[#000] font-medium mb-[32px]">
            Related Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((blog: any) => (
              <div key={blog.slug} className="flex flex-col">
                <div className="w-full h-[216px] rounded-[10px] overflow-hidden">
                  <Image
                    src={blog.img}
                    width={600}
                    height={400}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                </div>

                <div className="mt-[16px]">
                  <h3 className="text-[22px] font-medium text-[#000] mb-[8px]">
                    {blog.title}
                  </h3>
                  <p className="text-[16px] text-[#000000B2] mb-[12px] line-clamp-2">
                    {blog.excerpt ||
                      blog.body
                        ?.map((block: any) =>
                          block.children
                            ?.map((child: any) => child.text)
                            .join("")
                        )
                        .join(" ")
                        .slice(0, 150) + "..."}
                  </p>

                  <div className="flex items-center gap-4 mb-[12px]">
                    <p className="text-[#00000066] text-[16px]">
                      {blog.author}
                    </p>
                    <p className="text-[#00000066] text-[16px]">
                      {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="flex items-center gap-2 text-[#E28101]"
                  >
                    Read more <FaArrowRight color="#E28101" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      <Footer bgColor="bg-[#000000]" />
    </section>
  );
}
