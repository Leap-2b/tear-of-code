import { UserCircle } from "lucide-react";

export default function MiniProfile() {
  return (
    <div className=" flex m-auto w-[300px] mt-4 gap-4">
      <UserCircle />
      <p>/username/</p>
    </div>
  );
}
