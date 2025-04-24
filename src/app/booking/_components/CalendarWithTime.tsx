"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

const CalendarWithTime = ({
  setSelectedServiceDate,
}: {
  setSelectedServiceDate: React.Dispatch<
    React.SetStateAction<{
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
                    setSelectedServiceDate((prev) => ({
                      ...prev,
                      date: date.toDateString(),
                    }));
                  }
                }}
                className="rounded-md border shadow mx-auto"
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  const startOfWeek = new Date(today);
                  startOfWeek.setDate(today.getDate() - today.getDay());

                  const endOfWeek = new Date(startOfWeek);
                  endOfWeek.setDate(startOfWeek.getDate() + 6);

                  return date < today || date < startOfWeek || date > endOfWeek;
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-medium">Боломжтой цаг хугацаа</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "secondary"}
                className="py-2 px-3 rounded-lg cursor-pointer text-sm"
                onClick={() => {
                  setSelectedTime(time);
                  if (selectedDate) {
                    setSelectedServiceDate((prev) => ({
                      ...prev,
                      date: selectedDate.toDateString(),
                      time: time,
                    }));
                  }
                }}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWithTime;
