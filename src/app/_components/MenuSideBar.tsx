"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MenusideBar() {
  const router = useRouter();
  return (
    <div>
      <Sheet>
        <SheetTrigger className="size-5 overflow-hidden">
          <MenuSquare className="size-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Үйлчилгээ</SheetTitle>
            <Link href={"/our-staff"}>
              <SheetTitle>Манай Үсчид</SheetTitle>
            </Link>
            <SheetTitle onClick={() => router.push("/contect")}>
              Холбоо барих
            </SheetTitle>
            <SheetTitle onClick={() => router.push("/about-us")}>
              Бидний тухай
            </SheetTitle>
            <SheetTitle onClick={() => router.push("/auth")}>
              Нэвтрэх / Бүртгүүлэх
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
