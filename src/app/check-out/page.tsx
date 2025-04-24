"use client";

import { useSearchParams } from "next/navigation";
import BookingSummary from "./_components/BookingSummary";
import { ContactInformation } from "./_components/Contact-information";
import axios from "axios";
import { useEffect, useState } from "react";
import { ServiceType } from "../utils/types";

export type formDataType = {
  username: string;
  email: string;
  phone: string;
};

export default function CheckOut() {
  const searchParams = useSearchParams();
  const [servicePrice, setServicePrice] = useState<number | null>(null);

  const matchedServiceId = searchParams.get("matchedService");
  const matchedStaffId = searchParams.get("matchedStaff");
  const selectedDate = searchParams.get("selectedDate");
  const selectedTime = searchParams.get("selectedTime");

  const getServicePrice = async () => {
    try {
      const res = await axios.get(`/api/service`);
      if (res.data) {
        const service = res.data.data.find(
          (item: ServiceType) => item._id === matchedServiceId
        );
        if (service) {
          setServicePrice(service.price);
        } else {
          console.log("No service found with the given serviceId");
        }
      }
    } catch (error) {
      console.log("error", error);
      alert("error in get service price");
    }
  };

  const submitBooking = async (formData: formDataType) => {
    try {
      const res = await axios.post("/api/appointment", {
        matchedServiceId: matchedServiceId,
        matchedStaffId: matchedStaffId,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
        paid: true,
        username: formData?.username,
        email: formData?.email,
        phone: formData?.phone,
        price: servicePrice,
      });

      console.log("res.data", res.data);
    } catch (error) {
      console.log("error", error);
      alert("error in submit booking");
    }
  };

  useEffect(() => {
    getServicePrice();
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#ffffff] items-center px-4 py-8">
      <h1 className="font-bold text-3xl w-full">Checkout</h1>
      <p className="text-gray-500 w-full text-sm mb-8">
        Complete your booking by providing payment details
      </p>
      <div className="grid grid-cols-1  gap-8 w-full ">
        <ContactInformation submitBooking={submitBooking} />

        <BookingSummary />
      </div>
    </div>
  );
}
