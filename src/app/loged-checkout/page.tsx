import { Button } from "@/components/ui/button";
import UserInformation from "./_components/User-information";
import { CreditCard } from "lucide-react";
import SummaryLoged from "./_components/SummaryLoged";

export default function LogedCheckout() {
  return (
    <div className="w-full flex flex-col items-center gap-4  p-6">
      <h1 className="font-bold text-xl w-full mt-6">Checkout</h1>
      <p className="text-gray-300 w-full text-sm">
        Complete your booking by providing payment details
      </p>

      <UserInformation />

      <Button className="w-full">
        <CreditCard />
        Захиалах
      </Button>
      <SummaryLoged />
    </div>
  );
}
