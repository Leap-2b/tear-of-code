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
              Founded in 2010 by master barber James Wilson, StyleCut began as a
              small, one-chair operation with a simple mission: to provide
              exceptional grooming services in a welcoming environment where
              everyone feels valued.
            </p>
            <p className="mb-6 text-gray-600">
              Over the years, we've grown into a full-service barbershop with a
              team of skilled professionals, but our core values remain
              unchanged. We believe that a great haircut is more than just a
              service—it's an experience that boosts confidence and helps you
              put your best self forward.{" "}
            </p>
            <p className="text-gray-600 ">
              Today, StyleCut is proud to be a cornerstone of the community,
              serving clients of all ages and backgrounds with the same
              dedication to quality and service that has defined us from day
              one.
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
