"use client";

import React, { useState, useEffect } from "react";
import BlogPageClient from "./BlogPageClient";
import PageLoader from "./PageLoader";
import { Blog, Category } from "@/Types";

interface BlogWithLoaderProps {
  featured: Blog[];
  blogs: Blog[];
  categories: Category[];
}


export default function BlogWithLoader({ featured, blogs, categories }: BlogWithLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate data loading delay if needed
    setTimeout(() => setLoading(false), 500); // optional delay
  }, []);

  return (
    <div>
      {loading ? (
        <PageLoader />
      ) : (
        <BlogPageClient featured={featured} blogs={blogs} categories={categories} />
      )}
    </div>
  );
}
