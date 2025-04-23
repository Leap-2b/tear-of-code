"use client";

import { useState } from "react";
import AppointmentSummary from "./_components/AppointmentSummary";
import CalendarWithTime from "./_components/CalendarWithTime";

const BookingPage = () => {
  // odoo mfdkasl

  const [selectedService, setSelectedService] = useState<{
    duration: string;
    date: string | null;
  }>({
    duration: "",
    date: "",
  });
  return (
    <div className=" w-full px-4 py-8 bg-[#ffffff] ">
      <h2 className="text-[32px] font-[700] ">Цагаа захиалаарай</h2>
      <h4 className="text-[14px] font-[500] text-[#6C727F] ">
        Үйлчилгээний огноо болон цагаа сонгоно уу{" "}
      </h4>
      <div className="mt-8 ">
        <CalendarWithTime setSelectedService={setSelectedService} />
      </div>
      <div className="mt-12 ">
        <AppointmentSummary selectedService={selectedService} />
      </div>
    </div>
  );
};

export default BookingPage;
