
import BlogPageClientLoader from "@/app/components/blog/BlogPageClientLoader";

// ✅ Correct type definition for a Next.js dynamic route
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ Await because params is a Promise
  return <BlogPageClientLoader slug={slug} />;
}

