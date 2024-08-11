import React from "react";
import Image from "next/image";
import Info from "./Info";
import Footer from "./Footer";
import Series from "./Series";
import Cast from "./Cast";

interface Detail {
  media_type: string;
  id: number;
}

const Details = async ({ media_type, id }: Detail) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  console.log(data);
  return (
    <>
      <div className="p-8 min-h-screen  flex flex-col md:flex-row gap-6 text-slate-200">
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
      <Cast
        series_id={data.id}
        season_number={data.number_of_seasons || data.season_number}
      />
    </>
  );
};

export default Details;
