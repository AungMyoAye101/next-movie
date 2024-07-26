import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Count from "./Count";
import { CardProps } from "./Results";
import FallbackImg from "./FallbackImg";
const Card = ({ data }: CardProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="card card-compact bg-base-100 shadow-xl rounded-lg max-w-6xl mx-auto hover:opacity-80 "
        >
          <Link
            href={`/${item.media_type || "movie"}/${item.id} `}
            className="relative"
          >
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  item.backdrop_path || item.poster_path
                }`}
                width={300}
                height={150}
                alt="posters"
                className="rounded aspect-video object-cover"
              />
            </div>
            <div className="absolute -bottom-2 right-0">
              <Count rating={item.vote_average} />
            </div>
          </Link>

          <div className="card-body p-2">
            <h2 className="card-title font-mono">
              {item.title || item.original_name}
            </h2>
            <p>{item.first_air_date || item.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
