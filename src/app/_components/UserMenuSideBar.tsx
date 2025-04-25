"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  LogOut,
  MenuSquare,
  Heart,
  Calendar,
  User,
  BriefcaseBusiness,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "../_context/UserContext";
import { motion } from "framer-motion";

export default function UserMenusideBar() {
  const { logout } = useUser();
  const router = useRouter();

  const menuItems = [
    {
      icon: <Calendar className="w-5" />,
      text: "Үйлчилгээ",
      path: "/service",
    },
    {
      icon: <BriefcaseBusiness className="w-5" />,
      text: "Манай үсчин",
      path: "/our-staff",
    },
    {
      icon: <Heart className="w-5" />,
      text: "Холбоо барих",
      path: "/contact",
    },
    {
      icon: <Calendar className="w-5" />,
      text: "Миний уулзалтууд",
      path: "/dashboard/appointments",
    },
    {
      icon: <User className="w-5" />,
      text: "Миний профайл",
      path: "/dashboard/profile",
    },
  ];

  return (
    <div>
      <Sheet>
        <SheetTrigger className="h-full size-5 flex items-center my-auto overflow-hidden cursor-pointer">
          <MenuSquare className="size-5" />
        </SheetTrigger>
        <SheetContent className="max-w-[260px]">
          <SheetHeader className="flex mt-[160px] ml-5 flex-col gap-4 font-semibold text-[15px] p-0">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 8 }} // hover үед бага зэрэг хойш гулгах
                transition={{ delay: index * 0.05 }}
              >
                <SheetTitle
                  className="cursor-pointer flex gap-2 ml-4 items-center"
                  onClick={() => router.push(item.path)}
                >
                  {item.icon}
                  {item.text}
                </SheetTitle>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 8 }}
              transition={{ delay: menuItems.length * 0.05 }}
            >
              <SheetTitle
                className="cursor-pointer flex gap-2 ml-4 items-center"
                onClick={() => logout()}
              >
                <LogOut className="w-5" />
                Гарах
              </SheetTitle>
            </motion.div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
