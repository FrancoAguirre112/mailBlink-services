"use client";

import Link from "next/link";
import { footerLinks } from "@/constants";
import { useState } from "react";

const FooterLink = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="flex flex-col gap-10 md:flex-row">
      {footerLinks.map((item) => (
        <div className="col-span-1" key={item.id}>
          <h3 className="font-Roboto mb-6 text-base font-semibold text-primaryBlack2 md:text-lg">
            {item.title}
          </h3>
          {item.links.map(({ id, href, link }) => (
            <div className="py-2" key={id}>
              <Link
                href={href}
                className="text-xs font-medium text-primaryBlack hover:text-ui_secondary1 md:text-sm"
              >
                {link}
              </Link>
            </div>
          ))}
        </div>
      ))}
      <div>
        <h3 className="font-Roboto mb-6 text-base font-semibold text-primaryBlack2 md:text-lg">
          Newsletter
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
          }}
          className={`mb-10 p-2 flex-col items-center justify-center gap-4 rounded-lg border-[1px] bg-white  text-center ${
            subscribed ? "hidden" : "flex"
          }`}
        >
          <div className="flex w-full flex-col gap-2">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-gray-100 px-5 py-3"
            />
            <input
              type="email"
              placeholder="Your best email"
              className="w-full rounded-lg bg-gray-100 px-5 py-3"
            />
          </div>

          <button type="submit" className="custom-btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Subscribe
          </button>
        </form>
        <h3
          className={`${
            subscribed ? "flex" : "hidden"
          } text-xs font-medium text-primaryBlack py-2 md:text-sm`}
        >
          Thank you!
        </h3>
      </div>
    </div>
  );
};

export default FooterLink;
