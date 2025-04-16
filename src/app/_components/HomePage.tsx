import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomePage = () => {
  return (
    <div className="max-w-[480px] w-full h-screen overflow-scroll flex flex-col gap-[30px] bg-[#e0e0e0]  ">
      Home
      <div className="w-full px-4 flex flex-col gap-[30px] ">
        <Carousel className="w-full ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="cursor-pointer p-0 ">
                    <CardContent className="flex  h-[350px] items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="w-full flex flex-col gap-5 items-center ">
          <h3 className="text-[36px] font-[700] ">Our services</h3>
          <div className="flex flex-col gap-[20px] w-full ">
            <div className="w-full border-black border-[1px] cursor-pointer hover:opacity-80 overflow-hidden rounded-[10px]  ">
              <Image
                alt=""
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26y2JHp0GYfv2fqEQNVdWZh3wwwj-7qC96w&s"
                }
                height={500}
                width={500}
                className="w-full h-[250px] center bg-gray-200 "
              />
              <div className="bg-background w-full flex flex-col gap-1 p-4 ">
                <h4 className="text-[16px] font-[700] ">Haircut</h4>
                <p className="text-[14px] font-[500] text-[#6C727F] ">
                  Professional haircuts for all styles
                </p>
              </div>
            </div>
            <div className="w-full border-black border-[1px] cursor-pointer hover:opacity-80 overflow-hidden rounded-[10px]  ">
              <Image
                alt=""
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26y2JHp0GYfv2fqEQNVdWZh3wwwj-7qC96w&s"
                }
                height={500}
                width={500}
                className="w-full h-[250px] bg-gray-200 "
              />
              <div className="bg-background w-full flex flex-col gap-1 p-4 ">
                <h4 className="text-[16px] font-[700] ">Haircut</h4>
                <p className="text-[14px] font-[500] text-[#6C727F] ">
                  Professional haircuts for all styles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-[#F9FAFB] py-[45px] flex flex-col items-center gap-[45px] ">
        <h4 className="text-[36px] font-[700] ">How it works</h4>
        <div className="flex flex-col gap-[40px] ">
          <div className="flex flex-col items-center gap-[12px] ">
            <div className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center ">
              1
            </div>
            <h4 className="text-[16px] font-[700] ">Choose a service</h4>
            <p className="text-[14px] font-[500] text-[#6c727f] ">
              Browse our range of professional services
            </p>
          </div>
          <div className="flex flex-col items-center gap-[12px] ">
            <div className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center ">
              1
            </div>
            <h4 className="text-[16px] font-[700] ">Choose a service</h4>
            <p className="text-[14px] font-[500] text-[#6c727f] ">
              Browse our range of professional services
            </p>
          </div>
          <div className="flex flex-col items-center gap-[12px] ">
            <div className="w-16 h-16 rounded-full bg-black text-white flex justify-center items-center ">
              1
            </div>
            <h4 className="text-[16px] font-[700] ">Choose a service</h4>
            <p className="text-[14px] font-[500] text-[#6c727f] ">
              Browse our range of professional services
            </p>
          </div>
        </div>
        <div>
          <Link href={"/service"}>
            <Button className="cursor-pointer ">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
