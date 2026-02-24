import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

type BlogPost = {
  slug: string;
  publishedAt: string | Date;
};

type Event = {
  slug: string;
  date: string | Date;
};


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";


  // Fetch blogs
  const posts = await client.fetch(
    `*[_type=="blog"]{ "slug": slug.current, publishedAt }`
  );

  // Fetch events
  const events = await client.fetch(
    `*[_type=="event"]{ "slug": slug.current, date }`
  );

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/booking",
    "/blog",
    "/gallery",
    "/gallery/events",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Blog URLs
  const blogUrls = posts.map((post: BlogPost) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.publishedAt),
}));

const eventUrls = events.map((event: Event) => ({
  url: `${baseUrl}/gallery/events/${event.slug}`,
  lastModified: new Date(event.date),
}));


  return [...staticUrls, ...blogUrls, ...eventUrls];
}
