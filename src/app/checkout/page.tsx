import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";
import Image from "next/image";

export default function CheckOut() {
  return (
    <div className="w-screen p-6">
      <h1 className="font-bold text-xl mt-6">Checkout</h1>
      <p className="text-gray-300 text-sm">
        Complete your booking by providing payment details
      </p>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md flex flex-col  mt-2 py-6">
        <h1 className="font-bold text-xl ml-4">Contact information</h1>
        <div className="bg-red-200 flex m-auto w-[300px] mt-4">
          <Image src="/sda" alt="" width={50} height={50} />
          <p>username</p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md flex flex-col mt-4 py-6">
        <h1 className="font-bold text-xl ml-4 ">Payment method</h1>
        <p className="flex justify-center items-center">Qpay</p>
        <QrCode className="ml-17" size={300} />
      </div>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md flex flex-col mt-4 py-6">
        <h1 className="font-bold text-xl ml-4">Booking summary</h1>
      </div>
    </div>
  );
}
