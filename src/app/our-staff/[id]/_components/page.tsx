"use client";

import { useStaff } from "@/app/_context/StaffContext";
import { MainContent } from "./MainContent";
import { ProfileSidebar } from "./ProfileSidebar";
import { StaffHeader } from "./StaffHeader";
import { StaffNotFound } from "./StaffNotFound";

interface PageProps {
  params: { id: string }; // ❗ No Promise
}

export default function BarberProfilePage(props: PageProps) {
  const { id } = props.params; // ❗ No use()
  const { staffs } = useStaff();
  const staff = staffs?.find((staff) => staff._id === id);

  if (!staff) {
    return <StaffNotFound />;
  }

  return (
    <div className="max-w-[1400px] m-auto px-4 py-8 md:px-6 md:py-12">
      <StaffHeader staff={staff} />
      <div className="grid gap-8 md:grid-cols-3">
        <ProfileSidebar staff={staff} />
        <div className="md:col-span-2">
          <MainContent staff={staff} />
        </div>
      </div>
    </div>
  );
}
