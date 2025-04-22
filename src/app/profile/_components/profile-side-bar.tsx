"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Calendar,
  Heart,
  LayoutDashboard,
  LogOut,
  Menu,
  MenuSquare,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfileSideBar() {
  return (
    <Sheet>
      <SheetTrigger className="h-full size-5 flex items-center my-auto overflow-hidden cursor-pointer ">
        <MenuSquare className="size-5" />
      </SheetTrigger>
      <SheetContent className="sm:max-w-[300px]">
        <SheetHeader className=" mt-20 ml-4 flex flex-col gap-4 font-semibold text-[22px] ">
          <SheetTitle className=" cursor-pointer flex gap-2 hover:underline ">
            <Calendar className="mt-1.5" />
            Цаг захиалга
          </SheetTitle>
          <SheetTitle className=" cursor-pointer flex gap-2 hover:underline ">
            <User className="mt-1.5" />
            Миний мэдээлэл
          </SheetTitle>
          <SheetTitle className=" cursor-pointer flex gap-2 hover:underline ">
            <Heart className="mt-1.5" />
            Таалагдсан
          </SheetTitle>
          <SheetTitle className=" cursor-pointer flex gap-2 hover:underline ">
            <LogOut className="mt-1.5" />
            Хэрэглэгчээс гарах
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
