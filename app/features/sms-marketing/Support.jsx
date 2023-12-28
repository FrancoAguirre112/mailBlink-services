import Image from "next/image";
// import Supportimg from "./Group 1000000830.png";

export default function Support() {
  return (
    <main className="md:b-10 mt-0 w-full bg-blue-50 py-4 font-poppins text-ui_primary md:px-[2.25rem] md:py-10">
      <div className="mx-4 md:mx-10 md:max-w-screen-lg lg:max-w-screen-xl">
        <div className="mb-[100px] flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col text-center md:w-1/2 md:text-left">
            <h2 className="mt-10 font-poppins text-xl font-semibold text-ui_primary md:text-4xl md:font-bold">
              Premium Support
            </h2>
            <p className="text-md font-md mt-4 md:mt-10 md:text-lg">
              Our FirstWave support engineers are highly skilled and experienced
              in NMIS, Open-AudIT and all of our commercial products and helped
              customers from Telcos, MSP, enterprise organizations.
            </p>
            <p className="text-md mt-4 md:mt-7 md:text-lg">
              We work closely with you during implementation and rollout, as
              well as post delivery of our solutions.
            </p>
            <button className="mt-10 cursor-pointer rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
              Go to Support
            </button>
          </div>
          <div>
            <Image
              src="/assets/images/Group 1000000830.png"
              width={1000}
              height={500}
              alt="support"
              className="w-full md:max-w-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
