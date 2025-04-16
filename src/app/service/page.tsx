import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Service() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="haircuts">Haircuts</TabsTrigger>
          <TabsTrigger value="nails">Nails</TabsTrigger>
        </TabsList>
        <div>
          <TabsContent value="haircuts">
            Regular HairCut
            <p className="text-[12px]">Classic haircut with styling</p>
          </TabsContent>
        </div>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
