import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AskedQuest from "./components/AskedQuest";
import Nails from "./components/Nails";
import HairCut from "./components/HairCut";
import All from "./components/All";

export default function Service() {
  return (
    <div className="w-full  h-full px-[16px] bg-white pt-4">
      <Tabs defaultValue="all">
        <TabsList className="px-4 py-1 bg-blue-50 w-full">
          <TabsTrigger value="all">Бүх үйлчилгээ</TabsTrigger>
          <TabsTrigger value="haircuts">Үсний засалтууд</TabsTrigger>
          <TabsTrigger value="nails">Хумсны будалтууд</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <All />
        </TabsContent>

        <TabsContent value="haircuts">
          <HairCut />
        </TabsContent>

        <TabsContent value="nails">
          <Nails />
        </TabsContent>
      </Tabs>
      <AskedQuest />
    </div>
  );
}
