import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Service";
import Community from "../components/home/Community";
import Accountability from "../components/home/Accountability";

export default function Page() {
  return (
    <div className="overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      <Community />
      <Accountability />
    </div>
  );
}
