import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface homeCardProps {
  className: string;
  img: string;
  title: string;
  description: string;
}

const HomeCard = ({ className, img, title, description }: homeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col w-full xl:max-w-[570px] min-h-[360px] rounded-[14px] cursor-crosshair",
        className
      )}
    >
      <div className="flex-center glassmorphism size-12">
        <Image src={img} alt="icon" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="sm:text-xs md:text-lg lg:text-2xl text-2xl font-bold">
          {title}
        </h1>
        <p className="sm:text-xs md:text-sm lg:text-lg font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
