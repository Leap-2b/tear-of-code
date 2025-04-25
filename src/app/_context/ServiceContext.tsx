"use client";

import React, { createContext, useEffect, useState } from "react";
import { ServiceType } from "@/server/utils";
import axios from "axios";

interface ServiceContextType {
  allService: ServiceType[] | null;
}

export const ServiceContext = createContext<ServiceContextType>({
  allService: null,
});

export const ServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allService, setAllService] = useState<ServiceType[] | null>(null);

  const fetchServices = async () => {
    try {
      const res = await axios.get("/api/service");
      setAllService(res.data.data);
    } catch (error) {
      console.error("Алдаа гарлаа", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServiceContext.Provider value={{ allService }}>
      {children}
    </ServiceContext.Provider>
  );
};
