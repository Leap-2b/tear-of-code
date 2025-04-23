"use client";

import { useState } from "react";

const CalendarWithTime = () => {
  // Огноо, цагийн state
  const [currentDate] = useState(new Date(2025, 3, 16)); // 2025-04-16
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // console.log("selectedDate", selectedDate);
  // console.log("selectedDate", selectedTime);

  // 7 хоногийн өдрүүдийг үүсгэх
  const getWeekDays = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Ням гаригаас эхлэх

    return Array.from({ length: 7 }).map((_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  };

  // Өмнөх/дараахи сар руу шилжих
  // const changeMonth = (direction: "prev" | "next") => {
  //   const newDate = new Date(currentDate);
  //   newDate.setMonth(
  //     direction === "prev" ? newDate.getMonth() - 1 : newDate.getMonth() + 1
  //   );
  //   setCurrentDate(newDate);
  // };

  const weekDays = getWeekDays(currentDate);

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
    <div className="max-w-md mx-auto p-6 bg-white border-[#e2e8f0] border rounded-[10px] shadow-md">
      {/* Date Section */}
      <h2 className="text-[26px] font-bold mb-6 text-gray-800">
        Select Date & Time
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Date</h3>
        <div className="flex justify-between items-center mb-3">
          {/* <button
            onClick={() => changeMonth("prev")}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            &lt;
          </button> */}
          <span className="font-bold text-gray-900">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
          {/* <button
            onClick={() => changeMonth("next")}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            &gt;
          </button> */}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="text-sm font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {weekDays.map((day) => (
            <button
              key={day.toISOString()}
              className={`p-2 rounded-full cursor-pointer text-sm ${
                day.getDate() === selectedDate?.getDate()
                  ? "bg-blue-600 text-white"
                  : day.getMonth() !== currentDate.getMonth()
                  ? "text-gray-400"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              {day.getDate()}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        {/* Time Slots Section */}
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Available Time Slots
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`py-2 px-3 rounded-lg cursor-pointer border text-sm ${
                selectedTime === time
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarWithTime;

// "use client";

// import { useState } from "react";

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 16)); // 2025-04-16
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);

//   // 7 хоногийн өдрүүдийг үүсгэх
//   const getWeekDays = (date: Date) => {
//     const startOfWeek = new Date(date);
//     startOfWeek.setDate(date.getDate() - date.getDay()); // Ням гаригаас эхлэх

//     const days = [];
//     for (let i = 0; i < 7; i++) {
//       const day = new Date(startOfWeek);
//       day.setDate(startOfWeek.getDate() + i);
//       days.push(day);
//     }
//     return days;
//   };

//   const weekDays = getWeekDays(currentDate);

//   const timeSlots = [
//     "9:00 AM",
//     "9:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     // "12:00 PM",
//     // "12:30 PM",
//     "1:00 PM",
//     "1:30 PM",
//     "2:00 PM",
//     "2:30 PM",
//     "3:00 PM",
//     "3:30 PM",
//     "4:00 PM",
//     "4:30 PM",
//     "5:00 PM",
//     "5:30 PM",
//     "6:00 PM",
//     "6:30 PM",
//   ];

//   return (
//     <div className="max-w-md mx-auto p-4 border-[#e2e8f0] border rounded-[10px] ">
//       <h3 className="text-[26px] font-bold mb-4">Select Date & Time</h3>
//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-2">
//           <span className="font-semibold">
//             {currentDate.toLocaleString("default", {
//               month: "long",
//               year: "numeric",
//             })}
//           </span>
//         </div>
//         <div className="grid grid-cols-7 gap-1 text-center">
//           {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//             <div key={day} className="font-medium text-gray-500">
//               {day}
//             </div>
//           ))}
//           {weekDays.map((day) => (
//             <div
//               key={day.toISOString()}
//               className={`p-2 rounded-full ${
//                 day.getDate() === currentDate.getDate()
//                   ? "bg-blue-500 text-white"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               {day.getDate()}
//             </div>
//           ))}
//         </div>
//       </div>
//       <h2 className="text-xl font-bold mt-6 mb-4">Available Time Slots</h2>
//       <div className="grid grid-cols-2 gap-2">
//         {timeSlots.map((time) => (
//           <button
//             key={time}
//             className={`p-2 rounded border ${
//               selectedTime === time
//                 ? "bg-blue-500 text-white"
//                 : "hover:bg-gray-100"
//             }`}
//             onClick={() => setSelectedTime(time)}
//           >
//             {time}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;
