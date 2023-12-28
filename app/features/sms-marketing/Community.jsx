import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    image: "/assets/icons/support.svg",
    title: "Community Support",
    description:
      "Community Support is also available for all open source users.",
  },
  {
    id: 2,
    image: "/assets/icons/github.icon.svg",
    title: "MailBlink on GitHub",
    description: "Track the MailBlink development changes on GitHub.",
  },
];

const Community = () => {
  return (
    <section className="flex flex-col items-center justify-center rounded-[100px] px-6 md:h-[49.875rem] md:flex-row md:gap-5 md:px-10 lg:gap-5 lg:px-[7.37rem]">
      <div className="w-full md:w-1/2">
        <Image
          src="/assets/images/community.jpeg"
          alt=""
          width={500}
          height={500}
          quality={100}
          className="rounded-3xl"
        />
      </div>

      <div className="md:w-[60%] text-center md:text-left">
        <h2 className="mt-5 text-4xl font-bold text-ui_primary lg:text-5xl">
          Download NMIS
        </h2>
        <p className="text-md mt-2 leading-8 text-Ash md:text-lg">
          NMIS (Network Management Information System) is an open-source network
          management system that was first released in 1998.
          <Link href="/">
            <span className="block cursor-pointer text-ui_secondary1 underline">
              Download dataSheet
            </span>
          </Link>
        </p>
        <div className="mb-64 mt-10 grid grid-cols-1 gap-8 md:mb-0 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <img
                src={item.image}
                alt=""
                className="mb-2 h-10 w-10 object-contain"
              />
              <h3 className="text-xl font-semibold md:text-2xl">
                {item.title}
              </h3>
              <p className="my-5 text-lg text-Ash">{item.description}</p>
              <Link href="/" className="flex w-full">
                <button className="w-full md:w-auto cursor-pointer rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
                  Join
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
