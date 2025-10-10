import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import {
  eventQuery,
  getAllBlogsQuery,
  getCategory,
  getFeaturedPostQuery,
  getSingleEvent,
} from "../schemaTypes/queries";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function getFeaturedPost() {
  return await client.fetch(getFeaturedPostQuery);
}

export async function getBlogs() {
  return await client.fetch(getAllBlogsQuery);
}

export async function getCategories() {
  return await client.fetch(getCategory);
}

export async function getEvents() {
  return await client.fetch(eventQuery);
}

export async function getSingleEventBySlug(eventSlug: string) {
  return await client.fetch(getSingleEvent, { slug: eventSlug });
}
