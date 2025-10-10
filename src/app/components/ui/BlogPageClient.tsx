"use client";

import React, { useState, useEffect } from "react";
import BlogPageClient from "./BlogPageClient";
import Loader from "./Loader";
import PageLoader from "./PageLoader";

interface Props {
  featured: any;
  blogs: any;
  categories: any;
}

export default function BlogWithLoader({ featured, blogs, categories }: Props) {
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
