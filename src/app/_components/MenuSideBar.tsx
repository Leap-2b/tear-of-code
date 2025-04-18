"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  EqualApproximately,
  LogIn,
  MenuSquare,
  PhoneCall,
  ScanHeart,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MenusideBar() {
  const router = useRouter();
  return (
    <div>
      <Sheet>
        <SheetTrigger className="size-5 overflow-hidden cursor-pointer">
          <MenuSquare className="size-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className=" mt-20 ml-4 flex flex-col gap-4 font-semibold text-[22px] ">
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline "
              onClick={() => router.push("/service")}
            >
              <ScanHeart className="mt-1.5" />
              Үйлчилгээ
            </SheetTitle>
            <Link href={"/our-staff"}>
              <SheetTitle
                className=" cursor-pointer flex gap-2 hover:underline "
                onClick={() => router.push("/our-staff")}
              >
                <UserCheck className="mt-1.5" />
                Манай Үсчид
              </SheetTitle>
            </Link>
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline "
              onClick={() => router.push("/contact")}
            >
              <PhoneCall />
              Холбоо барих
            </SheetTitle>
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline "
              onClick={() => router.push("/about-us")}
            >
              <EqualApproximately className="mt-1.5" />
              Бидний тухай
            </SheetTitle>
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline "
              onClick={() => router.push("/auth")}
            >
              <LogIn className="mt-1.5" />
              Нэвтрэх / Бүртгүүлэх
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
