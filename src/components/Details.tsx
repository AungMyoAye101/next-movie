import React from "react";
import Image from "next/image";
import Info from "./Info";
interface Detail {
  media_type: string;
  id: number;
}

const Details = async ({ media_type, id }: Detail) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log(data);
  return (
    <>
      <div
        className="hero place-items-start "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            data.backdrop_path || data.poster_path
          })`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="p-4 flex gap-1 ">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              data.poster_path || data.backdrop_path
            }  `}
            width={300}
            height={200}
            alt="posters"
            className="rounded max-w-md"
          />
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
            genres={data.genres}
            lg_screen={true}
          />
        </div>
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
        genres={data.genres}
        lg_screen={false}
      />
    </>
  );
};

export default Details;
