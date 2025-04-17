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
                "I've been coming to StyleCut for years and have never been
                disappointed. John always knows exactly how I like my hair and
                keeps up with the latest trends."
              </p>
              <div className="flex items-center gap-4 ">
                <Avatar className="w-10 h-10 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium ">Michael R.</p>
                  <p className="text-sm text-gray-500 ">
                    Loyal client since 2015
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
                "Sarah transformed my look completely! Her attention to detail
                and understanding of what would suit my face shape was
                impressive. Best color treatment I've ever had."
              </p>
              <div className="flex items-center gap-4 ">
                <Avatar className="w-10 h-10 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium ">Jennifer T.</p>
                  <p className="text-sm text-gray-500 ">Jennifer T.</p>
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
                "The online booking system is so convenient, and the service is
                always top-notch. Lisa's nail art is incredible—I always get
                compliments after my appointments!"
              </p>
              <div className="flex items-center  gap-4">
                <Avatar className="w-10 h-10 ">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium ">Amanda K.</p>
                  <p className="text-sm text-gray-500 ">Monthly visitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
