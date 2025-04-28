"use client";
import { useStaff } from "@/app/_context/StaffContext";
import { StaffType } from "@/server/utils";
import { Star } from "lucide-react";
import Image from "next/image";

export default function StaffsCards() {
  const { staffs } = useStaff();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {staffs?.map((staff: StaffType, index: number) => {
        return (
          <div key={index} className="rounded-lg border-[1px] shadow-sm ">
            <Image
              src={staff?.image}
              alt={""}
              width={600}
              height={600}
              className="w-full h-[594px] rounded-lg object-cover bg-[#eaeaea]"
            />
            <div className="p-4">
              <h2 className="mb-1 text-xl font-bold">{staff.name}</h2>
              <p className="text-sm text-gray-500">{staff.profession}</p>
              <p className="flex items-center gap-1 text-sm font-medium">
                <Star fill="yellow" size={16} className="mt-1" color="yellow" />{" "}
                {staff.rating}
              </p>
              <p>specialties</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
