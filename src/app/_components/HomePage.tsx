"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CategoryType } from "@/server/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const [categories, setCategories] = useState<CategoryType[] | null>(null);
  const router = useRouter();

  const getCategories = async () => {
    try {
      const res = await axios.get("/api/category");

      if (res.data.allCategory) {
        setCategories(res.data.allCategory);
      }
    } catch (error) {
      console.log("error", error);
      alert("error in get categories");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full h-full  overflow-scroll flex flex-col gap-[30px] bg-[#ffffff]  ">
      <div className="w-full px-4 flex flex-col gap-[30px] ">
        <Carousel className="w-full ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Card className="cursor-pointer p-0 ">
                    <CardContent className="flex px-0 h-[350px] sm:h-[400px] md:h-[450px] items-center justify-center ">
                      <Image
                        alt=""
                        src={
                          "https://www.styleicons.com.au/wp-content/uploads/2019/08/Best-Salon-Design-1.jpg?w=1300&h=537&crop=1"
                        }
                        height={500}
                        width={1000}
                        className="size-full rounded-lg  "
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="w-full py-4 md:py-6 flex flex-col gap-8 items-center ">
          <h3 className="text-[36px] font-[700] ">Манай үйлчилгээ</h3>

          <div className="max-w-[1400px] w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-6 ">
            {categories?.map((category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push(`/services/${category._id}`)}
                  className="rounded-lg border cursor-pointer bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-lg "
                >
                  <Image
                    alt=""
                    src={category.image}
                    height={500}
                    width={500}
                    className="aspect-video w-full overflow-hidden"
                  />
                  <div className="p-4">
                    <h4 className="text-[16px] font-[700] ">{category.name}</h4>
                    <p className="text-[14px] font-[500] text-[#6C727F] ">
                      Бүх загварт тохирсон мэргэжлийн үс засалт
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full  bg-[#F9FAFB] py-12 md:py-16 flex flex-col items-center gap-[45px] md:px-6 ">
        <h4 className="text-[36px] font-[700] text-center ">
          Апп хэрэглэх алхам
        </h4>
        <div className="grid grid-cols-1  gap-8 md:md:grid-cols-3  ">
          <div className="flex flex-col items-center gap-[12px] ">
            <div className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center ">
              1
            </div>
            <h4 className="text-[16px] font-[700] ">Үйлчилгээ сонгох</h4>
            <p className="text-[14px] font-[500] text-center text-[#6c727f] ">
              Манай мэргэжлийн үйлчилгээтэй танилцана уу
            </p>
          </div>
          <div className="flex flex-col items-center gap-[12px] ">
            <div className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center ">
              2
            </div>
            <h4 className="text-[16px] font-[700] ">Үсчингээ сонго</h4>
            <p className="text-[14px] font-[500] text-center text-[#6c727f] ">
              Дуртай стилист болон цагийн хуваарийг сонго
            </p>
          </div>
          <div className="flex flex-col items-center gap-[12px] ">
            <div className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center ">
              3
            </div>
            <h4 className="text-[16px] font-[700] ">Баталгаажуулж төлнө</h4>
            <p className="text-[14px] font-[500] text-center text-[#6c727f] ">
              Төлбөрийг хялбархан хийж цагаа баталгаажуулаарай
            </p>
          </div>
        </div>
        <div>
          <Link href={"/service"}>
            <Button className="cursor-pointer ">Oдоо захиалаарай</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
