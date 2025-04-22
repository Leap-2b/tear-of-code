import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProfileSideBar from "./profile-side-bar";

export default function ProfileHeader() {
  return (
    <div className="w-[100%] flex justify-between items-center h-[60px] bg-[#FFFFFF] px-4 py-1 border-1">
      <Link href="/">
        <Button
          variant={"link"}
          className="font-bold text-[17px] cursor-pointer !no-underline"
        >
          StyleCut
        </Button>
      </Link>
      <div className="flex gap-5 ">
        <ProfileSideBar />
      </div>
    </div>
  );
}
