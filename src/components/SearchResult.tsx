import React from "react";
import { CardProps } from "./Results";
import Image from "next/image";

const SearchResult = ({ data }: CardProps) => {
  return (
    <div className="my-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 border border-gray-400 rounded p-4 mt-3 shadow"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${
              item.backdrop_path || item.poster_path
            }  `}
            width={250}
            height={150}
            alt="posters"
            layout="reponsive"
            objectFit="cover"
            className="rounded "
            style={{ aspectRatio: "16/9", maxWidth: "300" }}
          />

          <div className="space-y-1">
            <h2 className="text-xl font-bold">
              {item.title || item.original_name}
            </h2>

            <h4>{item.release_date || item.first_air_date}</h4>

            <div>
              <h5 className="text-lg font-bold">Overview</h5>
              <p className="line-clamp-2 lg:line-clamp-none text-sm font-serif">
                {item.overview}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
