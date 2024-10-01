"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section
      className="sticky left-0 top-0 flex max-h-[1520px] flex-col justify-between bg-teal-700/25
      p-6 pt-28 text-white max-sm:hidden lg:w-[264px]"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link, index) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={index}
              className={cn(
                "flex items-center gap-4 p-2 rounded-lg justify-start",
                {
                  "bg-green-800": isActive,
                }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-base font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
