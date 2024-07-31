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
  lg_screen: Boolean;
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
  lg_screen,
  created_by,
}: InfoDetail) => {
  return (
    <motion.div
      className={`px-4  space-y-2  mx-auto  ${
        lg_screen ? "hidden md:block" : "block md:hidden"
      }`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <h1 className=" text-xl font-serif">
        {name || original_name || original_title}
      </h1>
      <h3>{first_air_date || release_date}</h3>
      <div className="flex gap-2 ">
        {genres.map((item: { id: number; name: string }) => (
          <span key={item.id} className="text-md hover:text-primary">
            {item.name}
          </span>
        ))}

        {runtime && (
          <p>
            - {Math.floor(runtime / 60)}h {runtime % 60}min
          </p>
        )}
      </div>
      <div className="flex items-center gap-1">
        <Count rating={vote_average} />
        <span>User Score</span>
      </div>

      <h3 className="font-serif italic">{tagline}</h3>
      <div>
        <h2 className="text-lg font-semibold">OverView</h2>
        <p className="">{overview}</p>
      </div>
      {created_by && (
        <div className="flex gap-2">
          {created_by.map((item) => (
            <div key={item.id}>
              <h3 className="">{item.name} </h3>
              <p>Creator</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Info;
