"use client";
import { date, print } from "@/public/script/main";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isAfter,
  isBefore,
} from "date-fns";

export default function Calendar({ data, onChange, className }) {
  const config = useSelector((state) => state.config);
  const [currentMonth, setCurrentMonth] = useState(data || new Date());
  const [selectedDate, setSelectedDate] = useState(data || new Date());

  const render_cells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;
        const isBeforeToday =
          isBefore(day, new Date()) && isSameMonth(day, new Date());

        days.push(
          <div
            key={day}
            onClick={() => !isBeforeToday && setSelectedDate(cloneDay)}
            className={`flex min-h-[2.7rem] min-w-[2.7rem] cursor-pointer items-center justify-center rounded-full text-[1rem] font-semibold transition-colors duration-100 
                            ${
                              !isSameMonth(day, monthStart)
                                ? "invisible"
                                : isSameDay(day, selectedDate)
                                ? "bg-primary text-white shadow-lg"
                                : isBeforeToday
                                ? "!cursor-default text-gray-300"
                                : "text-gray-700 hover:bg-primary-light hover:text-gray-950"
                            }`}
          >
            {formattedDate}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div key={day} className="flex items-center justify-between w-full">
          {days}
        </div>
      );

      days = [];
    }

    return rows;
  };
  const increase = () => {
    const newMonth = addMonths(currentMonth, 1);
    setCurrentMonth(newMonth);
  };
  const decrease = () => {
    const newMonth = subMonths(currentMonth, 1);
    if (isAfter(new Date(), startOfMonth(newMonth)))
      setCurrentMonth(new Date());
    else setCurrentMonth(newMonth);
  };
  useEffect(() => {
    if (!data) return;
    // onChange(selectedDate);
  }, [selectedDate]);

  return (
    <div
      className={`panel w-full !rounded-lg p-6 ${className}`}
      onClick={(e) => {
        e.target.nodeName !== "BUTTON" && e.stopPropagation();
      }}
    >
      <div className="flex items-center justify-between gap-8 cursor-default">
        <button
          onClick={decrease}
          className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-gray-200 bg-primary-light text-gray-500 hover:border-primary hover:text-primary"
        >
          <span className="material-symbols-outlined text-[1.8rem]">
            arrow_left
          </span>
        </button>

        <div className="flex w-full flex-1 items-center justify-center rounded-[2rem] border border-gray-200 bg-primary-light px-8 py-2.5">
          <span className="text-[1.05rem] font-bold tracking-wide text-gray-600">
            {format(currentMonth, "MMMM yyyy")}
          </span>
        </div>

        <button
          onClick={increase}
          className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-gray-200 bg-primary-light text-gray-500 hover:border-primary hover:text-primary"
        >
          <span className="material-symbols-outlined text-[2rem]">
            arrow_right
          </span>
        </button>
      </div>

      <div className="flex items-center justify-between w-full mt-6 mb-3 select-none">
        {date("d_list").map((item, index) => (
          <div
            key={index}
            className="flex h-[2.2rem] w-[2.2rem] items-center justify-center"
          >
            <span className="text-[.92rem] font-semibold tracking-wide text-gray-950">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full gap-3 select-none">
        {render_cells()}
      </div>

      <div className="grid w-full grid-cols-2 gap-3 pt-5 mt-5 border-t border-gray-300 buttons">
        <button
          onClick={() => onChange(selectedDate)}
          className="cursor-pointer rounded-md bg-primary p-2.5 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:opacity-[.8]"
        >
          Apply
        </button>
        <button
          onClick={() => {}}
          className="cursor-pointer rounded-md bg-danger p-2.5 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:opacity-[.8]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
