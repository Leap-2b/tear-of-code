"use client";

import React, { useContext } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceContext } from "@/app/_context/ServiceContext"; // <-- энэ бол шинэ контекст

const ServicesPage = () => {
  const params = useParams();
  const categoryId = Array.isArray(params.categoryId)
    ? params.categoryId[0]
    : params.categoryId;

  const { allService } = useContext(ServiceContext); // <-- API биш, контекстоос дата авч байна

  const matchedServices = allService?.filter(
    (service) => service.category._id.toString() === categoryId
  );

  const matchedCategoryName = matchedServices?.[0]?.category?.name;

  if (!categoryId) {
    return <div>Ачааллаж байна...</div>;
  }

  return (
    <div className="bg-[#ffffff] w-full h-full pt-15 pb-10 px-4 ">
      <h1 className="text-[30px] font-[700] ">{matchedCategoryName}</h1>
      <p className="text-[16px] text-gray-500 ">
        Бүх төрлийн үс засалт мэргэжлийн түвшинд
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 ">
        {matchedServices?.map((service, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden w-full "
          >
            <div className="aspect-video w-full overflow-hidden ">
              <Image
                alt={service.name}
                src={service.image}
                className="h-full w-full object-cover "
                height={500}
                width={500}
              />
            </div>
            <div className="p-4 ">
              <h3 className="mb-1 text-xl font-bold">{service.name}</h3>
              <p className="mb-4 text-sm text-gray-500 line-clamp-3 min-h-[4.5em]">
                {service.description}
              </p>
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4 " />
                  <span>{service.duration} минут</span>
                </div>
                <div className="text-lg font-bold">₮{service.price}</div>
              </div>
            </div>
            <div className="p-4 pt-0 w-full ">
              <Link href={`/staffs/${service._id}`}>
                <Button className="w-full cursor-pointer ">
                  Үйлчилгээгээ сонгоно уу
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
