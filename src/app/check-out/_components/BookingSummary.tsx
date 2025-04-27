import { ServiceType, StaffType } from "@/app/utils/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookingSummary({
  matchedStaffId,
  matchedServiceId,
  selectedTime,
  selectedDate,
}: {
  matchedStaffId: string | null;
  matchedServiceId: string | null;
  selectedTime: string | null;
  selectedDate: string | null;
}) {
  const [staff, setStaff] = useState<StaffType | null>(null);
  const [service, setService] = useState<ServiceType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (matchedStaffId) {
          const staffResponse = await axios.get(
            `/api/staff?id=${matchedStaffId}`
          );
          setStaff(staffResponse.data.staff);
        }

        if (matchedServiceId) {
          const serviceResponse = await axios.get(`/api/service`);
          if (serviceResponse.data) {
            const service = serviceResponse?.data?.data.find(
              (item: { _id: string }) => item._id === matchedServiceId
            );
            setService(service);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [matchedStaffId, matchedServiceId]);

  return (
    <div className="w-full h-[430px] rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h2 className="mb-4 text-xl font-bold">Захиалгын хураангуй</h2>

        <div className="mb-4 flex items-center gap-3 ">
          <Avatar>
            <AvatarImage src={staff?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{staff?.name}</h3>
            <p className="text-sm text-gray-500">{staff?.profession}</p>
          </div>
        </div>
        <div className="mb-4 space-y-2 border-b pb-4 ">
          <div className="flex justify-between ">
            <span className="font-medium">{service?.name}</span>
            <span>{service?.price}₮</span>
          </div>
          <div className=" flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{service?.duration} мин</span>
          </div>
        </div>
        <div className=" mb-6 space-y-2">
          <div className="flex items-center gap-2 ">
            <Calendar className="h-4 w-4 text-gray-500 " />
            <span>{selectedDate}</span>
          </div>
          <div className="flex items-center gap-2 ">
            <Clock className="h-4 w-4 text-gray-500 " />
            <span>{selectedTime}</span>
          </div>
        </div>
        <div className="space-y-2 border-t pt-4 ">
          <div className="flex justify-between  ">
            <span>Үйлчилгээний хөлс</span>
            <span>{service?.price}₮</span>
          </div>
          <div className="flex justify-between border-t pt-2 text-lg font-bold ">
            <span>Нийт</span>
            <span>{service?.price}₮</span>
          </div>
        </div>
      </div>
    </div>
  );
}
