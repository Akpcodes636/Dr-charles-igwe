"use client";
import Image from "next/image";
import Button from "./Button";

const KingdomCard = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="w-full max-w-[358px] md:max-w-full lg:max-w-full mx-auto min-h-[357px] bg-[#EDF3FC] rounded-[5px]">
      <div className="p-[24px] flex flex-col min-h-full">
        {/* Image */}
        <div className="flex items-center justify-center space-y-[16px]">
          <div className="w-[112px] h-[112px] mb-[16px]">
            <Image
              src={img}
              width={112}
              height={112}
              alt={`photo of ${title}`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Title + Text */}
        <div className="flex-1 ">
          <h3 className="text-center text-[#000000] text-[20px] font-medium leading-[100%] pb-[8px]">
            {title}
          </h3>
          <p className="text-[16px] font-normal leading-[140%] pb-[24px] text-[#000000B2] text-center">
            {text}
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button style="border" type="button">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KingdomCard;
