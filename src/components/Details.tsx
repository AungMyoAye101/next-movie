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
    <div className="min-h-screen py-16   flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 md:text-gray-100  ">
      <div className="absolute inset-0 z-0 bg-gray-600 bg-opacity-70 hidden md:block"></div>
      <div className="absolute  inset-0 -z-10 hidden md:block">
        <div className="relative w-full h-full ">
          <Image
            src={`https://image.tmdb.org/t/p/original${backdrop_path}  `}
            fill
            alt="posters"
            className="rounded-lg shadow-md  shadow-purple-400"
          />
        </div>
      </div>

      <div className="relative w-72 aspect-square">
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
        className=" flex flex-col gap-4 w-full md:w-[45%] lg:w-[50%] relative z-10"
      >
        <h1 className=" text-2xl font-serif font-bold text-center lg:text-left">
          {name || original_name || original_title}{" "}
          <span className="font-sans  font-semibold">
            ( {release_date || first_air_date} )
          </span>
        </h1>
        <p className="flex flex-wrap gap-2 justify-center md:justify-start">
          {genres.map((item: { id: number; name: string }) => (
            <span
              key={item.id}
              className="text-base bg-pink-500    rounded-full  px-3 py-0.5 "
            >
              {item.name}
            </span>
          ))}
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4">
          <Count rating={vote_average} />
          {created_by && (
            <div className="flex gap-2  font-serif">
              {created_by.map((item) => (
                <div key={item.id}>
                  <h3 className="text-lg font-semibold">{item.name} </h3>
                </div>
              ))}
            </div>
          )}
          {runtime && (
            <h3 className="text-lg   ">
              ( runtime -{" "}
              <span>
                {Math.floor(runtime / 60)}h {runtime % 60} min
              </span>
              )
            </h3>
          )}
        </div>

        <div>
          <p className="text-base md:text-lg font-serif text-center  md:text-left">
            {overview}
          </p>
        </div>

        <button className="self-center md:self-start px-6 py-1.5 rounded-full  bg-pink-500 shadow-md hover:scale-110 transition-transform ease-out">
          Add to watch list
        </button>
      </motion.div>
    </div>
  );
};

export default Details;
