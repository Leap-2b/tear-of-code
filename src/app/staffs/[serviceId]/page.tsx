"use client";

import { useAppointment } from "@/app/_context/Appointment";
import { Button } from "@/components/ui/button";
import { ServiceType, StaffType } from "@/server/utils";
import axios from "axios";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ServiceStaffs = () => {
  const params = useParams();
  const serviceId = Array.isArray(params.serviceId)
    ? params.serviceId[0]
    : params.serviceId;

  const [allStaff, setAllStaff] = useState<StaffType[] | null>(null);
  const router = useRouter();
  const { setServiceStaffId, setServiceId } = useAppointment()!;

  const getServiceStaffs = async () => {
    try {
      const res = await axios.get(`/api/staff`);

      setAllStaff(res.data.allStaff);
    } catch (error) {
      console.log("error", error);
      alert("error in get service staffs");
    }
  };

  console.log("allStaff", allStaff);

  useEffect(() => {
    getServiceStaffs();
  }, []);

  const serviceStaffs = allStaff?.filter(
    (staff) =>
      Array.isArray(staff.services) &&
      staff.services.find(
        (service: ServiceType) => service._id.toString() === serviceId
      )
  );

  console.log("serviceStaffs", serviceStaffs);

  const handleClick = (id: string) => {
    setServiceStaffId(id);
    setServiceId(serviceId ?? "");
    router.push(`/booking/`);
  };

  return (
    <div className="bg-[#ffffff] w-full h-full pt-15 pb-10 px-4  ">
      <h1 className="text-[30px] font-bold ">Стилистээ сонгоно уу</h1>
      <p className="text-gray-500">
        Манай туршлагатай мэргэжилтнүүдээс бүрдсэн багаас сонгон үйлчилгээгээ
        аваарай
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8 ">
        {serviceStaffs?.map((staff, index) => {
          return (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            >
              <div className=" aspect-[3/4] w-full overflow-hidden">
                <Image
                  alt=""
                  src={""}
                  height={500}
                  width={500}
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-xl font-bold">{staff.name}</h3>
                <p className="text-sm text-gray-500">{staff.profession}</p>
                <div className="mt-2 flex items-center gap-1">
                  <Star className="w-4 h-4  text-yellow-500" />
                  <span className="text-sm font-medium">{staff.rating}</span>
                </div>
                <div className="mt-3">
                  <p className="text-xs font-medium text-gray-500">МЭРГЭЖИЛ</p>
                  <div className="mt-1 flex flex-wrap gap-2 items-center">
                    {staff.services.map((service: ServiceType) => {
                      return (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-[500] ">
                          {service.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 pt-0">
                <Button
                  onClick={() => handleClick(staff._id.toString())}
                  className="w-full cursor-pointer "
                >
                  Захиалга өгөх
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceStaffs;
