import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

interface CardData {
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
    <div className="px-6 py-10">
      <NavItems />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="card card-compact bg-base-100 shadow-xl rounded-lg max-w-6xl mx-auto "
          >
            <Link href={`/${item.media_type}/${item.id}`} className="relative">
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  item.poster_path || item.backdrop_path
                }`}
                width={500}
                height={200}
                alt="posters"
                loading="lazy"
              />
              <div className="rounded-badge bg-slate-900 text-slate-200 w-11 h-11 flex items-center justify-center absolute -bottom-2 right-0 border-4 border-r-transparent border-green-500 ">
                <span className="text-base">
                  {Math.round(item.vote_average * 10)}
                </span>
                <span className="text-xs"> %</span>
              </div>
            </Link>

            <div className="card-body p-2">
              <h2 className="card-title">{item.title || item.original_name}</h2>
              <p>{item.first_air_date || item.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
