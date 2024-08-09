"use client";

import React from "react";
import Image from "next/image";
import Count from "./Count";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { motion } from "framer-motion";

interface InfoDetail {
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
  genres,
  created_by,
}: InfoDetail) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="max-w-96 flex flex-col gap-2"
    >
      <h1 className=" text-2xl font-serif font-bold">
        {name || original_name || original_title}
      </h1>

      <h3 className="font-serif italic text-gray-400">{tagline}</h3>
      <div className="flex flex-col  gap-4 md:flex-row items-center">
        <button className="btn rounded-xl text-bold text-lg min-w-60">
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
          <h3 className="text-md font-mono min-w-60 text-gray-400">Rating</h3>
          <p>{vote_average}</p>
        </div>
        <div className="flex   ">
          <h3 className="text-md font-mono min-w-60 text-gray-400">
            Released Date
          </h3>
          <p>{release_date || first_air_date}</p>
        </div>
        <div className="flex justify-between  ">
          <h3 className="text-md font-mono min-w-60 text-gray-400">Genre</h3>
          <p className="space-x-1">
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
        <div className="flex  ">
          <h3 className="text-md font-mono min-w-60 text-gray-400">Duration</h3>
          <p>
            {Math.floor(runtime / 60)}h {runtime % 60} min
          </p>
        </div>
      </div>

      {created_by && (
        <div className="flex gap-2">
          {created_by.map((item) => (
            <div key={item.id}>
              <h3 className="text-md font-semibold">{item.name} </h3>
              <p>Creator</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Info;
