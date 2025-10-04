"use client";
import Footer from "@/app/components/Footer";
import LeadershipHeader from "@/app/components/leadership/LeadershipHeader";
import LeadershipHero from "@/app/components/leadership/LeadershipHero";


const Page = () => {
    return (
        <section>
          <div>
          <LeadershipHeader />
          <LeadershipHero />
          <Footer bgColor="bg-[#000000]" />
          </div>
        </section>
    )
}

export default Page;