"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FAQs from "../FAQ";

const faqItems = [
  {
    id: 1,
    question: "What does NMIS stand for?",
    answer: "lorem ipsum fah deh rum sed",
  },
  {
    id: 2,
    question: "What is a network management system?",
    answer: "lorem ipsum fah deh rum sed",
  },
  {
    id: 3,
    question: "What is a network management software?",
    answer: "lorem ipsum fah deh rum sed",
  },
  {
    id: 4,
    question: "What is wireless network management software?",
    answer: "lorem ipsum fah deh rum sed",
  },
  {
    id: 5,
    question: "What are the advantages of using network?",
    answer: "lorem ipsum fah deh rum sed",
  },
];

export default function NMIS() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion((prevOpenQuestion) =>
      prevOpenQuestion === id ? null : id
    );
  };

  return (
    <section className="mt-10 items-center bg-blue-50 md:pt-[8rem]">
      <div className="z-10 mx-4 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center">
        <main className="relative z-10 mt-10 max-w-xl rounded-3xl bg-white px-4 py-10 font-poppins shadow-lg md:mt-0 md:px-10 md:py-[5rem]">
          <h2 className="font-poppins text-2xl font-semibold text-ui_primary md:text-4xl">
            Download NMIS
          </h2>
          <p className="font-md mt-4 text-sm md:mt-7 md:text-lg">
            NMIS (Network Management Information System) is <br /> an
            open-source network management system
            <br /> that was first released in 1998.
            <br />
            <Link href="" className="mt-2 text-ui_button underline">
              Download dataSheet
            </Link>
          </p>
          <button className="mt-10 cursor-pointer rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
            Download
          </button>
        </main>

        {/* FAQ */}
        <section className="z-20">
          <FAQs faqItems={faqItems} />
        </section>
      </div>
      <div className="z-0 hidden absolute -mt-32 w-full md:flex">
        <Image
          src="/assets/images/Group 1000000869.png"
          width={1500}
          height={30}
          alt="imx"
          className="w-full"
        />
      </div>
    </section>
  );
}
