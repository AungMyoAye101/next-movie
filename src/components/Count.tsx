import React from "react";
interface CountAvg {
  rating: number;
}
const Count = ({ rating }: CountAvg) => {
  const countAvarage = Math.round(rating * 10);
  return (
    <div
      className={` rounded-badge border-4 border-r-transparent ${
        countAvarage > 80 ? " border-green-500" : "border-yellow-500"
      }`}
    >
      <div className="rounded-badge bg-slate-900 text-slate-200 w-10 h-10 flex items-center justify-center   ">
        <span className="text-base">{countAvarage}</span>
        <span className="text-xs"> %</span>
      </div>
    </div>
  );
};

export default Count;
