import React from "react";
interface Rating {
  rating: number;
}
const Rating = ({ rating }: Rating) => {
  return (
    <div
      className={`rounded-badge bg-slate-900 text-slate-200 size-12 flex items-center justify-center  border-4 border-l-gray-600  ${
        rating > 80 ? " border-green-500" : "border-yellow-500"
      } `}
    >
      <span className="text-base">{rating}</span>
      <span className="text-xs"> %</span>
    </div>
  );
};

export default Rating;
