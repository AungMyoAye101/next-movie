"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import Series from "./Series";
import { motion } from "framer-motion";
import Count from "./Count";

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
    <div className="min-h-screen  flex flex-col md:flex-row items-center justify-center gap-4 ">
      <div className="relative w-full sm:w-[90%] md:w-[30%] h-auto mx-auto aspect-square">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            poster_path || backdrop_path
          }  `}
          width={400}
          height={400}
          alt="posters"
          className="rounded-lg shadow-md "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className=" flex flex-col gap-4 w-full md:w-[45%] lg:w-[50%]"
      >
        <h1 className=" text-2xl font-serif font-bold text-center lg:text-left">
          {name || original_name || original_title}{" "}
          <span className="font-sans  font-semibold">
            ( {release_date || first_air_date} )
          </span>
        </h1>
        <p className="flex flex-wrap gap-2">
          {genres.map((item: { id: number; name: string }) => (
            <span
              key={item.id}
              className="text-base    rounded-full shadow shadow-purple-300 px-3 py-0.5 "
            >
              {item.name}
            </span>
          ))}
        </p>
        <Count rating={vote_average} />

        <div>
          <p className="text-base md:text-lg font-serif text-center  md:text-left">
            {overview}
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

        {created_by && (
          <div className="flex gap-3 items-center font-serif">
            <h2 className="text-md font-semibold">Creator-</h2>
            {created_by.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg font-semibold">{item.name} </h3>
              </div>
            ))}
          </div>
        )}
        <button className="self-start px-4 py-1 rounded-full text-lg font-serif  bg-purple-500 shadow-md">
          Add to watch list
        </button>
      </motion.div>
    </div>
  );
};

export default Details;
