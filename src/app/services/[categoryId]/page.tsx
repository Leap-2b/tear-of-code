"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { ServiceType } from "@/server/utils";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const params = useParams();
  const categoryId = Array.isArray(params.categoryId)
    ? params.categoryId[0]
    : params.categoryId;

  const [allService, setAllService] = useState<ServiceType[] | null>(null);

  const getAllService = async () => {
    try {
      const res = await axios.get("/api/service");

      if (res.data.data) {
        setAllService(res.data.data);
      }
    } catch (error) {
      console.log("error", error);
      alert("error in get all service");
    }
  };

  useEffect(() => {
    getAllService();
  }, []);

  const matchedServices = allService?.filter(
    (service) => service.category._id.toString() === categoryId
  );

  console.log("matchedServices", matchedServices);

  const matchedCategoryName = matchedServices?.[0]?.category?.name;

  if (!categoryId) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-[#ffffff] w-full h-full pt-15 pb-10 px-4 ">
      <h1 className="text-[30px] font-[700] ">{matchedCategoryName}</h1>
      <p className="text-[16px] text-gray-500 ">
        Professional haircuts for all styles and preferences
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 ">
        {allService?.map((service, index) => {
          if (service.category._id.toString() !== categoryId) {
            return null;
          }
          return (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden w-full "
            >
              <div className="aspect-video w-full overflow-hidden ">
                <Image
                  alt=""
                  src={
                    "https://blog.goldsupplier.com/wp-content/uploads/2024/10/second-row-crochet-2024-10-25T154110.321.png"
                  }
                  className="h-full w-full object-cover "
                  height={500}
                  width={500}
                />
              </div>
              <div className="p-4 ">
                <h3 className="mb-1 text-xl font-bold">{service.name}</h3>
                <p className="mb-4 text-sm text-gray-500">
                  {service.description}
                </p>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4 " />
                    <span>{service.duration} минут </span>
                  </div>

                  <div className="text-lg font-bold">₮{service.price}</div>
                </div>
              </div>
              <div className=" p-4 pt-0 w-full ">
                <Link href={`/staffs/${service._id}`}>
                  <Button className="w-full cursor-pointer ">
                    Үйлчилгээгээ сонгоно уу
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
