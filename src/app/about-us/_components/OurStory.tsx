import Image from "next/image";
import React from "react";

export const OurStory = () => {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 opacity-30">
        <Image
          alt=""
          src={
            "https://kzmjvhv9uz0z4qf9iypk.lite.vusercontent.net/placeholder.svg?height=600&width=1200"
          }
          height={500}
          width={500}
          className="absolute h-full w-full inset-0 bg-transparent "
        />
      </div>
      <div className=" relative z-10 px-4  ">
        <div className="mx-auto max-w-3xl text-center ">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Бидний түүх</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200 ">
            2010 оноос хойш үс засалт хийх онцгой туршлагаар дамжуулан өөртөө
            итгэх итгэлийг бий болгож байна
          </p>
        </div>
      </div>
    </section>
  );
};
