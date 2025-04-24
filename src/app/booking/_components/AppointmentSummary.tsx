"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ServiceType, StaffType } from "@/server/utils";
import axios from "axios";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type SelectedServiceDate = {
  date: string | null;
  time?: string;
};

const AppointmentSummary = ({
  selectedServiceDate,
}: {
  selectedServiceDate: SelectedServiceDate;
}) => {
  const [matchedService, setMatchedService] = useState<ServiceType | null>(
    null
  );
  const [matchedStaff, setMatchedStaff] = useState<StaffType | null>(null);

  const searchParams = useSearchParams();

  const serviceId = searchParams.get("serviceId");
  const serviceStaffId = searchParams.get("serviceStaffId");

  const getService = async () => {
    try {
      const res = await axios.get(`/api/service`);
      if (res.data) {
        const service = res.data.data.find(
          (item: ServiceType) => item._id === serviceId
        );
        if (service) {
          setMatchedService(service);
        } else {
          console.log("No service found with the given serviceId");
        }
      }
    } catch (error) {
      console.log("error", error);
      alert("error in get service");
    }
  };

  const getServiceStaff = async (id: string) => {
    try {
      const res = await axios.get(`/api/staff?id=${id}`);
      if (res.data) {
        setMatchedStaff(res.data.staff);
      }
    } catch (error) {
      console.log("error", error);
      alert("error in get service staff");
    }
  };

  useEffect(() => {
    if (serviceId) {
      getService();
    }
    if (serviceStaffId) {
      getServiceStaff(serviceStaffId);
    }
  }, [serviceId, serviceStaffId]);

  return (
    <div className=" mx-auto p-6 bg-white border-[#e2e8f0] border rounded-[10px] shadow-sm">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Томилгооны хураангуй
      </h1>

      {/* Stylist Info */}
      <div className=" pb-5  flex items-center gap-4">
        <Avatar className="w-12 h-12 ">
          <AvatarImage src={matchedStaff?.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {matchedStaff?.name}
          </p>
          <p className="text-gray-600">{matchedStaff?.profession}</p>
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-8 flex flex-col gap-4 ">
        <div className="flex justify-between border-b border-gray-200 pb-6 ">
          <div className="flex flex-col items-start ">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {matchedService?.name}
            </h2>

            <span className="text-gray-500 flex items-center gap-1 ">
              <Clock className="w-[17px] h-[17px] " />{" "}
              {matchedService?.duration} мин
            </span>
          </div>
          <span className="font-medium text-gray-900">
            {matchedService?.price}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center">
            <Calendar className="w-[17px] h-[17px] text-gray-500 " />{" "}
            <span className="text-[18px] font-[500] ml-1 ">
              {selectedServiceDate.date}
            </span>
          </div>

          <div className="flex items-center">
            <Clock className="w-[17px] h-[17px] text-gray-500 mr-1" />{" "}
            <span>
              {selectedServiceDate.time
                ? selectedServiceDate.time
                : "Цагaa сонгоно уу"}
            </span>
          </div>
        </div>
      </div>

      {/* Total and Checkout */}
      <div className="">
        <div className="flex py-2 border-y border-gray-200 justify-between items-center mb-5">
          <span className="font-bold ">Нийт</span>
          <span className="font-bold text-gray-900">
            {matchedService?.price}
          </span>
        </div>

        <Link
          href={`/check-out?matchedService=${matchedService?._id}&matchedStaff=${matchedStaff?._id}&selectedDate=${selectedServiceDate.date}&selectedTime=${selectedServiceDate.time}`}
        >
          <Button
            disabled={!selectedServiceDate.time}
            className="w-full py-3 px-4 cursor-pointer  font-medium rounded-lg transition duration-200 flex items-center justify-center gap-3 "
          >
            Төлбөр тооцоог үргэлжлүүлнэ үү <ArrowRight className="size-5 " />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentSummary;
