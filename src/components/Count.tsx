import React from "react";
interface CountAvg {
  rating: number;
}
const Count = ({ rating }: CountAvg) => {
  const countAvarage = Math.round(rating * 10);
  return (
    <div
      className={` rounded-badge w-12 h-12 flex items-center justify-center  ${
        countAvarage > 80 ? " bg-green-500" : "bg-yellow-500"
      } `}
    >
      <div className="rounded-badge bg-slate-900 text-slate-200 w-10 h-10 flex items-center justify-center   ">
        <span className="text-base">{countAvarage}</span>
        <span className="text-xs"> %</span>
      </div>
    </div>
  );
};

export default Count;
