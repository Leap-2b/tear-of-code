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
        <SheetTrigger className="h-full size-5 flex items-center my-auto overflow-hidden cursor-pointer ">
          <MenuSquare className="size-5"/>
        </SheetTrigger>
        <SheetContent className="max-w-[260px]">
          <SheetHeader className=" mt-10 ml-1 flex flex-col gap-4 font-semibold text-[15px] ">
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline items-center"
              onClick={() => router.push("/service")}
            >
              <ScanHeart size={20} strokeWidth={2} />
              Үйлчилгээ
            </SheetTitle>
            <Link href={"/our-staff"}>
              <SheetTitle
                className=" cursor-pointer flex gap-2 hover:underline items-center"
                onClick={() => router.push("/our-staff")}
              >
                <UserCheck size={20} strokeWidth={2} />
                Манай Үсчид
              </SheetTitle>
            </Link>
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline items-center"
              onClick={() => router.push("/contact")}
            >
              <PhoneCall size={20} strokeWidth={2}/>
              Холбоо барих
            </SheetTitle>
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline items-center"
              onClick={() => router.push("/about-us")}
            >
              <EqualApproximately size={20} strokeWidth={2} />
              Бидний тухай
            </SheetTitle>
            <SheetTitle
              className=" cursor-pointer flex gap-2 hover:underline items-center"
              onClick={() => router.push("/auth")}
            >
              <LogIn size={20} strokeWidth={2} />
              Нэвтрэх / Бүртгүүлэх
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
