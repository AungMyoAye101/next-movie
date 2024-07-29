import React from "react";
import Card from "./Card";
import SearchResult from "./SearchResult";
import Footer from "./Footer";
import Link from "next/link";
import SearchBox from "./SearchBox";

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
      {data.length === 0 ? (
        <div className="text-center mt-10">
          <h1 className="text-lg  font-serif">No match search results .</h1>
          <Link href={"/"} className="font-mono hover:text-rose-600">
            Please try again!
          </Link>
        </div>
      ) : (
        <SearchResult data={data} />
      )}
    </div>
  );
};

export default Results;
