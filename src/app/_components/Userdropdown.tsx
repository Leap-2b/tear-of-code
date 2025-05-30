"use client";
import { useState, useRef, useEffect } from "react";
import { User, Calendar, Settings, LogOut } from "lucide-react";
import { useUser } from "../_context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";

export default function UserDropdown() {
  const { logout } = useUser();
  const { user } = useUser();
  const userName = user?.username;
  const userEmail = user?.email;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center size-8 rounded-full bg-gray-100 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Avatar className="w-full h-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="UserImage" />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-10 border border-gray-100"
          >
            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
              <div className="font-bold text-xl">{userName}</div>
              <div className="text-gray-500">{userEmail}</div>
            </div>

            <nav className="py-2">
              <ul>
                <li>
                  <a
                    href="/dashboard/profile"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span className="text-lg">Профайл</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/appointments"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg">Уулзалт</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    <span className="text-lg">Тохиргоо</span>
                  </a>
                </li>
                <li onClick={logout}>
                  <a
                    href="/auth"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-lg">Гарах</span>
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}