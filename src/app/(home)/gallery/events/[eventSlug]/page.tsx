export const revalidate = 300; // ISR every 5 minutes

import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { getSingleEvent } from "@/sanity/schemaTypes/queries";
import EventPageClientLoader from "@/app/components/Event/EventPageClientLoader";
import BreadcrumbJsonLd from "@/app/components/seo/BreadCrumbJsonLd";
// import BreadcrumbJsonLd from "@/app/components/seo/BreadcrumbJsonLd";

// ✅ Base domain for all URLs
const metadataBase = new URL("https://drcharlesigwe.com");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ eventSlug: string }>;
}): Promise<Metadata> {
  const { eventSlug } = await params;

  const event = await client.fetch(
    getSingleEvent,
    { slug: eventSlug },
    { next: { revalidate: 300 } }
  );

  if (!event) {
    return { title: "Event not found" };
  }

  const description =
    event.description?.[0]?.children?.[0]?.text ||
    "Event details and gallery";

  const canonicalUrl = new URL(
    `/gallery/events/${eventSlug}`,
    metadataBase
  ).toString();

  return {
    title: event.title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: event.title,
      description,
      url: canonicalUrl,
      type: "article",
      images: event.img
        ? [
            {
              url: event.img,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: event.title,
      description,
      images: event.img ? [event.img] : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ eventSlug: string }>;
}) {
  const { eventSlug } = await params;

  const event = await client.fetch(
    getSingleEvent,
    { slug: eventSlug },
    { next: { revalidate: 300 } }
  );

  if (!event) return null;

  const description =
    event.description?.[0]?.children?.[0]?.text ||
    "Event details and gallery";

  const canonicalUrl = new URL(
    `/gallery/events/${eventSlug}`,
    metadataBase
  ).toString();

  // ✅ Breadcrumbs
  const breadcrumbs = [
    {
      name: "Home",
      url: metadataBase.toString(),
    },
    {
      name: "Events",
      url: new URL("/gallery/events", metadataBase).toString(),
    },
    {
      name: event.title,
      url: canonicalUrl,
    },
  ];

  // ✅ Event Structured Data
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description,
    startDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: event.img ? [event.img] : [],
    location: event.location
      ? {
          "@type": "Place",
          name: event.location,
        }
      : undefined,
    organizer: {
      "@type": "Organization",
      name: "Dr. Charles Igwe",
      url: metadataBase.toString(),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      {/* 🔥 Event JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />

      {/* 🔥 Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* 🔥 Event UI */}
      <EventPageClientLoader eventSlug={eventSlug} />
    </>
  );
}

