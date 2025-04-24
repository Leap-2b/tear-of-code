import Image from "next/image";
import { User, Calendar, Clock, Ellipsis } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AppointmentsType } from "@/app/utils/types";
export const Upcomming = (data: AppointmentsType) => {
  return (
    <Card>
      <div className="w-full px-5 gap-5 flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={data.image}
            width={47}
            height={47}
            alt=""
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{data.service}</p>
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <User className="w-3 h-3" color="#677489" />
                <p className="text-[#677489] text-[14px] font-semibold">
                  {data.barber}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Calendar className="w-3 h-3" color="#677489" />
                <p className="text-[#677489] text-[14px] font-semibold">
                  {data.date}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Clock className="w-3 h-3" color="#677489" />
                <p className="text-[#677489] text-[14px] font-semibold">
                  {data.time}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2dugaar heseg */}
        <div className="flex justify-center items-center gap-2">
          <div>
            <p className="border-1  border-gray-200 rounded-full h-[22px] flex items-center justify-center text-xs font-semibold px-2 ">
              {data.duration}
            </p>
          </div>
          <div>
            <p className="rounded-full h-[22px] flex items-center justify-center text-xs font-semibold px-2 bg-gray-200">
              {data.price}
            </p>
          </div>
          <div>
            <p className="rounded-full h-[22px] flex items-center justify-center text-[14px] font-semibold px-2 bg-black text-white">
              {data.status}
            </p>
          </div>
          <Ellipsis color="black" />
        </div>
      </div>
    </Card>
  );
};
