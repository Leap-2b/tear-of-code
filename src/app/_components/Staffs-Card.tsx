import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function StaffsCards() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        src={"/sdasd"}
        alt={""}
        width={600}
        height={600}
        className="object-cover bg-black"
      />
      <div className="p-4">
        <h1>Name</h1>
        <p>rank</p>
        <p className="flex">
          <Star fill="yellow" size={16} className="mt-1" color="yellow" />
          4.9
        </p>
        <p>specialties</p>
      </div>
      <Button className="w-full bg-black hover:bg-gray-800 text-white">
        Book Appointment
      </Button>
    </div>
  );
}
