import { QrCode } from "lucide-react";

export default function Payment() {
  return (
    <div className="w-full mx-auto bg-white rounded-lg overflow-hidden shadow-md flex flex-col mt-4 py-6">
      <h1 className="font-bold text-xl ml-4 ">Payment method</h1>
      <p className="flex justify-center items-center">Qpay</p>
      <QrCode className="mx-auto" size={300} />
    </div>
  );
}
