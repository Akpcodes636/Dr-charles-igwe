"use client";
import Footer from "@/app/components/Footer";
import MentorshipHeader from "@/app/components/mentorship/mentorshipHeader";
import MentorshipHero from "@/app/components/mentorship/mentorshipHero";


const Page = () => {
    return (
     <section>
        <div>
            <MentorshipHeader />
           <MentorshipHero />
           <Footer bgColor="bg-[#000000]" />
        </div>
     </section>
    )
}

export default Page;