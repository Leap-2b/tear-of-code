"use client";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import MenusideBar from "./MenuSideBar";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  return (
    <div className="w-[100%]  flex  justify-between h-[60px] bg-[#FFFFFF] px-4 py-4 border-1">
      <h3 className="font-bold text-[17px]">StyleCut</h3>
      <div className="flex  gap-5 ">
        <Button
          variant={"outline"}
          className="size-5 border-none "
          onClick={() => router.push("/auth")}
        >
          <UserCircle className="size-5" />
        </Button>
        <MenusideBar />
      </div>
    </div>
  );
}
