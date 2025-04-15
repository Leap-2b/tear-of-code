import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomePage = () => {
  return (
    <div className="w-[375px] h-[812px] bg-[#fff] flex flex-col gap-4 py-[14px] px-[16px] ">
      <div className="flex gap-6 items-center mt-6 ">
        <Avatar className="w-[48px] h-[48px] ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Popover>
          <PopoverTrigger>
            {" "}
            <h3 className="text-[24px] font-[700] cursor-pointer hover:text-[#464646] text-[#111111] ">
              test@gmail.com
            </h3>{" "}
          </PopoverTrigger>
          <PopoverContent className="w-[120px] flex justify-center  ">
            <Link href={"/login"}>
              <Button variant={"default"} className="cursor-pointer ">
                Log out
              </Button>
            </Link>
          </PopoverContent>
        </Popover>
      </div>

      <Carousel className="w-full  ">
        <CarouselContent className=" ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="p-0 cursor-pointer ">
                  <CardContent className="flex h-[118px] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="w-full py-2 flex flex-col gap-6 ">
        <h4 className="text-[16px] font-[700] ">What do you want to do?</h4>
        <div className="w-full flex gap-4 flex-wrap ">
          <div className="w-[73.75px] h-[91px] flex flex-col gap-2 items-center ">
            <Button className="bg-[#E1F5FA] hover:bg-[#569aa7] cursor-pointer w-[64px] h-[64px] flex items-center justify-center rounded-full  ">
              <Image
                alt=""
                src={"/haircut.svg"}
                height={40}
                width={40}
                className="w-10 h-10 text-[#156778] "
              />
            </Button>
            <h5 className="text-[14px] font-[600] text-[#156778] cursor-pointer hover:underline ">
              Haircut
            </h5>
          </div>
          <div className="w-[73.75px] h-[91px] flex flex-col gap-2 items-center ">
            <Button className="bg-[#E1F5FA] hover:bg-[#569aa7] cursor-pointer w-[64px] h-[64px] flex items-center justify-center rounded-full  ">
              <Image
                alt=""
                src={"/nails.svg"}
                height={40}
                width={40}
                className="w-10 h-10 text-[#156778] "
              />
            </Button>
            <h5 className="text-[14px] font-[600] text-[#156778] cursor-pointer hover:underline ">
              Nails
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <h4>Salon you follow</h4>
        <div></div>
      </div>
    </div>
  );
};
