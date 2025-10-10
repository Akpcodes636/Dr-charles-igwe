"use client";
import Image from "next/image";

const AboutGallery = () => {
  return (
    <div className="container-sm mx-auto">
      <div className="hidden md:hidden lg:flex items-center justify-center gap-[19px]">
        <div className="w-[296px] h-[168px] bg-red-700 rounded-[5px]">
          <Image
            src="/images/Img-1.png"
            width={500}
            height={500}
            alt="picture of charles igwe"
          />
        </div>
        <div className="w-[296px] h-[208px] rounded-[5px] bg-green-700">
          <Image
            src="/images/Img-2.png"
            width={500}
            height={500}
            alt="picture of charles igwe"
            className="w-full h-full object-cover rounded-[5px]"
          />
        </div>
        <div className="w-[296px] h-[168px] rounded-[5px] bg-yellow-500">
          <Image
            src="/images/Img-3.png"
            width={500}
            height={500}
            alt="picture of charles igwe"
            className="w-full h-full object-cover rounded-[5px]"
          />
        </div>
        <div className="w-[296px] h-[208px] rounded-[5px] bg-purple-800">
          <Image
            src="/images/Img-4.png"
            width={500}
            height={500}
            alt="picture of charles igwe"
            className="w-full h-full object-cover rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
