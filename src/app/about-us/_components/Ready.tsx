import { Button } from "@/components/ui/button";
import React from "react";

export const Ready = () => {
  return (
    <section className="py-16 w-full ">
      <div className=" px-4 ">
        <div className="rounded-lg bg-gradient-to-r from-gray-900 to-black p-8 text-center text-white  ">
          <h2 className="mb-4 text-3xl font-bold">
            Шинэхэн харагдахад бэлэн үү?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-200">
            StyleCut-ийн ялгааг өнөөдөр мэдрээрэй. Манай мэргэжлийн баг хамт
            олон танд хамгийн сайхан харагдахад туслахад бэлэн байна.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant={"secondary"}>Манай үйлчилгээг үзээрэй</Button>
            <Button variant={"secondary"}>Захиалга</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
