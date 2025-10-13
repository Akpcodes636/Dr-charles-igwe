"use client";
import { useEffect } from "react";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonies = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner?.children || []);

        scrollerContent.forEach((item) => {
          const duplicate = item.cloneNode(true) as HTMLElement;
          duplicate.setAttribute("aria-hidden", "true");
          scrollerInner?.appendChild(duplicate);
        });
      });
    }
  }, []);

  const testimonials = [
    {
      image: "/images/Testimonial.png",
      text: "Dr. Igwe is an authentic leader, impactful communicator, and catalytic voice for our time.",
      name: "Amazement Titus",
      role: "CFAO South Africa",
    },
    {
      image: "/images/Testimonial-1.png",
      text: "Charles embodies a diverse set of knowledge and is a true capacity builder through mentoring.",
      name: "Tam Abaku",
      role: "Customer Solution Expert",
    },
    {
      image: "/images/Testimonial-3.png",
      text: "Charles has an incredible ability to engage both seasoned professionals and emerging leaders.",
      name: "Germain Aoun",
      role: "Career Transition Coach",
    },
    {
      image: "/images/Testimonial-2.png",
      text: "“Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him.”",
      name: "Fola F. Alabi",
      role: "Strategic Project Leader",
    },
    {
      image: "/images/Testimonial-2.png",
      text: "“Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him.”",
      name: "Fola F. Alabi",
      role: "Strategic Project Leader",
    },
    {
      image: "/images/Testimonial-2.png",
      text: "“Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him.”",
      name: "Fola F. Alabi",
      role: "Strategic Project Leader",
    },
    // {
    //   image: "/images/Testimonial-2.png",
    //   text: "“Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him.”",
    //   name: "Fola F. Alabi",
    //   role: "Strategic Project Leader",
    // },
    // {
    //   image: "/images/Testimonial-2.png",
    //   text: "“Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him.”",
    //   name: "Fola F. Alabi",
    //   role: "Strategic Project Leader",
    // },
    // {
    //   image: "/images/Testimonial-2.png",
    //   text: "“Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him.”",
    //   name: "Fola F. Alabi",
    //   role: "Strategic Project Leader",
    // },
  ];

  return (
    <section className="bg-white py-[77px]">
      <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-center text-black mb-[32px]">
        What People Say About Charles Igwe
      </h3>

      <div className="scroller" data-speed="fast" data-direction="left">
        <div className="scroller__inner">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
