"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.5; // smaller = slower, larger = faster

    const scroll = () => {
      container.scrollLeft += speed;

      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-white">
      <div className="pt-[24px] pb-[77px] overflow-hidden">
        <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium md:font-semibold lg:font-semibold leading-[100%] text-center text-[#000000] mb-[32px]">
          What People Say About Charles Igwe
        </h3>

        <div ref={scrollRef} className="flex overflow-x-hidden w-full">
          {/* ✅ Single flex wrapper with consistent spacing */}
          <div className="flex gap-[4px] min-w-max">
            {/* Original Testimonials */}
            {[
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
                text: "Dr. Charles connects, motivates, and innovates — inspiring everyone fortunate to work with him.",
                name: "Fola F. Alabi",
                role: "Strategic Project Leader",
              },
              {
                image: "/images/Testimonial-2.png",
                text: "His dedication to leadership and people development is unmatched. Truly a transformational figure.",
                name: "Adaeze Johnson",
                role: "Leadership Consultant",
              },
              {
                image: "/images/Testimonial-1.png",
                text: "Charles’ mentorship has shaped many young professionals into world-class leaders.",
                name: "Tosin Adebayo",
                role: "Community Developer",
              },
              {
                image: "/images/Testimonial-3.png",
                text: "An insightful coach with a passion for empowering others to reach their full potential.",
                name: "Michael Eze",
                role: "Growth Strategist",
              },
              {
                image: "/images/Testimonial-2.png",
                text: "Working with Dr. Igwe has been one of the most enriching experiences of my professional life.",
                name: "Sophia Akpan",
                role: "Tech Founder",
              },
            ].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}

            {/* ✅ Duplicate for Infinite Scroll */}
            {[
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
                text: "Dr. Charles connects, motivates, and innovates — inspiring everyone fortunate to work with him.",
                name: "Fola F. Alabi",
                role: "Strategic Project Leader",
              },
              {
                image: "/images/Testimonial-2.png",
                text: "His dedication to leadership and people development is unmatched. Truly a transformational figure.",
                name: "Adaeze Johnson",
                role: "Leadership Consultant",
              },
              {
                image: "/images/Testimonial-1.png",
                text: "Charles’ mentorship has shaped many young professionals into world-class leaders.",
                name: "Tosin Adebayo",
                role: "Community Developer",
              },
              {
                image: "/images/Testimonial-3.png",
                text: "An insightful coach with a passion for empowering others to reach their full potential.",
                name: "Michael Eze",
                role: "Growth Strategist",
              },
              {
                image: "/images/Testimonial-2.png",
                text: "Working with Dr. Igwe has been one of the most enriching experiences of my professional life.",
                name: "Sophia Akpan",
                role: "Tech Founder",
              },
            ].map((t, i) => (
              <TestimonialCard key={`dup-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
