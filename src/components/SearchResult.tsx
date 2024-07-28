import React, { Suspense } from "react";
import { CardProps } from "./Results";
import Image from "next/image";
import Link from "next/link";

import FallbackImg from "./FallbackImg";
import ImageCard from "./ImageCard";

const SearchResult = ({ data }: CardProps) => {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-4">
      {data.map((item) => (
        <Link
          href={`/${item.media_type || "movie"}/${item.id} `}
          key={item.id}
          className=" rounded shadow hover:text-info "
        >
          <div>
            <ImageCard
              img={`https://image.tmdb.org/t/p/original${
                item.backdrop_path || item.poster_path
              } `}
            />
          </div>

          <div className="space-y-1 p-2">
            <h2 className="text-lg line-clamp-2 font-bold">
              {item.title || item.original_name}
            </h2>

            <h4>{item.release_date || item.first_air_date}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
