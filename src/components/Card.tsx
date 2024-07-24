import React from "react";
import Image from "next/image";
import Link from "next/link";
import Count from "./Count";
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

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="card card-compact bg-base-100 shadow-xl rounded-lg max-w-6xl mx-auto hover:opacity-80 "
        >
          <Link
            href={`/${item.media_type || "movie"}/${item.id} `}
            className="relative"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${
                item.poster_path || item.backdrop_path
              }`}
              width={300}
              height={150}
              alt="posters"
            />
            <div className="absolute -bottom-2 right-0">
              <Count rating={item.vote_average} />
            </div>
          </Link>

          <div className="card-body p-2">
            <h2 className="card-title">{item.title || item.original_name}</h2>
            <p>{item.first_air_date || item.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;