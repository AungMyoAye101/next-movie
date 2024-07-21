import React from "react";
import Image from "next/image";
import Count from "./Count";

interface Detail {
  media_type: string;
  id: number;
}
const Details = async ({ media_type, id }: Detail) => {
  console.log(media_type, id);
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
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="p-4 flex gap-1">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              data.poster_path || data.backdrop_path
            }  `}
            width={300}
            height={200}
            alt="posters"
            loading="lazy"
            className="rounded"
          />
          <div className=" px-4 text-slate-200">
            <h1 className="text-4xl font-bold">
              {data.name || data.original_name || data.original_title} (
              {data.first_air_date || data.release_date} )
            </h1>
            <div className="text-lg py-2">
              <span>{data.genres[0].name}</span>
              <span>{data.genres[1].name} </span>
            </div>
            <div className="flex items-center gap-1">
              <span></span>
              <span>User Score</span>
            </div>
            <div className="flex gap-1 py-2">
              <button className="btn btn-circle">Heart</button>
              <button className="btn btn-circle">Heart</button>
              <button className="btn btn-circle">Heart</button>
            </div>
            <div className="py-2">
              <h2 className="text-xl font-bold">OverView</h2>
              <p>{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
