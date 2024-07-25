import React from "react";
import { CardProps } from "./Results";
import Image from "next/image";

const SearchResult = ({ data }: CardProps) => {
  return (
    <div className="">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 border border-gray-400 rounded p-4 b"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${
              item.backdrop_path || item.poster_path
            }  `}
            width={400}
            height={200}
            alt="posters"
            className="rounded"
            style={{ aspectRatio: "16/9" }}
          />

          <div className="space-y-1">
            <h2 className="">{item.title || item.original_name}</h2>

            <h4>{item.release_date || item.first_air_date}</h4>

            <div>
              <h5>Overview</h5>
              <p>{item.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
