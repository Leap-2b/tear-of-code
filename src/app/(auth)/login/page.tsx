import Link from "next/link";
import { Googleconfirm } from "./_compoment/Googleconfirm";
import { ProfileForm } from "./_compoment/LoginSign-in";

const Page = () => {
  return (
    <div className="min-w-[375px] h-[812px] overflow-hidden flex flex-col ">
      <header className="my-[75px] mx-auto mb-[120px]">
        <h2 className="text-[24px] font-semibold">Welcome back,</h2>
        <p className="text-[14px] font-normal">
          Glad to meet you again!, please login to use the app.
        </p>
      </header>
      <ProfileForm />
      <div className="flex w-[360px] px-5 items-center mx-auto my-2">
        <div className="w-[50%] h-[0px] border-[1px] border-solid border-[#D1D5DB]"></div>
        <p className="px-5 text-[16px] font-semibold">or</p>
        <div className="w-[50%] h-[0px] border-[1px] border-solid border-[#D1D5DB]"></div>
      </div>
      <Googleconfirm />
      <div className="flex w-360px justify-center mt-4">
        <Link href={"/signup"}>
          <p>Don’t have an account?</p>
          <button>Join Now</button>
        </Link>
      </div>
    </div>
  );
};
export default Page;
