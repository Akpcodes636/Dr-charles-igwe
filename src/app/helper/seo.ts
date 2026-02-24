// app/helper/seo.ts
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://drcharlesigwe.com${item.url}`,
    })),
  };
}

export function generateArticleJsonLd({
  title,
  description,
  slug,
  mainImage,
  publishedAt,
  authorName = "Dr. Charles Igwe",
}: {
  title: string;
  description: string;
  slug: string;
  mainImage?: string;
  publishedAt: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: mainImage ? [mainImage] : [],
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
      url: "https://drcharlesigwe.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Charles Igwe",
      logo: {
        "@type": "ImageObject",
        url: "https://drcharlesigwe.com/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://drcharlesigwe.com/blog/${slug}`,
    },
  };
}

export function generateEventJsonLd({
  title,
  description,
  slug,
  img,
  date,
  location,
}: {
  title: string;
  description: string;
  slug: string;
  img?: string;
  date?: string;
  location?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    startDate: date,
    location: {
      "@type": "Place",
      name: location || "",
      url: `https://drcharlesigwe.com/gallery/events/${slug}`,
    },
    image: img ? [img] : [],
    description,
    organizer: { "@type": "Organization", name: "Dr. Charles Igwe", url: "https://drcharlesigwe.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://drcharlesigwe.com/gallery/events/${slug}` },
  };
}
