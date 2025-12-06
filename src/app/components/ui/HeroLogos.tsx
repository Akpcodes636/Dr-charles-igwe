"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroImage {
  image: string; // Adjust this if your data structure is different
}


const HeroLogos = ({ heroImage }: { heroImage: HeroImage[] }) => {
  return (
    <div className="relative overflow-hidden w-[1000px]">
      <motion.div
        className="flex items-center justify-center gap-[53px] md:gap-[93px] lg:gap-[93px]"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 25, // Adjust speed (lower = faster)
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate images twice for infinite scrolling */}
        {[...heroImage, ...heroImage].map((i, j) => (
          <div
            className="min-w-[40px] min-h-[40px] md:min-w-[63.84px] md:min-h-[63.84px] lg:min-w-[70px] lg:min-h-[70px]"
            key={j}
          >
            <Image
              src={i.image}
              alt={`logo-${j}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroLogos;
