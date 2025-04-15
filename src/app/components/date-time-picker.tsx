"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate dates for the current week (7 days)
  const getDates = () => {
    const dates = [];
    const today = new Date(currentMonth);
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Start from the beginning of the week (Sunday or Monday)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - day); // Start from Sunday

    // Generate 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  // Generate time slots (hourly from 8 AM to 8 PM)
  const getTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 20; hour++) {
      const formattedHour = hour <= 12 ? hour : hour - 12;
      const period = hour < 12 ? "AM" : "PM";
      slots.push(`${formattedHour.toString().padStart(2, "0")}:00 ${period}`);
    }
    return slots;
  };

  // Format date for display
  const formatDate = (date: Date) => {
    return date.getDate();
  };

  // Format day for display
  const formatDay = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  // Format month and year for display
  const formatMonthYear = (date: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  // Navigate to previous week
  const prevWeek = () => {
    const prevWeek = new Date(currentMonth);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentMonth(prevWeek);
  };

  // Navigate to next week
  const nextWeek = () => {
    const nextWeek = new Date(currentMonth);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentMonth(nextWeek);
  };

  // Check if date is selected
  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm mt-4">
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-4">Date</h2>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevWeek}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Previous week"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h3 className="text-lg font-medium">
            {formatMonthYear(currentMonth)}
          </h3>
          <button
            onClick={nextWeek}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Next week"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-between gap-2">
          {getDates().map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={cn(
                "flex flex-col items-center justify-center rounded-full p-2 w-14 h-14 transition-colors",
                isDateSelected(date)
                  ? "bg-teal-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              )}
            >
              <span className="text-xs">{formatDay(date)}</span>
              <span className="text-xl">{formatDate(date)}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-4">Time</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {getTimeSlots().map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={cn(
                "py-3 px-4 rounded-full border text-center transition-colors",
                selectedTime === time
                  ? "bg-teal-100 border-teal-700 text-teal-700"
                  : "border-gray-300 hover:border-gray-400"
              )}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
