export const revalidate = 120; // ISR every 2 minutes

import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import BlogPageClientLoader from "@/app/components/blog/BlogPageClientLoader";
import { getSinglePost } from "@/sanity/schemaTypes/queries";
import BreadcrumbJsonLd from "@/app/components/seo/BreadCrumbJsonLd";
// import BreadcrumbJsonLd from "@/app/components/seo/BreadcrumbJsonLd";

// ✅ Base URL for all canonical/structured URLs
const metadataBase = new URL("https://drcharlesigwe.com");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(getSinglePost, { slug }, { next: { revalidate: 120 } });

  if (!post) {
    return { title: "Post not found" };
  }

  const description =
    post.excerpt || post.body?.[0]?.children?.[0]?.text || "Read this article on our blog";

  const canonicalUrl = new URL(`/blog/${slug}`, metadataBase).toString();

  return {
    title: post.title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: post.title,
      description,
      url: canonicalUrl,
      type: "article",
      images: post.mainImage
        ? [
            {
              url: post.mainImage,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.mainImage ? [post.mainImage] : [],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await client.fetch(getSinglePost, { slug }, { next: { revalidate: 120 } });
  if (!post) return null;

  const description =
    post.excerpt || post.body?.[0]?.children?.[0]?.text || "Read this article on our blog";

  const canonicalUrl = new URL(`/blog/${slug}`, metadataBase).toString();

  // ✅ Breadcrumbs
  const breadcrumbs = [
    { name: "Home", url: metadataBase.toString() },
    { name: "Blog", url: new URL("/blog", metadataBase).toString() },
    { name: post.title, url: canonicalUrl },
  ];

  // ✅ Article structured data (JSON-LD)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: post.mainImage ? [post.mainImage] : [],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Person", name: "Dr. Charles Igwe", url: metadataBase.toString() },
    publisher: {
      "@type": "Organization",
      name: "Dr. Charles Igwe",
      logo: { "@type": "ImageObject", url: new URL("/favicon.ico", metadataBase).toString() },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  return (
    <>
      {/* 🔥 Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 🔥 Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* 🔥 Blog content */}
      <BlogPageClientLoader slug={slug} />
    </>
  );
}

