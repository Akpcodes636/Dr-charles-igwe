"use client";
import AboutHeader from "@/app/components/about/AboutHeader";
import AboutHero from "@/app/components/about/AboutHero";
import AboutGallery from "@/app/components/about/AboutImage";

const Page = () => {
  return (
    <>
      <AboutHeader />
      <div className="-mb-[80px]">
        <AboutGallery />
      </div>
      <AboutHero />
    </>
  );
};

export default Page;
