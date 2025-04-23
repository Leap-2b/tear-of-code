"use client";

import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

const CalendarWithTime = ({
  setSelectedService,
}: {
  setSelectedService: React.Dispatch<
    React.SetStateAction<{
      duration: string;
      date: string | null;
    }>
  >;
}) => {
  // Огноо, цагийн state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Цагны сонголтууд
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    // "12:00 PM",
    // "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
  ];

  return (
    <div className="w-full mx-auto p-6 bg-white border-[#e2e8f0] border rounded-[10px] shadow-md">
      {/* Date Section */}
      <h2 className="text-[26px] font-bold mb-6 text-gray-800">
        Огноо ба цагийг сонгоно уу
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Date</h3>

          <div className="p-3 rounded-md border">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  if (date) {
                    setSelectedService((prev) => ({
                      ...prev,
                      date: date.toDateString(),
                    }));
                  }
                }}
                className="rounded-md border shadow"
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  const startOfWeek = new Date(today);
                  startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday

                  const endOfWeek = new Date(startOfWeek);
                  endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday

                  return (
                    date < today || // passed dates
                    date < startOfWeek || // before this week's Sunday
                    date > endOfWeek // after this week's Saturday
                  );
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-medium">Available Time Slots</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={`py-2 px-3 rounded-lg cursor-pointer border text-sm ${
                  selectedTime === time
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => {
                  setSelectedTime(time);
                  if (selectedDate) {
                    setSelectedService((prev) => ({
                      ...prev,
                      date: selectedDate.toDateString(),
                      time: time,
                    }));
                  }
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWithTime;
