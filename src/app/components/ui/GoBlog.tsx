"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function GoBlog() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div
      onClick={goBack}
      className="flex w-fit cursor-pointer items-center gap-2 font-medium"
    >
      <ArrowLeft size={20} color="black" />
      <span className="font-normal text-[14px] leading-[100%] text-black">
        Back to Blog
      </span>
    </div>
  );
}
