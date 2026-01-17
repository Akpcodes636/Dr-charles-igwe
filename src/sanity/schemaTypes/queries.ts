// sanity/queries.ts

export const getFeaturedPostQuery = `
*[_type == "blog" && featured == true][0]{
  _id,
  title,
  "slug": slug.current,
  "img": mainImage.asset->url,
  author,
  publishedAt,
  // return excerpt if present, otherwise build from body
  "excerpt": coalesce(excerpt, pt::text(body)[0..150] + "...")
}
`

export function getAllBlogsQuery(page: number = 1, limit: number = 6) {
  const start = (page - 1) * limit;
  const end = start + limit;

  if (isNaN(start) || isNaN(end)) {
    throw new Error("Invalid pagination numbers");
  }

  // ✅ return the query string
  return `*[_type == "blog"] | order(publishedAt desc) [${start}...${end}]{
    _id,
    title,
    "slug": slug.current,
    "img": mainImage.asset->url,
    "author": author,
    publishedAt,
    "excerpt": coalesce(excerpt, pt::text(body)[0..150] + "..."),
    body,
    featured,
    categories[]->{ _id, title }
  }`;
}



export const getSinglePost = `
  *[_type == "blog" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "img": mainImage.asset->url,
    author,
    body,
    excerpt,
    publishedAt
  }
`;

export const getRelatedPosts = `
  *[_type == "blog" && slug.current != $slug][0..2]{
    title,
    "slug": slug.current,
    "img": mainImage.asset->url,
    author,
    excerpt,
    publishedAt
  }
`;



export const getCategory= `
*[_type == "category"] | order(title asc) {
  _id,
  title
}
`
   

export const eventQuery = `
*[_type == "event"]{
  "slug": slug.current,
  title,
  location,
  date,
  "img": mainImage.asset->url,
  description
}
`;



export const getSingleEvent = `*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  location,
  date,
  featured,
  "img": mainImage.asset->url,
  "galleryImages": galleryImages[]{
    "url": asset->url
  },
  "videos": videos[]{
    title,
    url
  },
  description[]{
    ...,
    markDefs[]{
      ...,
      _type == "link" => {
        "href": @.href
      }
    }
  }
}`;

export const getFiresideChat =`*[_type == "firesideChat"] | order(date desc) {
  _id,
  title,
  "speakerName": speaker.name,
  "speakerPosition": speaker.position,
  date,
  tagline,
  startDate,
  endDate,
  registrationLink,
  "imageUrl": image.asset->url
}`
