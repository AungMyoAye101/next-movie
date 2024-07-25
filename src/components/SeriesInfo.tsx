import React from "react";
import { SeriesType } from "./Series";
import Image from "next/image";
interface Info {
  data: SeriesType;
  ep_time: string;
}

const SeriesInfo = ({ data, ep_time }: Info) => {
  return (
    <div className="flex gap-4 border border-gray-600 my-2 p-2 shadow-sm rounded">
      <Image
        src={`https://image.tmdb.org/t/p/original${data.still_path}  `}
        width={300}
        height={200}
        alt="posters"
        className="rounded "
      />

      <div className="space-y-1">
        <h1 className="text-lg font-serif">{ep_time}</h1>
        <h2 className="text-xl font-bold">{data.name}</h2>
        <h3 className="font-serif ">
          Season {data.season_number}-episode
          {data.episode_number}- {data.runtime}
          min
        </h3>
        <h4>{data.air_date}</h4>
        {data.overview && (
          <div>
            <h5 className="text-lg font-bold">Overview</h5>
            <p className="text-sm line-clamp-2 lg-line-clamp-none">
              {data.overview}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesInfo;
