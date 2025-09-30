"use client";
import Footer from "@/app/components/Footer";
import ProjectHeader from "@/app/components/project/ProjectHeader";
import ProjectHero from "@/app/components/project/ProjectHero";



const Page = () => {
 return (
    <section>
        <div>
           <ProjectHeader />
           <ProjectHero />
           <Footer bgColor="bg-[#000000]" />
        </div>
    </section>
 )
}

export default Page;