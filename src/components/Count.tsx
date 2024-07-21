import React from "react";
import Rating from "./Rating";
interface CountAvg {
  rating: number;
}
const Count = ({ rating }: CountAvg) => {
  const countAvarage = Math.round(rating * 10);
  return (
    <>
      <Rating rating={countAvarage} />
    </>
  );
};

export default Count;
