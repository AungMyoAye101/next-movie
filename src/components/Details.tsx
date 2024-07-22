import React from "react";
import Image from "next/image";
import Count from "./Count";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

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
        <div className="hero-overlay bg-opacity-80"></div>
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
          <div className=" px-4 text-slate-200 space-y-4">
            <h1 className="text-4xl font-bold">
              {data.name || data.original_name || data.original_title}
            </h1>
            <h2>{data.first_air_date || data.release_date}</h2>
            <div className="flex gap-2 ">
              {data.genres.map((item: { id: number; name: string }) => (
                <span key={item.id} className="text-md hover:text-primary">
                  {item.name}
                </span>
              ))}

              {data.runtime && (
                <p>
                  - {Math.floor(data.runtime / 60)}h {data.runtime % 60}min
                </p>
              )}
            </div>
            <div className="flex items-center gap-1">
              <span></span>
              <span>User Score</span>
            </div>
            <div className="flex gap-1">
              <button className="btn btn-circle btn-neutral">
                <FaBars className=" text-lg" />
              </button>
              <button className="btn btn-circle btn-neutral">
                <FaHeart className=" text-lg" />
              </button>
              <button className="btn btn-circle btn-neutral">
                <FaBookmark className=" text-lg" />
              </button>
            </div>
            <h3 className="font-serif">{data.tagline}</h3>
            <div>
              <h2 className="text-xl font-bold">OverView</h2>
              <p>{data.overview}</p>
              {data.created_by && <p>hello</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
