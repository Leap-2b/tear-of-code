import { Button } from "@/components/ui/button";
import { ServiceType } from "@/server/utils";
import { Clock, Scissors } from "lucide-react";

interface HairCutProps {
  service: ServiceType[] | null;
}

export default function HairCut({ service }: HairCutProps) {
  if (!service) return <div>Түр хүлээнэ үү...</div>;
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <h4 className="flex text-2xl font-bold mx-19 my-7 ">
          <Scissors className="size-5 font-bold my-1.5" />
          Үсний засалтууд
        </h4>
        <div className="border-1 rounded-2xl p-4 w-full sm:w-[calc(50%-14px)]">
          <div className="font-bold">
            Өдөр тутмын засалт
            <p className="text-[12px] text-[#6c727f]">
              Сонгодог загварлаг засалтууд
            </p>
            <div className="flex gap-3 justify-between mt-4 ">
              <p className="flex gap-2  text-[#6c727f]">
                <Clock className="size-4 mt-1" />
                30 мин
              </p>

              <p className="font-bold">$25</p>
            </div>
            <Button className="w-full mt-4">Захиалга хийх</Button>
          </div>
        </div>
        <div className="border-1 rounded-2xl p-4 w-full gap-5 sm:w-[calc(50%-14px)]">
          <div className="font-bold">
            Үс шингэлэх засалт
            <p className="text-[12px] text-[#6c727f]">
              Загварлаг, уусалттай шингэлэлт
            </p>
            <div className="flex gap-3 justify-between mt-4 ">
              <p className="flex gap-2  text-[#6c727f]">
                <Clock className="size-4 mt-1" />
                45 мин
              </p>

              <p className="font-bold">$35</p>
            </div>
            <Button className="w-full mt-4">Захиалга хийх</Button>
          </div>
        </div>
        <div className="border-1 rounded-2xl p-4 w-full gap-5 sm:w-[calc(50%-14px)]">
          <div className="font-bold">
            Онцлог загвар & Шинэлэг
            <p className="text-[12px] text-[#6c727f]">
              Онцлог загвар бүхий цогц засалт
            </p>
            <div className="flex gap-3 justify-between mt-4 ">
              <p className="flex gap-2  text-[#6c727f]">
                <Clock className="size-4 mt-1" />
                60 мин
              </p>

              <p className="font-bold">$45</p>
            </div>
            <Button className="w-full mt-4">Захиалга хийх</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
