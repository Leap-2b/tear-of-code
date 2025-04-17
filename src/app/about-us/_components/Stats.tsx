import React from "react";

export const Stats = () => {
  return (
    <section className="py-16  w-full">
      <div className=" px-4 ">
        <div className="grid gap-8 rounded-lg bg-black p-8 text-white ">
          <div className="text-center ">
            <p className="text-4xl font-bold ">12+</p>
            <p className="mt-2">Бизнес эрхэлсэн жилүүд</p>
          </div>
          <div className="text-center ">
            <p className="text-4xl font-bold ">15k+</p>
            <p className="mt-2">Аз жаргалтай үйлчлүүлэгчид</p>
          </div>
          <div className="text-center ">
            <p className="text-4xl font-bold ">8</p>
            <p className="mt-2">Мэргэшсэн стилистууд</p>
          </div>
          <div className="text-center ">
            <p className="text-4xl font-bold ">20+</p>
            <p className="mt-2">Үйлчилгээний сонголтууд</p>
          </div>
        </div>
      </div>
    </section>
  );
};
