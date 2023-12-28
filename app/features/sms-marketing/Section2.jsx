import { FaBalanceScale } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      title: "Sophisticated Business Rules",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      title: "Pre-Configured Out-of-the",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      title: "Massively Scalable",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      title: "Visible Operational Impact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      title: "Automated Health Life",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      title: "Customizable Alert Escalation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
  ];

  return (
    <main className="mt-10 bg-blue-50 px-4 py-10 font-poppins text-ui_primary md:px-20 md:py-[100px] lg:px-40">
      <h2 className="text-center text-2xl font-extrabold md:text-4xl">
        Why Top Companies use MailBlink
      </h2>
      <div className="flex flex-col items-center md:mt-10 px-10 md:px-0">
        <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transform overflow-hidden rounded-xl border-b-4 border-transparent px-5 py-5 text-center transition-transform hover:scale-105 hover:border-ui_primary hover:bg-white hover:shadow-lg`}
            >
              <div className="flex items-center justify-center">
                <FaBalanceScale className="h-8 w-[50%]" />
              </div>
              <h3 className="text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
