import React from "react";
import { SeriesType } from "./Series";
import Image from "next/image";
interface Info {
  data: SeriesType;
  ep_time: string;
}

const SeriesInfo = ({ data, ep_time }: Info) => {
  return (
    <div className="flex gap-4">
      <Image
        src={`https://image.tmdb.org/t/p/original${data.still_path}  `}
        width={300}
        height={200}
        alt="posters"
        className="rounded "
      />

      <div className="space-y-1">
        <h1>{ep_time}</h1>
        <h2 className="">{data.name}</h2>
        <h3>
          Season {data.season_number}-episode
          {data.episode_number}- {data.runtime}
          min
        </h3>
        <h4>{data.air_date}</h4>
        {data.overview && (
          <div>
            <h5>Overview</h5>
            <p>{data.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesInfo;
