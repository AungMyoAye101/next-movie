"use client";

import React from "react";
import Image from "next/image";
import Count from "./Count";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GiH2O } from "react-icons/gi";

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

  created_by: { id: number; name: string }[];
}

const Info = ({
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
  created_by,
}: InfoDetail) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className=" flex flex-col gap-2 w-full md:max-w-2xl"
    >
      <h1 className=" text-2xl font-serif font-bold">
        {name || original_name || original_title}
      </h1>
      {total_season && <h2>Seasons {total_season}</h2>}
      <h3 className="font-serif italic ">{tagline}</h3>
      <div className="flex flex-col  gap-4 md:flex-row items-center">
        <button className="btn btn-neutral rounded-3xl text-bold text-lg w-full md:max-w-60 hover:bg-blue-400 hover:text-gray-800">
          Add To Watchlist
        </button>
        <button className="btn btn-circle btn-outline border-none text-slate-200 bg-gray-600">
          share
        </button>
      </div>
      <div>
        <h2 className="text-lg font-mono font-semibold text-center md:text-left">
          STORYLINE
        </h2>
        <p className="text-pretty text-center md:text-left">{overview}</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex ">
          <h3 className="text-md font-mono min-w-48 opacity-40">Rating</h3>
          <p>{vote_average.toFixed(1)}</p>
        </div>
        <div className="flex   ">
          <h3 className="text-md font-mono min-w-48 opacity-40">
            Released Date
          </h3>
          <p>{release_date || first_air_date}</p>
        </div>
        <div className="flex ">
          <h3 className="text-md font-mono min-w-48 opacity-40">Genre</h3>
          <p className="flex flex-wrap gap-1">
            {genres.map((item: { id: number; name: string }) => (
              <span
                key={item.id}
                className="text-md hover:bg-gray-300 hover:text-black  rounded"
              >
                {item.name}
              </span>
            ))}
          </p>
        </div>
        {runtime && (
          <div className="flex  ">
            <h3 className="text-md font-mono min-w-48 opacity-40">Duration</h3>
            <p>
              {Math.floor(runtime / 60)}h {runtime % 60} min
            </p>
          </div>
        )}
      </div>

      {created_by && (
        <div className="flex gap-3 ">
          <h1>Created By-</h1>
          {created_by.map((item) => (
            <div key={item.id}>
              <h3 className="text-md font-semibold">{item.name} </h3>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Info;
