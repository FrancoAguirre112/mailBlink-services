import Image from "next/image";
import { GoVideo } from "react-icons/go";

export const SmsHero = () => {
  return (
    <header className="md:bg-white-500 mt-10 flex flex-col items-center justify-center gap-5 bg-white px-4 text-center font-poppins md:my-20 md:flex-row md:gap-10 md:px-24">
      <div className="mb-4 bg-white md:w-4/5 md:text-left">
        <h3 className="text-sm text-ui_secondary1 md:text-lg">
          WELCOME TO SMS MARKETING
        </h3>
        <h1 className="mt-2 cursor-pointer text-4xl font-extrabold text-ui_primary md:mt-5 md:text-7xl">
          MailBlink
        </h1>
        <p className="mt-3 text-sm font-bold text-ui_primary md:mt-10 md:text-lg">
          The backbone of your network <br />
          management system
        </p>
        <p className="mt-3 text-sm md:mt-7 md:text-lg">
          Network Management Information System (NMIS) is the robust software
          platform underpinning Opmantek Performance and Management solutions.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 md:flex-row md:justify-start">
          <button className="cursor-pointer rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
            Get Started Now!
          </button>
          <button className="flex cursor-pointer flex-row rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
            <GoVideo className="mr-2 h-5 w-5" /> Watch a demo
          </button>
        </div>
      </div>
      <div className="mb-4 flex w-full justify-center">
        <Image
          src="/assets/images/Creative.png"
          alt="heroimg"
          width={1000}
          height={500}
        />
      </div>
    </header>
  );
};
