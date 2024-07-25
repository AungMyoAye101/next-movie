import React from "react";
import Image from "next/image";
import SeriesInfo from "./SeriesInfo";
export interface SeriesType {
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
  return (
    <div className="p-4 space-y-2">
      {next_episode_to_air && (
        <SeriesInfo data={next_episode_to_air} ep_time="Upcomming Episode" />
      )}

      <SeriesInfo data={last_episode_to_air} ep_time="Last Episode" />
    </div>
  );
};

export default Series;
