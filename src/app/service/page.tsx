"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AskedQuest from "./_components/AskedQuest";
// import Nails from "./components/Nails";
import { useEffect, useState } from "react";
import { CategoryType, ServiceType } from "@/server/utils";
import axios from "axios";
import SalonService from "./_components/Service";

export default function Service() {
  const [service, setService] = useState<ServiceType[] | null>(null);
  const [categories, setCategories] = useState<CategoryType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getAllService = async () => {
      try {
        const { data } = await axios.get("/api/service");

        // console.log("SERVICES", data);
        setService(data.data);
      } catch (err: any) {
        console.error("Алдаа гарлаа:", err);
        setError("Үйлчилгээнүүдийг аяааллаж чадсангүй.");
      } finally {
        setLoading(false);
      }
    };

    const getAllCategories = async () => {
      try {
        const { data } = await axios.get("/api/category");
        // console.log("Category", data);
        setCategories(data.allCategory);
      } catch (error) {
        // console.log(error);
      }
    };
    getAllCategories();
    getAllService();
  }, []);
  return (
    <div className="w-full  h-full px-[16px] bg-white pt-4">
      <Tabs defaultValue="all">
        <TabsList className="px-4 py-1 bg-blue-50 w-full">
          <TabsTrigger value="all">Бүх үйлчилгээ</TabsTrigger>
          {categories?.map((category) => {
            return (
              <TabsTrigger key={category._id} value={category._id}>
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

        {/* <TabsContent value="nails">
          <Nails service={service} />
        </TabsContent> */}
      </Tabs>
      <AskedQuest />
    </div>
  );
}
