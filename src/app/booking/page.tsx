"use client";

import { useState } from "react";
import AppointmentSummary from "./_components/AppointmentSummary";
import CalendarWithTime from "./_components/CalendarWithTime";

const BookingPage = () => {
  const [selectedServiceDate, setSelectedServiceDate] = useState<{
    date: string | null;
  }>({
    date: "",
  });
  return (
    <div className=" w-full px-4 py-8 bg-[#ffffff] ">
      <h2 className="text-[32px] font-[700] ">Цагаа захиалаарай</h2>
      <h4 className="text-[14px] font-[500] text-[#6C727F] ">
        Үйлчилгээний огноо болон цагаа сонгоно уу{" "}
      </h4>
      <div className="mt-8 ">
        <CalendarWithTime setSelectedServiceDate={setSelectedServiceDate} />
      </div>
      <div className="mt-12 ">
        <AppointmentSummary selectedServiceDate={selectedServiceDate} />
      </div>
    </div>
  );
};

export default BookingPage;
