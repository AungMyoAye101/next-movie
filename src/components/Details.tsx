"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Series from "./Series";
import { motion } from "framer-motion";
import { watchList } from "@/lib";

interface ListProps {
  image: string;
  title: string;
}
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
  runtime: number;
  tagline: string;
  season_number: number;
  number_of_seasons: number;
  genres: { id: number; name: string }[];
  created_by: { id: number; name: string }[];
}

const Details = ({
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
  runtime,
  tagline,
  season_number,
  number_of_seasons,
  genres,
  created_by,
}: InfoDetail) => {
  return (
    <div className="px-6   flex flex-col md:flex-row justify-center gap-6 md:gap-10  w-full ">
      <div className="relative w-full md:w-[30%] h-[50vh] sm:h-[70vh] md:h-[70vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            poster_path || backdrop_path
          }  `}
          fill
          alt="posters"
          className="rounded-lg shadow-md "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className=" flex flex-col gap-4 w-full lg:w-[60%]"
      >
        <h1 className=" text-2xl font-serif font-bold text-center lg:text-left">
          {name || original_name || original_title}
        </h1>

        <h3 className="font-serif italic text-center lg:text-left font-semibold ">
          {tagline}
        </h3>
        <div className="flex flex-col  gap-4 md:flex-row items-center">
          <button
            className="px-6 py-2 rounded-full text-lg font-serif  bg-orange-500 hover:bg-purple-500 shadow-md"
            onClick={() => {
              watchList.push({
                id,
                image: backdrop_path || poster_path,
                title: original_name || original_title,
              });
            }}
          >
            Add To Watchlist
          </button>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl  font-sans font-bold text-center md:text-left">
            STORYLINE
          </h2>
          <p className="text-base md:text-lg font-serif text-center  md:text-left">
            {overview}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap">
            <h3 className="text-lg  font-mono min-w-40 ">Rating</h3>
            <p className="font-sans  font-semibold">
              {vote_average.toFixed(1)}
            </p>
          </div>
          <div className="flex  flex-wrap">
            <h3 className="text-lg  font-mono min-w-40 ">Released Date</h3>
            <p className="font-sans  font-semibold">
              {release_date || first_air_date}
            </p>
          </div>
          <div className="flex flex-wrap">
            <h3 className="text-lg font-mono min-w-40 ">Genre</h3>
            <p className="flex flex-wrap gap-1">
              {genres.map((item: { id: number; name: string }) => (
                <span
                  key={item.id}
                  className="text-base font-serif border border-gray-800 dark:border-gray-300  shadow-lg hover:bg-purple-300 hover:text-black  rounded-full px-3 py-1 "
                >
                  {item.name}
                </span>
              ))}
            </p>
          </div>
          {runtime && (
            <div className="flex  ">
              <h3 className="text-lg font-mono min-w-40 ">Duration</h3>
              <p className="font-sans  font-semibold">
                {Math.floor(runtime / 60)}h {runtime % 60} min
              </p>
            </div>
          )}
        </div>

        {created_by && (
          <div className="flex gap-3 ">
            {created_by.map((item) => (
              <div key={item.id}>
                <h3 className="text-md font-semibold">{item.name} </h3>
                <h4>Creator</h4>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Details;
