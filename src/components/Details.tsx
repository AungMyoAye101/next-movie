import React from "react";
import Image from "next/image";
import Info from "./Info";
import Footer from "./Footer";
import Series from "./Series";
import Cast from "./Cast";

export interface InfoDetail {
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_name: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  total_season: number;
  runtime: number;
  tagline: string;
  genres: { id: number; name: string }[];

  // created_by: { id: number; name: string }[];
}

const Details = async ({
  backdrop_path,
  id,
  original_name,
  original_title,
  overview,
  poster_path,
  name,
  release_date,
  first_air_date,
  vote_average,
  tagline,
  runtime,
  total_season,
  genres,
}: InfoDetail) => {
  return (
    <>
      {/* <div className="p-8   flex flex-col md:flex-row gap-6 text-slate-200">
        <div className="max-w-80">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              data.poster_path || data.backdrop_path
            }  `}
            width={300}
            height={200}
            alt="posters"
            className="rounded-md shadow "
          />
        </div>

        <Info
          backdrop_path={data.backdrop_path}
          id={data.id}
          title={data.title}
          name={data.name}
          original_name={data.original_name}
          original_title={data.original_title}
          overview={data.overview}
          poster_path={data.poster_path}
          release_date={data.release_date}
          first_air_date={data.first_air_date}
          vote_average={data.vote_average}
          runtime={data.runtime}
          tagline={data.tagline}
          total_season={data.number_of_seasons}
          genres={data.genres}
          created_by={data.created_by}
        />
      </div>
      {data.season_number ||
        (data.number_of_seasons && (
          <Cast
            series_id={data.id}
            season_number={data.number_of_seasons || data.season_number}
          />
        ))} */}
      <div>detail</div>
    </>
  );
};

export default Details;
