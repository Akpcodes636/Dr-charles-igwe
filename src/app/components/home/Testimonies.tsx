"use client";

import TestimonialCard from "../ui/TestimonialCard";

const Testimonies = () => {
  return (
    <section className="bg-white">
      <div className="container-sm mx-auto pt-[24px] pb-[77px]">
        <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium md:font-semibold lg:font-semibold leading-[100%] text-center text-[#000000] mb-[32px]">
          What People Say About Charles Igwe
        </h3>
        <div className="pt-4 flex gap-[4px] overflow-x-auto  scrollbar-hide">
          <TestimonialCard
            image="/images/Testimonial.png"
            text="“Dr. Igwe is an authentic leader, impactful communicator, and catalytic voice for our time.”"
            name="Amazement Titus"
            role="CFAO South Africa"
          />
          <TestimonialCard
            image="/images/Testimonial-1.png"
            text="I can summarize Charles as an en embodiment of diverse set of knowledge and a human capacity builder through mentoring and coaching"
            name="Tam Abaku"
            role="Customer Solution Expert"
          />
           <TestimonialCard
            image="/images/Testimonial-3.png"
            text="Charles has an incredible ability to engage with the crowd, whether it&apos;s a room full of seasoned professionals or emerging leaders."
            name="Germain Aoun"
            role="Career Transition Coach"
          />
          <TestimonialCard
            image="/images/Testimonial-2.png"
            text="Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him."
            name="Fola F. Alabi"
            role="Strategic Project Leader"
          />
          <TestimonialCard
            image="/images/Testimonial-2.png"
            text="Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him."
            name="Fola F. Alabi"
            role="Strategic Project Leader"
          />
          <TestimonialCard
            image="/images/Testimonial-2.png"
            text="Dr. Charles is more than a leader; he is a connector, a motivator, and an innovator who inspires those fortunate enough to work with him."
            name="Fola F. Alabi"
            role="Strategic Project Leader"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
