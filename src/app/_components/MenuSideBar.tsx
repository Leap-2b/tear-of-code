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

export default function MenusideBar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="size-5 overflow-hidden">
          <MenuSquare className="size-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Service</SheetTitle>
            <SheetTitle>Our Barbers</SheetTitle>
            <SheetTitle>Login /Register</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
