"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BookingSummary() {
  const [selectedService, setSelectedService] = useState<{
    name: string;
    duration: string;
    date: string | null;
    price: string;
  }>({
    name: "Basic Pedicure",
    duration: "45 min",
    date: "Tuesday, April 15, 2025",
    price: "$35",
  });

  return (
    <div className="max-w-[768px] w-full bg-white rounded-lg overflow-hidden shadow-md flex flex-col mt-4 px-8  py-6">
      <h1 className="font-bold text-xl ml-4 mb-10 mt-5">Booking summary</h1>

      {/* Stylist Info */}
      <div className=" pb-5  flex items-center gap-4">
        <Avatar className="w-12 h-12 ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-semibold text-gray-900">Sarah Johnson</p>
          <p className="text-gray-600">Senior Stylist</p>
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-8 flex flex-col gap-4 ">
        <div className="flex justify-between border-b border-gray-200 pb-6 ">
          <div className="flex flex-col items-start ">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {selectedService.name}
            </h2>

            <span className="text-gray-500 flex items-center gap-1 ">
              <Clock className="w-[17px] h-[17px] " />{" "}
              {selectedService.duration}
            </span>
          </div>
          <span className="font-medium text-gray-900">
            {selectedService.price}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center">
            <Calendar className="w-[17px] h-[17px] text-gray-500 " />{" "}
            <span className="text-[18px] font-[500] ml-1 ">
              {selectedService.date}
            </span>
          </div>

          <div className="flex items-center">
            <span className=" text-gray-500">Select a time</span>
          </div>
        </div>
      </div>

      {/* Total and Checkout */}
      <div className="">
        <div className="flex py-2 border-y border-gray-200 justify-between items-center mb-5">
          <span className="font-bold ">Total</span>
          <span className="font-bold text-gray-900">
            {selectedService.price}
          </span>
        </div>
      </div>
    </div>
  );
}
