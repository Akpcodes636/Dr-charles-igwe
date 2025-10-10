"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 1; // smaller = slower, larger = faster

    const scroll = () => {
      container.scrollLeft += speed;

      // When the first card fully leaves the left side,
      // move it to the end to create a seamless infinite effect.
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

        <div
          ref={scrollRef}
          className="flex gap-[4px] w-max overflow-hidden"
        >
          {/* ✅ Original Testimonials */}
          <div className="flex gap-[4px]">
            <TestimonialCard
              image="/images/Testimonial.png"
              text="Dr. Igwe is an authentic leader, impactful communicator, and catalytic voice for our time."
              name="Amazement Titus"
              role="CFAO South Africa"
            />
            <TestimonialCard
              image="/images/Testimonial-1.png"
              text="Charles embodies a diverse set of knowledge and is a true capacity builder through mentoring."
              name="Tam Abaku"
              role="Customer Solution Expert"
            />
            <TestimonialCard
              image="/images/Testimonial-3.png"
              text="Charles has an incredible ability to engage both seasoned professionals and emerging leaders."
              name="Germain Aoun"
              role="Career Transition Coach"
            />
            <TestimonialCard
              image="/images/Testimonial-2.png"
              text="Dr. Charles connects, motivates, and innovates — inspiring everyone fortunate to work with him."
              name="Fola F. Alabi"
              role="Strategic Project Leader"
            />
            <TestimonialCard
              image="/images/Testimonial-2.png"
              text="His dedication to leadership and people development is unmatched. Truly a transformational figure."
              name="Adaeze Johnson"
              role="Leadership Consultant"
            />
            <TestimonialCard
              image="/images/Testimonial-1.png"
              text="Charles’ mentorship has shaped many young professionals into world-class leaders."
              name="Tosin Adebayo"
              role="Community Developer"
            />
            <TestimonialCard
              image="/images/Testimonial-3.png"
              text="An insightful coach with a passion for empowering others to reach their full potential."
              name="Michael Eze"
              role="Growth Strategist"
            />
            <TestimonialCard
              image="/images/Testimonial-2.png"
              text="Working with Dr. Igwe has been one of the most enriching experiences of my professional life."
              name="Sophia Akpan"
              role="Tech Founder"
            />
          </div>

          {/* ✅ Duplicate for Infinite Effect */}
          <div className="flex gap-[4px]">
            <TestimonialCard
              image="/images/Testimonial.png"
              text="Dr. Igwe is an authentic leader, impactful communicator, and catalytic voice for our time."
              name="Amazement Titus"
              role="CFAO South Africa"
            />
            <TestimonialCard
              image="/images/Testimonial-1.png"
              text="Charles embodies a diverse set of knowledge and is a true capacity builder through mentoring."
              name="Tam Abaku"
              role="Customer Solution Expert"
            />
            <TestimonialCard
              image="/images/Testimonial-3.png"
              text="Charles has an incredible ability to engage both seasoned professionals and emerging leaders."
              name="Germain Aoun"
              role="Career Transition Coach"
            />
            <TestimonialCard
              image="/images/Testimonial-2.png"
              text="Dr. Charles connects, motivates, and innovates — inspiring everyone fortunate to work with him."
              name="Fola F. Alabi"
              role="Strategic Project Leader"
            />
            <TestimonialCard
              image="/images/Testimonial-2.png"
              text="His dedication to leadership and people development is unmatched. Truly a transformational figure."
              name="Adaeze Johnson"
              role="Leadership Consultant"
            />
            <TestimonialCard
              image="/images/Testimonial-1.png"
              text="Charles’ mentorship has shaped many young professionals into world-class leaders."
              name="Tosin Adebayo"
              role="Community Developer"
            />
            <TestimonialCard
              image="/images/Testimonial-3.png"
              text="An insightful coach with a passion for empowering others to reach their full potential."
              name="Michael Eze"
              role="Growth Strategist"
            />
            <TestimonialCard
              image="/images/Testimonial-2.png"
              text="Working with Dr. Igwe has been one of the most enriching experiences of my professional life."
              name="Sophia Akpan"
              role="Tech Founder"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
