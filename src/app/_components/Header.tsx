"use client";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import MenusideBar from "./MenuSideBar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "../_context/UserContext";
import UserDropdown from "./Userdropdown";

export function Header() {
  const { user } =useUser()
  const { logout } = useUser();
  const router = useRouter();
  return (
    <div className="w-[100%] flex justify-between items-center h-[60px] bg-[#FFFFFF] px-4 py-1 border-1">
      <Link href={"/"}>
        <Button
          variant={"link"}
          className="font-bold text-[17px] cursor-pointer "
        >
          StyleCut
        </Button>
      </Link>
      <div className="flex gap-5 ">
        {user ? (
          <>
            <UserDropdown />
            <MenusideBar />
          </>
        ) : (
          <MenusideBar />
        )}
      </div>
    </div>
  );
}
