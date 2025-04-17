import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export const VisitUs = () => {
  return (
    <section className="bg-gray-50 py-16  w-full">
      <div className=" px-4 ">
        <div className="mx-auto max-w-3xl text-center ">
          <h2 className="mb-4 text-3xl font-bold">Манайд зочилно уу</h2>
          <p className="mb-12 text-gray-600">
            Бид таныг орчин үеийн, тав тухтай орчинд тавтай морилно уу
          </p>
        </div>
        <div className="grid gap-8 ">
          <div>
            <div className="mb-6 overflow-hidden rounded-lg ">
              <Image
                alt=""
                src={
                  "https://kzmjvhv9uz0z4qf9iypk.lite.vusercontent.net/placeholder.svg?height=400&width=600"
                }
                height={500}
                width={500}
                className="h-full w-full object-cover "
              />
            </div>
            <div className="space-y-4 ">
              <div className="flex items-center ">
                <MapPin className="mr-3 h-6 w-6 " />
                <div>
                  <h3 className="font-bold">Байршил</h3>
                  <p className="text-gray-600">
                    123 Main Street, Anytown, USA 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <Phone className="mr-3 h-6 w-6 " />
                <div>
                  <h3 className="font-bold">Утас</h3>
                  <p className="text-gray-600">(+976) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center ">
                <Mail className="mr-3 h-6 w-6 " />
                <div>
                  <h3 className="font-bold">Имэйл</h3>
                  <p className="text-gray-600">info@stylecut.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm ">
              <div className="p-6 ">
                <h3 className="mb-4 text-xl font-bold">Ажлын цаг</h3>
                <div className="space-y-3 ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 ">
                      <Clock />
                      <span>Даваа - Баасан</span>
                    </div>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>{" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock />
                      <span>Бямба гариг</span>
                    </div>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>{" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock />
                      <span>Ням гараг</span>
                    </div>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>{" "}
                </div>
                <div className="mt-6 ">
                  <h3 className="mb-4 text-xl font-bold ">Биднийг дага</h3>
                  <div className="flex space-x-4 ">
                    <span className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-100 p-2 hover:bg-gray-200 ">
                      IG
                    </span>
                    <span className="rounded-full w-10 h-10 flex justify-center items-center bg-gray-100 p-2 hover:bg-gray-200 ">
                      FB
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 ">
              <Button>Цаг захиалаарай</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
