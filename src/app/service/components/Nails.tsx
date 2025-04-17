import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";

export default function Nails() {
  return (
    <div>
      <div className="flex  flex-col gap-3">
        <h4 className="flex text-2xl font-bold mx-19 my-7 ">
          <Sparkles className="size-5 font-bold my-1.5" />
          Хумсны үйлчилгээ
        </h4>
        <div className="border-1 rounded-2xl p-4 w-full gap-5">
          <div className="font-bold">
            Үндсэн будалтууд
            <p className="text-[12px] text-[#6c727f]">
              Хумс хэлбэржүүлэн засаж, өнгөлөн будах
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
        <div className="border-1 rounded-2xl p-4 w-full gap-5">
          <div className="font-bold">
            Үндсэн педикюр
            <p className="text-[12px] text-[#6c727f]">
              хөлийг ариутгах, гуужуулах, хумс арчлах, өнгөлөн будах
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
        <div className="border-1 rounded-2xl p-4 w-full gap-5">
          <div className="font-bold">
            Тансаг будалт & Загварлаг
            <p className="text-[12px] text-[#6c727f]">
              хумсны ариутгал, арчилгаа, хэлбэр оруулалт, гоёлын будалт
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
