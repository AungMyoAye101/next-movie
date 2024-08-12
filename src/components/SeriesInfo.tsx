"use client";

import React from "react";
import { SeriesType } from "./Series";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

interface Info {
  data: SeriesType;
  ep_time: string;
}

const SeriesInfo = ({ data, ep_time }: Info) => {
  return (
    <div className="border border-gray-600 my-2 p-2 shadow-sm rounded flex flex-wrap gap-4">
      <Image
        src={`https://image.tmdb.org/t/p/original${data.still_path}`}
        width={400}
        height={200}
        alt="posters"
        className="rounded aspect-video object-cover hover:scale-110 transition-all duration-150 ease-in-out"
      />

      <motion.div
        className="space-y-1 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <h1 className="text-lg font-serif">{ep_time}</h1>
        <h2 className="text-xl font-bold">{data.name}</h2>
        <h3 className="font-serif ">
          ( Season {data.season_number}-episode
          {data.episode_number}- {data.runtime}
          min)
        </h3>
        <p>{data.air_date}</p>
      </motion.div>
    </div>
  );
};

export default SeriesInfo;
