import React from "react";
import Image from "next/image";
interface SeriesType {
  id: number;
  name: string;
  overview: string;
  air_date: string;
  episode_number: number;
  season_number: number;
  runtime: number;
  still_path: string;
}
interface EpInfo {
  next_episode_to_air: SeriesType;
  last_episode_to_air: SeriesType;
}

const Series = ({ next_episode_to_air, last_episode_to_air }: EpInfo) => {
  console.log(next_episode_to_air, last_episode_to_air);
  return (
    <div className="flex">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={`https://image.tmdb.org/t/p/original${next_episode_to_air.still_path}  `}
            width={300}
            height={200}
            alt="posters"
            className="rounded "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{next_episode_to_air.name}</h2>
          <h3>
            Season {next_episode_to_air.season_number}-episode
            {next_episode_to_air.episode_number}- {next_episode_to_air.runtime}
            min
          </h3>
          <h4>{next_episode_to_air.air_date}</h4>
          <p>{next_episode_to_air.overview}</p>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={`https://image.tmdb.org/t/p/original${next_episode_to_air.still_path}  `}
            width={300}
            height={200}
            alt="posters"
            className="rounded "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{last_episode_to_air.name}</h2>
          <h3>
            Season {last_episode_to_air.season_number}-episode
            {last_episode_to_air.episode_number}- {last_episode_to_air.runtime}
            min
          </h3>
          <h4>{last_episode_to_air.air_date}</h4>
          <p>{last_episode_to_air.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Series;
