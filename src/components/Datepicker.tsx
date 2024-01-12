import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../assets/Calander";

const DatePickerForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleCalendarClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  return (
    <div className="w-full relative p-2 border border-border-grey  rounded-md mt-2  pr-10">
      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        className="w-full"
      />
      <div
        className="absolute right-0 top-1 mr-1 cursor-pointer"
        onClick={handleCalendarClick}
      >
        <Calendar />
      </div>
    </div>
  );
};

export default DatePickerForm;
