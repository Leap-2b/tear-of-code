import React from "react";
import CalendarWithTime from "./_components/CalendarWithTime";
import AppointmentSummary from "./_components/AppointmentSummary";

const BookingPage = () => {
  return (
    <div className="max-w-[480px] w-full px-4 py-8 bg-[#ffffff] ">
      <h2 className="text-[32px] font-[700] ">Book Your Appointment</h2>
      <h4 className="text-[14px] font-[500] text-[#6C727F] ">
        Select a date and time for your service{" "}
      </h4>
      <div className="mt-8 ">
        <CalendarWithTime />
      </div>
      <div className="mt-12 ">
        <AppointmentSummary />
      </div>
    </div>
  );
};

export default BookingPage;
