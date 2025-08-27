"use client";
import React, { useState } from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Icon from "react-multi-date-picker/components/icon";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "react-multi-date-picker/styles/layouts/prime.css";

const weekdays = ["ج", "پ", "چ", "س", "د", "ی", "ش"];
function MultiDatePicker() {
  const [value, setValue] = useState<any>(new Date().toString());
  return (
    <div className="section flex flex-col gap-10 items-center justify-center">
      <div className="bg-black p-6 rounded-xl shadow">
        <h2 className="my-4 text-center flex items-center gap-2">
          تاریخ تولد خود را انتخاب کنید{" "}
          <span className="text-yellow-500 text-2xl translate-y-1">* </span>
        </h2>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          className="rmdp-prime"
          inputClass="p-2 border-2 border-yellow-500 rounded-lg"
          value={value}
          weekDays={weekdays.reverse()}
          onChange={setValue}
          render={<Icon className="px-22 w-full" />}
          monthYearSeparator=" | "
          mapDays={({ date, today, selectedDate, currentMonth, isSameDate }) => {
            let props: any = {};
            let isWeekend = [6].includes(date.weekDay.index);
            if (isWeekend) props.className = "highlight highlight-red";

            props.style = {
              borderRadius: "3px",
              backgroundColor: date.month.index === currentMonth.index ? "#ccc" : "",
            };

            if (isSameDate(date, today)) props.style.color = "yellow";
            if (isSameDate(date, selectedDate))
              props.style = {
                ...props.style,
                color: "black",
                backgroundColor: "yellow",
                fontWeight: "bold",
                border: "2px solid black",
              };

            return props;
          }}
          renderButton={(direction: any, handleClick: any) => (
            <button
              onClick={handleClick}
              className="text-black hover:bg-yellow-500 rounded-sm mx-2 p-1"
            >
              {direction === "right" ? (
                <ArrowBigLeft className="size-5" />
              ) : (
                <ArrowBigRight className="size-5" />
              )}
            </button>
          )}
        />
      </div>
      <p className="bg-black p-3 rounded-xl border-b-4 border-b-yellow-500 tracking-wide text-xl">
        {value?.toDate?.().toLocaleString("fa-IR")}
      </p>
    </div>
  );
}

export default MultiDatePicker;
