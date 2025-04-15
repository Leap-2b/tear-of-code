import Link from "next/link";
import { Register } from "./_compoments/SignUpInput";

const Page = () => {
  return (
    <div className="min-w-[375px] h-[812px] overflow-hidden flex flex-col justify-between pb-10">
      <div className="flex flex-col">
        <header className="my-[75px] mx-auto mb-[120px] min-w-[375px] px-5">
          <h2 className="text-[24px] font-semibold">Create an account,</h2>
          <p className="text-[14px] font-normal">
            Please type full information bellow and we can create your account
          </p>
        </header>
        <Register />
        <div className="flex w-[360px] px-5 items-center mx-auto my-2">
          <div className="w-[50%] h-[0px] border-[1px] border-solid border-[#D1D5DB]"></div>
          <p className="px-5 text-[16px] font-semibold">or</p>
          <div className="w-[50%] h-[0px] border-[1px] border-solid border-[#D1D5DB]"></div>
        </div>
      </div>

      <div className="flex w-[360px] px-5 items-center mx-auto my-2 justify-center gap-1 ">
        <p>Already have an account?</p>
        <Link href={"/signup"} className="flex">
          <button> Sign In</button>
        </Link>
      </div>
    </div>
  );
};
export default Page;
