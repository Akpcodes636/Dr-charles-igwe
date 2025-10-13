import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Service";
import Accountability from "../components/home/Accountability";
import Testimonies from "../components/home/Testimonies";
import Booking from "../components/home/Booking";
import Footer from "../components/Footer";
import Community from "../components/home/Community";

export default function Page() {
  return (
    <div className="overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      <Community />
      <Accountability />
      <Testimonies />
      <Booking />
      <Footer bgColor="bg-[#0A1F44]" />
    </div>
  );
}
