import Link from "next/link";

const SignBtn = () => {
  return (
    <div className="flex flex-col-reverse 2lg:flex-row w-full gap-2">
      <Link
        href="#"
        className="w-full rounded-[24px] border border-navyBlue bg-navyBlue px-6 py-2 text-center text-sm font-medium text-white duration-200 hover:border hover:border-navyBlue hover:bg-white hover:text-navyBlue"
      >
        Sign Up
      </Link>
      <Link
        href="#"
        className="text-navyblue border-navyBlue 2lg:border-transparent w-full rounded-[24px] border bg-transparent px-6 py-2 text-center text-sm font-medium duration-200 hover:border-navyBlue"
      >
        Login
      </Link>
    </div>
  );
};

export default SignBtn;
