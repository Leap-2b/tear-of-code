import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";
import Image from "next/image";
import MiniProfile from "../_components/Mini-profile";
import Payment from "../_components/Payment";
import BookingSummary from "../_components/Booking-summary";

export default function CheckOut() {
  return (
    <div className="w-screen p-6">
      <h1 className="font-bold text-xl mt-6">Checkout</h1>
      <p className="text-gray-300 text-sm">
        Complete your booking by providing payment details
      </p>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md flex flex-col  mt-2 py-6">
        <h1 className="font-bold text-xl ml-4">Contact information</h1>
        <MiniProfile />
      </div>
      <Payment />
      <BookingSummary />
    </div>
  );
}
