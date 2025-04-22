"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AskedQuest from "./components/AskedQuest";
import Nails from "./components/Nails";
import HairCut from "./components/HairCut";
import All from "./components/All";
import { useEffect, useState } from "react";
import { ServiceType } from "@/server/utils";
import axios from "axios";

export default function Service() {
  const [service, setService] = useState<ServiceType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getAllService = async () => {
      try {
        const { data } = await axios.get("/api/service");

        console.log("SERVICES", data);
        setService(data.data);
      } catch (err: any) {
        console.error("Алдаа гарлаа:", err);
        setError("Үйлчилгээнүүдийг аяааллаж чадсангүй.");
      } finally {
        setLoading(false);
      }
    };
    getAllService();
  }, []);
  return (
    <div className="w-full  h-full px-[16px] bg-white pt-4">
      <Tabs defaultValue="all">
        <TabsList className="px-4 py-1 bg-blue-50 w-full">
          <TabsTrigger value="all">Бүх үйлчилгээ</TabsTrigger>
          <TabsTrigger value="haircuts">Үсний засалтууд</TabsTrigger>
          <TabsTrigger value="nails">Хумсны будалт </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <All service={service} />
        </TabsContent>

        <TabsContent value="haircuts">
          <HairCut service={service} />
        </TabsContent>

        <TabsContent value="nails">
          <Nails service={service} />
        </TabsContent>
      </Tabs>
      <AskedQuest />
    </div>
  );
}
