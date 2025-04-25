"use client";

import React, { createContext, useEffect, useState } from "react";
import { CategoryType, ServiceType } from "@/app/utils/types";
import axios from "axios";

interface ServiceContextType {
  allService: ServiceType[] | null;
  allCategory: CategoryType[] | null;
  loading: boolean;
}

export const ServiceContext = createContext<ServiceContextType>({
  allService: null,
  allCategory: null,
  loading: true,
});

export const ServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allService, setAllService] = useState<ServiceType[] | null>(null);
  const [allCategory, setAllCategory] = useState<CategoryType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [serviceRes, categoryRes] = await Promise.all([
          axios.get("/api/service"),
          axios.get("/api/category"),
        ]);

        setAllService(serviceRes.data.data);
        setAllCategory(categoryRes.data.allCategory);
      } catch (error) {
        console.error("Өгөгдөл татахад алдаа гарлаа:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ServiceContext.Provider value={{ allService, allCategory, loading }}>
      {children}
    </ServiceContext.Provider>
  );
};
