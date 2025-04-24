import { QrCode } from "lucide-react";

export default function Payment() {
  return (
    <div className="w-full mx-auto bg-white rounded-lg overflow-hidden border shadow-sm flex flex-col py-6">
      <h1 className="font-bold text-xl ml-4 ">Төлбөрийн хэсэг</h1>
      <p className="flex justify-center items-center">Qpay</p>
      <QrCode className="mx-auto" size={300} />
    </div>
  );
}
