"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuSquare } from "lucide-react";
import Link from "next/link";

export default function MenusideBar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="size-5 overflow-hidden">
          <MenuSquare className="size-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
