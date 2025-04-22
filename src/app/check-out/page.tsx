import Payment from "./Payment";
import BookingSummary from "./BookingSummary";
import ContactInformation from "./Contact-information";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export default function CheckOut() {
  return (
    <div className="w-full flex flex-col items-center gap-4  p-6">
      <h1 className="font-bold text-xl w-full mt-6">Checkout</h1>
      <p className="text-gray-300 w-full text-sm">
        Complete your booking by providing payment details
      </p>

      <ContactInformation />

      <Button className="w-full">
        <CreditCard />
        Захиалах
      </Button>
      <BookingSummary />
    </div>
  );
}
