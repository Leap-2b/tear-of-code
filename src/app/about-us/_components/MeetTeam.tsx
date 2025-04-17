import Image from "next/image";
import React from "react";

export const MeetTeam = () => {
  return (
    <section className="py-16  w-full">
      <div className=" px-4 ">
        <div className="mx-auto max-w-3xl text-center ">
          <h2 className="mb-4 text-3xl text-center ">
            Манай мэргэжлийн багтай танилцана уу
          </h2>
          <p className="mb-12 text-gray-600 ">
            Манай чадварлаг мэргэжилтнүүд олон жилийн туршлага, хүсэл тэмүүллийг
            үйлчилгээ болгонд авчирдаг
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 ">
          <div className="group relative overflow-hidden rounded-lg ">
            <div className="aspect-[3/4] w-full overflow-hidden ">
              <Image
                alt=""
                src={
                  "https://kzmjvhv9uz0z4qf9iypk.lite.vusercontent.net/placeholder.svg?height=400&width=300"
                }
                height={400}
                width={300}
                className="bg-transparent h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 ">
              <h3 className="mb-1 text-xl font-bold">John Smith</h3>
              <p className="mb-2 text-sm text-gray-500">
                Master Barber & Founder
              </p>
              <p className="text-sm text-gray-600 ">
                With over 15 years of experience, John specializes in classic
                cuts and precision fades.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg ">
            <div className="aspect-[3/4] w-full overflow-hidden ">
              <Image
                alt=""
                src={
                  "https://kzmjvhv9uz0z4qf9iypk.lite.vusercontent.net/placeholder.svg?height=400&width=300"
                }
                height={400}
                width={300}
                className="bg-transparent h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 ">
              <h3 className="mb-1 text-xl font-bold">Sarah Johnson</h3>
              <p className="mb-2 text-sm text-gray-500">Senior Stylist</p>
              <p className="text-sm text-gray-600 ">
                Sarah brings creativity and precision to every cut, specializing
                in modern styles and color treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
