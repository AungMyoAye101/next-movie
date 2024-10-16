import React from "react";
interface Rating {
  rating: number;
}
const Rating = ({ rating }: Rating) => {
  return (
    <div
      className={`rounded-full bg-slate-900 text-slate-200 size-12 flex items-center justify-center  border-4 border-l-gray-600  ${
        rating === 0
          ? " border-gray-500"
          : rating < 60
          ? "border-red-500"
          : rating <= 79
          ? "border-yellow-400"
          : rating > 79
          ? "border-green-500"
          : ""
      } `}
    >
      <span className="text-base">{rating}</span>
      <span className="text-xs"> %</span>
    </div>
  );
};

export default Rating;
