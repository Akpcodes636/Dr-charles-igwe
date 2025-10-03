"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function GoBack() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div
      onClick={goBack}
      className="flex w-fit cursor-pointer items-center gap-2 font-medium"
    >
      <ArrowLeft size={20} color="white" />
      <span className="font-normal text-[14px] leading-[100%] text-[#FFFFFFCC]">
        Back to Events Gallery
      </span>
    </div>
  );
}
