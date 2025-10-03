"use client";
import Footer from "@/app/components/Footer";
import PodcastHeader from "@/app/components/podcast/PodcastHeader";
import PodcastHero from "@/app/components/podcast/PodcastHero";

const Page = () => {
  return (
    <section>
      <div>
      <PodcastHeader />
      <PodcastHero />
      <Footer bgColor="bg-[#000000]" />
      </div>
    </section>
  );
};


export default Page;

