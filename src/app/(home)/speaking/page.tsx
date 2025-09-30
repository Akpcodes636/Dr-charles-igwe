"use client";
import Footer from "@/app/components/Footer";
import SpeakingHeader from "@/app/components/speaking/SpeakingHeader";
import SpeakingHero from "@/app/components/speaking/SpeakingHero";


const Page = () => {
    return (
    <section>
        <div>
            <SpeakingHeader />
            <SpeakingHero />
        </div>
        <Footer bgColor="bg-[#000000]" />
    </section>
    )
}

export default Page;