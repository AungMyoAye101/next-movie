import React from "react";
import Card from "./Card";
export interface CardData {
  backdrop_path: string;
  id: number;
  title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}
interface CardProps {
  data: CardData[];
}
const Results: React.FC<CardProps> = ({ data }) => {
  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default Results;
