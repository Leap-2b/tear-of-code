"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AskedQuest from "./_components/AskedQuest";
import { useEffect, useState } from "react";
import { CategoryType, ServiceType } from "@/server/utils";
import axios from "axios";
import SalonService from "./_components/Service";
import { Loader } from "../(auth)/auth/_compoments/Loader";

export default function Service() {
  const [service, setService] = useState<ServiceType[] | null>(null);
  const [categories, setCategories] = useState<CategoryType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllService = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/service");
        setService(data.data);
      } catch (err: any) {
        console.error("Алдаа гарлаа:", err);
      } finally {
        setLoading(false);
      }
    };

    const getAllCategories = async () => {
      try {
        const { data } = await axios.get("/api/category");

        setCategories(data.allCategory);
      } catch (error) {}
    };
    getAllCategories();
    getAllService();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full  h-full px-[16px] bg-white pt-4">
      <Tabs defaultValue="all">
        <TabsList className="px-4 py-1 bg-blue-50 w-full">
          <TabsTrigger value="all" className=" cursor-pointer ">
            Бүх үйлчилгээ
          </TabsTrigger>
          {categories?.map((category) => {
            return (
              <TabsTrigger
                className=" cursor-pointer "
                key={category._id}
                value={category._id}
              >
                {category.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="all">
          {categories?.map((category) => {
            return (
              <SalonService
                key={category._id}
                service={service}
                category={category}
              />
            );
          })}
        </TabsContent>

        {categories?.map((category) => {
          return (
            <TabsContent key={category._id} value={category._id}>
              <SalonService service={service} category={category} />
            </TabsContent>
          );
        })}
      </Tabs>
      <AskedQuest />
    </div>
  );
}
