import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import React from "react";

export const CommentsRate = () => {
  return (
    <section className="bg-gray-50 py-16 w-full ">
      <div className=" px-4 ">
        <div className="mx-auto max-w-3xl text-center ">
          <h2 className="mb-4 text-3xl font-bold">
            Манай үйлчлүүлэгчид юу гэж хэлдэг вэ
          </h2>
          <p className="mb-12 text-gray-600">
            Зөвхөн бидний үгийг хүлээж авах хэрэггүй - бидний сэтгэл ханамжтай
            үйлчлүүлэгчдээс сонсоорой
          </p>
        </div>
        <div className="grid gap-8 ">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm ">
            <div className="p-6 ">
              <div className="mb-4 flex text-yellow-400 ">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="mb-4 text-gray-600 ">
                &quot;Би StyleCut-д олон жилийн турш ирсэн бөгөөд хэзээ ч сэтгэл
                дундуур байгаагүй. Жон үргэлж миний үсэнд ямар дуртайг мэддэг
                бөгөөд сүүлийн үеийн чиг хандлагыг дагаж мөрддөг.&quot;
              </p>
              <div className="flex items-center gap-4 ">
                <Avatar className="w-10 h-10 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium ">Michael R.</p>
                  <p className="text-sm text-gray-500 ">
                    2015 оноос хойш үнэнч үйлчлүүлэгч
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm ">
            <div className="p-6 ">
              <div className="mb-4 flex text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="mb-4 text-gray-600 ">
                &quot;Сара миний дүр төрхийг бүрэн өөрчилсөн! Түүний нарийн
                ширийн зүйлийг анхаарч үздэг мөн миний нүүрний хэлбэрт юу
                тохирохыг ойлгох гайхалтай. Миний хэрэглэж байсан хамгийн сайн
                өнгөт эмчилгээ.&quot;
              </p>
              <div className="flex items-center gap-4 ">
                <Avatar className="w-10 h-10 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium ">Jennifer T.</p>
                  <p className="text-sm text-gray-500 ">Байнгын үйлчлүүлэгч</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm ">
            <div className="p-6 ">
              <div className="mb-4 flex text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="mb-4 text-gray-600 ">
                &quot;Онлайн захиалгын систем нь маш тохиромжтой, үйлчилгээ нь
                үргэлж дээд зэрэглэлийн. Лизагийн хумсны урлаг үнэхээр
                гайхалтай—би үргэлж авдаг миний уулзалтын дараа магтаал!&quot;
              </p>
              <div className="flex items-center  gap-4">
                <Avatar className="w-10 h-10 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium ">Amanda K.</p>
                  <p className="text-sm text-gray-500 ">Сар бүрийн зочин</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
