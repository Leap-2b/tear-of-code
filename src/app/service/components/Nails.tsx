import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";
import { ServiceType } from "@/server/utils";

interface NailProps {
  service: ServiceType[] | null;
}

export default function Nails({ service }: NailProps) {
  if (!service) {
    return <div>Түр хүлээнэ үү...</div>;
  }

  // "Nails" төрөлтэй үйлчилгээнүүдийг шүүнэ
  const nailServices = service.filter((item) => item.category._id === "Nails");

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <h4 className="flex text-2xl font-bold mx-19 my-7 w-full">
          <Sparkles className="size-5 font-bold my-1.5 mr-2" />
          Хумсны үйлчилгээ
        </h4>

        {nailServices.length > 0 ? (
          nailServices.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-4 w-full sm:w-[calc(50%-14px)]"
            >
              <div className="font-bold">
                {item.name}
                <p className="text-[12px] text-[#6c727f]">{item.description}</p>

                <div className="flex gap-3 justify-between mt-4 ">
                  <p className="flex gap-2 text-[#6c727f]">
                    <Clock className="size-4 mt-1" />
                    {item.duration || "30 мин"}
                  </p>
                  <p className="font-bold">
                    {item.price ? `$${item.price}` : "Үнэ тодорхойгүй"}
                  </p>
                </div>

                <Button className="w-full mt-4">Захиалга хийх</Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center w-full">
            Хумсны үйлчилгээ олдсонгүй.
          </div>
        )}
      </div>
    </div>
  );
}
