import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Scissors, Sparkles } from "lucide-react";

export default function Service() {
  return (
    <div className="max-w-[480px] w-full px-[16px] bg-white">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="px-4 bg-blue-50 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="haircuts">Haircuts</TabsTrigger>
          <TabsTrigger value="nails">Nails</TabsTrigger>
        </TabsList>

        <TabsContent value="all"></TabsContent>
        <TabsContent value="haircuts">
          <div className="flex  flex-col gap-3">
            <h4 className="flex text-[20px] font-bold">
              {" "}
              <Scissors className="size-5 font-bold my-1.5" />
              Haircuts
            </h4>
            <div className="border-1 rounded-2xl p-4 w-full gap-5">
              <TabsContent value="haircuts" className="font-bold">
                Regular HairCut
                <p className="text-[12px] text-[#6c727f]">
                  Classic haircut with styling
                </p>
                <div className="flex gap-3 justify-between mt-4 ">
                  <p className="flex gap-2  text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    30min
                  </p>

                  <p className="font-bold">$25</p>
                </div>
                <Button className="w-full mt-4">Book Now</Button>
              </TabsContent>
            </div>
            <div className="border-1 rounded-2xl p-4 w-full gap-5">
              <TabsContent value="haircuts" className="font-bold">
                Fade Haircut
                <p className="text-[12px] text-[#6c727f]">
                  Modern fade with precision styling
                </p>
                <div className="flex gap-3 justify-between mt-4 ">
                  <p className="flex gap-2  text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    45min
                  </p>

                  <p className="font-bold">$35</p>
                </div>
                <Button className="w-full mt-4">Book Now</Button>
              </TabsContent>
            </div>
            <div className="border-1 rounded-2xl p-4 w-full gap-5">
              <TabsContent value="haircuts" className="font-bold">
                Premium cut & Style
                <p className="text-[12px] text-[#6c727f]">
                  Comprehensive cut with premium styling
                </p>
                <div className="flex gap-3 justify-between mt-4 ">
                  <p className="flex gap-2  text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    60min
                  </p>

                  <p className="font-bold">$45</p>
                </div>
                <Button className="w-full mt-4">Book Now</Button>
              </TabsContent>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="nails">
          <div className="flex  flex-col gap-3">
            <h4 className="flex text-[20px] font-bold">
              {" "}
              <Sparkles className="size-5 font-bold my-1.5" />
              Nail Services
            </h4>
            <div className="border-1 rounded-2xl p-4 w-full gap-5">
              <TabsContent value="nails" className="font-bold">
                Basic Manicure
                <p className="text-[12px] text-[#6c727f]">
                  Nail shapping cuticle care, and polish
                </p>
                <div className="flex gap-3 justify-between mt-4 ">
                  <p className="flex gap-2  text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    30min
                  </p>

                  <p className="font-bold">$25</p>
                </div>
                <Button className="w-full mt-4">Book Now</Button>
              </TabsContent>
            </div>
            <div className="border-1 rounded-2xl p-4 w-full gap-5">
              <TabsContent value="nails" className="font-bold">
                Basic Pedicure
                <p className="text-[12px] text-[#6c727f]">
                  foot soak, exfoilation, nail care, and polish
                </p>
                <div className="flex gap-3 justify-between mt-4 ">
                  <p className="flex gap-2  text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    45min
                  </p>

                  <p className="font-bold">$35</p>
                </div>
                <Button className="w-full mt-4">Book Now</Button>
              </TabsContent>
            </div>
            <div className="border-1 rounded-2xl p-4 w-full gap-5">
              <TabsContent value="nails" className="font-bold">
                Premium cut & Style
                <p className="text-[12px] text-[#6c727f]">
                  Comprehensive polish with premium trend styling
                </p>
                <div className="flex gap-3 justify-between mt-4 ">
                  <p className="flex gap-2  text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    60min
                  </p>

                  <p className="font-bold">$45</p>
                </div>
                <Button className="w-full mt-4">Book Now</Button>
              </TabsContent>
            </div>
          </div>
          <div></div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
