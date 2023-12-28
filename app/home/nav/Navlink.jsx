"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navlink = () => {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setShowDropdown(index);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const handleClick = (index) => {
    if (showDropdown === index) {
      setShowDropdown(null);
    } else {
      setShowDropdown(index);
    }
  };

  const handleLinkClick = (index) => {
    if (window.innerWidth <= 768) {
      handleClick(index);
    }
  };

  return (
    <nav className="flex flex-col items-center 2lg:flex-row 2lg:items-start px-5 2lg:px-0">
      <ul className="h-full gap-6 w-full 2lg:flex">
        {NAV_LINKS.map((link, index) => (
          <li
            key={link.key}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              onClick={() => handleLinkClick(index)}
              className="flex cursor-pointer items-center pb-1.5 pr-5 font-medium text-[#17181A] transition-all hover:text-forestGreen"
            >
              {link.label}
              {link.dropDown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>

            {link.dropDown && (
              <div
                className={`2lg:absolute left-0 top-full z-10 w-full 2lg:w-60 mb-2 rounded-md border border-gray-200 bg-white 2lg:shadow-md ${
                  showDropdown === index
                    ? "opacity-100 translate-y-0 pointer-events-auto relative"
                    : "opacity-0 translate-y-2 pointer-events-none absolute"
                } transition-all duration-300 ease-in-out`}
              >
                <ul className="py-2 text-sm w-full">
                  {link.dropDown.map((item, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={item.href}>
                        <span className="text-gray-800">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlink;
