"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === "/" 
    ? pathname.startsWith("/category")  // হোম লিংক active থাকবে category পেজেও
    : pathname === href;
  return (
    <Link
      href={href}
      className={`
        ${isActive ? "border-b-2 border-[#403F3F] font-semibold" : "border-b-2 border-transparent"}
        hover:border-b-2 hover:border-[#403F3F] pb-1 transition-all
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
