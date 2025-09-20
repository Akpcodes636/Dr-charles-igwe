"use client";
import ServiceCard from "../ui/ServicesCard";
import SubHeader from "../ui/Subheader";

const Services = () => {
  return (
    <section>
      <SubHeader text="Our Services" />
      <div className="py-[40px] container-sm mx-auto">
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
