import React from "react";
interface DateProps {
  dateString: string;
}
const DateString = ({ dateString }: DateProps) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
  return <h2 className="text-sm text-gray-400">{formattedDate}</h2>;
};

export default DateString;
