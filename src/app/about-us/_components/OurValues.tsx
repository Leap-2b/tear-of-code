import { CircleCheckBig } from "lucide-react";
import React from "react";

export const OurValues = () => {
  return (
    <div>
      <section className="bg-gray-50 py-16  w-full">
        <div className="px-4 ">
          <div className="mx-auto max-w-3xl text-center ">
            <h2 className="mb-4 text-3xl font-bold">Бидний үнэт зүйлс</h2>
            <p className="mb-12 text-gray-600">
              At StyleCut, everything we do is guided by our commitment to
              excellence and these core principles
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 ">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-black p-3 text-white">
                  <CircleCheckBig />
                </div>
                <h3 className="mb-2 text-xl font-bold">Чанартай гар урлал</h3>
                <p className="text-gray-600">
                  We take pride in our work and are committed to delivering
                  precision cuts and exceptional service every time.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col items-center p-6 text-center ">
                <div className="mb-4 rounded-full bg-black p-3 text-white">
                  <CircleCheckBig />
                </div>
                <h3 className="mb-2 text-xl font-bold">Хүрээлэн буй орчин</h3>
                <p className="text-gray-600">
                  We create a welcoming space where everyone feels comfortable,
                  respected, and valued.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col items-center p-6 text-center ">
                <div className="mb-4 rounded-full bg-black p-3 text-white">
                  <CircleCheckBig />
                </div>
                <h3 className="mb-2 text-xl font-bold">Тасралтгүй өсөлт</h3>
                <p className="text-gray-600">
                  We're always learning, improving our skills, and staying
                  current with the latest trends and techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
