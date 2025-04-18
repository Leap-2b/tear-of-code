import Image from "next/image";
import React from "react";

export const History = () => {
  return (
    <section className="py-16  w-full">
      <div className=" px-4 ">
        <div className="grid gap-12 ">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Salon аялал</h2>
            <p className="mb-6 text-gray-600">
              Мастер үсчин Жеймс Вилсон 2010 онд үүсгэн байгуулсан StyleCut нь
              жижиг, нэг сандалтай үйл ажиллагаа явуулж эхэлсэн бөгөөд энгийн
              зорилго нь хүн бүрийг үнэ цэнэтэй гэж үздэг тав тухтай орчинд үс
              засалт хийх онцгой үйлчилгээ үзүүлэх явдал юм.
            </p>
            <p className="mb-6 text-gray-600">
              Олон жилийн туршид бид чадварлаг мэргэжилтнүүдийн багтай, иж бүрэн
              үйлчилгээтэй үсчин гоо сайхны газар болтлоо өссөн ч бидний үндсэн
              үнэт зүйлс өөрчлөгдөөгүй хэвээр байна. Гайхалтай үс засалт нь
              зөвхөн үйлчилгээ биш, өөртөө итгэх итгэлийг нэмэгдүүлж, өөрийгөө
              хамгийн сайнаар харуулахад тань туслах туршлага гэдэгт бид
              итгэдэг.
            </p>
            <p className="text-gray-600 ">
              Өнөөдөр Salon нь бүх нас, гарал үүсэлтэй үйлчлүүлэгчдэдээ
              анхнаасаа л биднийг тодорхойлсон чанар, үйлчилгээний төлөө
              үнэнчээр үйлчилж, олон нийтийн тулгын чулуу болсондоо бахархаж
              байна.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              alt=""
              src={
                "https://kzmjvhv9uz0z4qf9iypk.lite.vusercontent.net/placeholder.svg?height=400&width=600"
              }
              height={400}
              width={500}
              className="absolute h-full w-full inset-0 bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
