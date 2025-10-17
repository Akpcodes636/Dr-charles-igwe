import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import {
  eventQuery,
  getAllBlogsQuery,
  // getAllBlogsQuery,
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

export async function getBlogs(page = 1, limit = 6) {
  const query = await getAllBlogsQuery(page, limit); // ✅ ensure query is a string
  const blogs = await client.fetch(query);          // ✅ valid now
  return blogs;
}


export async function getTotalBlogs() {
  const query = `count(*[_type == "blog"])`;
  return await client.fetch(query);
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
