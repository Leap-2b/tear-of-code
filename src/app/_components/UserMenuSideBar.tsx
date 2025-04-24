"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOut, MenuSquare, Heart, Calendar, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../_context/UserContext";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserMenusideBar() {
  const { user, logout } = useUser();
  const router = useRouter();
  return (
    <div>
      <Sheet>
        <SheetTrigger className="h-full size-5 flex items-center my-auto overflow-hidden cursor-pointer">
          <MenuSquare className="size-5" />
        </SheetTrigger>
        <SheetContent className="max-w-[260px]">
          <SheetHeader className="flex flex-col gap-4 font-semibold text-[15px] p-0 ">
            <SheetTitle className=" cursor-pointer flex gap-2 hover:underline border-b-[1px] border-black/10 w-full p-5 ">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div>
                <p>{user?.username}</p>
                <p className="text-gray-400 text-[12px]">{user?.email}</p>
              </div>
            </SheetTitle>
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline ml-4 items-center"
              onClick={() => router.push("/dashboard/appointments")}
            >
              <Calendar className=" w-5" />
              Захиалга
            </SheetTitle>
            {/*  */}

            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline ml-4 items-center"
              onClick={() => router.push("/dashboard/profile")}
            >
              <User className=" w-5" />
              Профайл
            </SheetTitle>

            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline ml-4 items-center"
              onClick={() => router.push("/contact")}
            >
              <Heart className=" w-5" />
              Дуртай
            </SheetTitle>

            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline ml-4 items-center"
              onClick={() => logout()}
            >
              <LogOut className=" w-5" />
              Гарах
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
