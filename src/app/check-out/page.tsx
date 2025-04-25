"use client";

import { useSearchParams } from "next/navigation";
import BookingSummary from "./_components/BookingSummary";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { ServiceType } from "../utils/types";
import { LogoutContactInfo } from "./_components/LogoutContactInfo";
import { LogedContactInfo } from "./_components/LogedContactInfo";

export type formDataType = {
  username: string;
  email: string;
  phone: string;
};

export default function CheckOut() {
  const searchParams = useSearchParams();
  const [servicePrice, setServicePrice] = useState<number | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

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

  const logedUserSubmitBooking = async () => {
    try {
      const res = await axios.post("/api/appointment", {
        userId: userId,
        staffId: matchedStaffId,
        date: selectedDate,
        time: selectedTime,
        paid: true,
        paymentMethod: "Qpay",
        serviceIds: matchedServiceId,
        price: servicePrice,
      });

      console.log("res.data", res.data);
      alert(res.data.message);
    } catch (error) {
      console.log("error", error);
      alert("error in submit booking for logged-in user");
    }
  };

  const logoutUserSubmitBooking = async (formData: formDataType) => {
    try {
      const res = await axios.post("/api/appointment", {
        staffId: matchedStaffId,
        date: selectedDate,
        time: selectedTime,
        serviceIds: matchedServiceId,
        paid: true,
        paymentMethod: "Qpay",
        username: formData?.username,
        email: formData?.email,
        phone: formData?.phone,
        price: servicePrice,
      });

      console.log("res.data", res.data);
      alert(res.data.message);
    } catch (error) {
      console.log("error", error);
      alert("error in submit booking");
    }
  };

  useEffect(() => {
    getServicePrice();
    const userId = localStorage.getItem("id");
    if (userId) {
      setUserId(JSON.parse(userId));
    }
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#ffffff] items-center px-4 py-8">
      <h1 className="font-bold text-3xl w-full">Тооцоо хийх</h1>
      <p className="text-gray-500 w-full text-sm mb-8">
        Төлбөрийн дэлгэрэнгүй мэдээллийг оруулан захиалгаа дуусгана уу
      </p>
      <div className="grid grid-cols-1  gap-8 w-full ">
        {userId ? (
          <LogedContactInfo
            userId={userId}
            submitBooking={logedUserSubmitBooking}
          />
        ) : (
          <LogoutContactInfo
            submitBooking={logoutUserSubmitBooking}
            userId={userId}
          />
        )}

        <BookingSummary
          matchedServiceId={matchedServiceId}
          matchedStaffId={matchedStaffId}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
      </div>
    </div>
  );
}
