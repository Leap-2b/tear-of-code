"use client";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import MenusideBar from "./MenuSideBar";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Header() {
  const router = useRouter();
  return (
    <div className="w-[100%]  flex  justify-between h-[60px] bg-[#FFFFFF] px-4 py-4 border-1">
      <Link href={"/"}>
        <Button
          variant={"link"}
          className="font-bold text-[17px] cursor-pointer "
        >
          StyleCut
        </Button>
      </Link>
      <div className="flex  gap-5 ">
        <Button
          variant={"outline"}
          className="size-5 border-none cursor-pointer "
          onClick={() => router.push("/auth")}
        >
          <UserCircle className="size-5" />
        </Button>
        <MenusideBar />
      </div>
    </div>
  );
}
