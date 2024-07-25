import React from "react";
import Card from "./Card";
import SearchResult from "./SearchResult";
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
export interface CardProps {
  data: CardData[];
}
const Results = ({ data }: CardProps) => {
  return (
    <div>
      <SearchResult data={data} />
    </div>
  );
};

export default Results;
