import { MessageCircleQuestion } from "lucide-react";

export default function AskedQuest() {
  return (
    <div>
      <h4 className="font-bold text-2xl mx-19 my-7 flex gap-3 pt-1">
        <MessageCircleQuestion className="mt-1" />
        Түгээмэл асуултууд
      </h4>
      <div className="w-full px-4 h-full mb-5 border-1 rounded-xl  p-4">
        <h5 className="font-extrabold  flex gap-2.5">
          {" "}
          <MessageCircleQuestion />
          Захиалга хэр хугацаа зарцуулах вэ?{" "}
        </h5>
        <p className="font-normal text-[14px]">
          Захиалсан үйлчилгээнээс хамаарч зарцуулах хугацаа өөр өөр. Тухайлбал
          Үс засахад 30-45 минут зарцуулагдана.Та үахиалга өгөхдөө үйлчилгээ
          бүрийн тооцоолсон хугацааш харах боломжтой.
        </p>
      </div>
      <div className="w-full px-4 h-full mb-5 border-1 rounded-xl  p-4">
        <h5 className="font-extrabold flex gap-2.5">
          <MessageCircleQuestion />
          Үйлчилгээ авах үсчингээ сонгож болох уу?{" "}
        </h5>
        <p className="font-normal text-[14px]">
          Тийм ээ. Үйлчилгээгээ сонгосны дараа, үсчингийнхээ онцлог, хүртээмжид
          тулгуурлан сонгох боломжтой.
        </p>
      </div>
      <div className="w-full px-4 h-full mb-5 border-1 rounded-xl  p-4">
        <h5 className="font-extrabold flex gap-2.5">
          {" "}
          <MessageCircleQuestion />
          Захиалсан үйлчилгээгээ цуцлах бол яах вэ ?{" "}
        </h5>
        <p className="font-normal text-[14px]">
          Төлөвлөгөөний өөрчлөлтийг бид ойлгож байна. Та товлосон цагаасаа 24
          цагийн өмнө ямар нэгэн хураамжгүйгээр товоо цуцлах эсвэл дахин товлох
          боломжтой.
        </p>
      </div>
      <div className="w-full px-4 h-full mb-5 border-1 rounded-xl  p-4">
        <h5 className="font-extrabold flex gap-2.5">
          <MessageCircleQuestion />
          Үйлчилгээндээ хөнгөлөлт эсвэл давуу тал санал болгодог уу?{" "}
        </h5>
        <p className="font-normal text-[14px]">
          Тийм ээ! Бид үйлчилгээ тус бүрдээ оноо цуглуулдаг, үнэнч хэрэглэгч
          хөтөлбөрийг санал болгодог. Цугларсан оноогоохоо дараагын үйлчилгээний
          үнийн дүнгээс хөнгөлөлтийг авах боломжтой.
        </p>
      </div>
    </div>
  );
}
