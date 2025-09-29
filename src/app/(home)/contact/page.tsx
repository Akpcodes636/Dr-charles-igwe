"use client";
import ContactHero from "@/app/components/contact/Contact-hero";
import ContactForm from "@/app/components/contact/ContactForm";
import Footer from "@/app/components/Footer";



const Page = () => {
  return (
    <section>
      <div>
        <ContactHero />
        <div className="-mt-[120px] sm:-mt-[150px] md:-mt-[160px] lg:-mt-[180px] xl:-mt-50 px-4 py-16">
          <ContactForm />
        </div>
        <Footer bgColor="bg-[#000000]" />
      </div>
    </section>
  );
};

export default Page;
