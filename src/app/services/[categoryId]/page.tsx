"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { ServiceType } from "@/server/utils";

const ServicesPage = () => {
  const params = useParams();
  const categoryId = params.categoryId;

  const [allService, setAllService] = useState<ServiceType[] | null>(null);

  console.log("allService ", allService);

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

  if (!categoryId) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {allService?.map((service) => {
        if (service.category !== categoryId) {
          return null;
        }
        return <div>{service.name}</div>;
      })}
    </div>
  );
};

export default ServicesPage;
