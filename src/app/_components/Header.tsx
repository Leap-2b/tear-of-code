"use client";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import MenusideBar from "./MenuSideBar";
import Link from "next/link";
import { useUser } from "../_context/UserContext";
import UserDropdown from "./Userdropdown";
import UserMenusideBar from "./UserMenuSideBar";

export function Header() {
  const { user } = useUser();
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
      <nav className="hidden md:flex md:items-center md:space-x-8">
        <Link
          href="/service"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Үйлчилгээнүүд
        </Link>
        <Link
          href="/our-staff"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Манай ажилчид
        </Link>
        <Link
          href="/about-us"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Бидний тухай
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Холбоо барих
        </Link>
      </nav>
      <div className="flex gap-5 ">
        {user ? (
          <>
            <UserDropdown />
            <div
              className={
                "container md:hidden overflow-hidden transition-all duration-300 ease-in-out flex items-center"
              }
            >
              <UserMenusideBar />
            </div>
          </>
        ) : (
          <>
            <Link href={"/auth"}>
              <Button
                variant={"outline"}
                className="size-5 border-none cursor-pointer flex items-center "
              >
                <UserCircle className="size-5" />
              </Button>
            </Link>
            <div
              className={
                "container md:hidden overflow-hidden transition-all duration-300 ease-in-out flex items-center"
              }
            >
              <MenusideBar />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
