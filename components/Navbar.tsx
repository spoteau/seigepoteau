import React from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className=" flex gap-4 flex-between fixed z-50 w-full bg-teal-900 px-6 py-4 lp:px-10">
      <Image
        src="/seige.jpg"
        alt="Seige"
        className="max-sm:size-10 rounded-full"
        width={50}
        height={50}
      />

      <h1 className="text-lg font-semibold">Seige Poteau</h1>

      <div className="flex-between gap-5">
        <h1 className="text-2xl font-semibold justify-items-end">Portfolio</h1>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
