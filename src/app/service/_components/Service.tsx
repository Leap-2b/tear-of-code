import { CategoryType, ServiceType } from "@/app/utils/types";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";

interface HairCutProps {
  service: ServiceType[] | null;
  category: CategoryType | null;
}

export default function SalonService({ service, category }: HairCutProps) {
  if (!service) return <div>Түр хүлээнэ үү...</div>;

  const myService = service.filter(
    (item) => item.category._id === category?._id
  );

  return (
    <div>
      <h4 className="flex text-2xl font-bold my-7">{category?.name}</h4>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {myService.length > 0 ? (
          myService.map((item, index) => (
            <div key={index} className="border rounded-2xl p-4 w-full">
              <div className="font-bold">
                {item.name}
                <p className="text-[12px] text-[#6c727f]">{item.description}</p>
                <div className="flex gap-3 justify-between mt-4">
                  <p className="flex gap-2 text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    {item.duration ? `${item.duration} мин` : "30 мин"}
                  </p>
                  <p className="font-bold">{item.price}₮</p>
                </div>
                <Link href={`/staffs/${item._id}`}>
                  <Button className="w-full mt-4 cursor-pointer">
                    Захиалга хийх
                  </Button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>Үйлчилгээ олдсонгүй.</div>
        )}
      </div>
    </div>
  );
}
