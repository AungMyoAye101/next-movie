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
      className={`prose px-4  space-y-2  mx-auto ${
        lg_screen ? "hidden md:block text-slate-200" : "block md:hidden"
      }`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <h1 className="text-3xl  font-bold font-serif">
        {name || original_name || original_title}
      </h1>
      <h2>{first_air_date || release_date}</h2>
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
      <div className="space-x-2">
        <button className="btn btn-circle bg-green-500">
          <FaBars className=" text-lg text-slate-200" />
        </button>
        <button className="btn btn-circle bg-green-500">
          <FaHeart className=" text-lg text-slate-200" />
        </button>
        <button className="btn btn-circle bg-green-500">
          <FaBookmark className=" text-lg text-slate-200" />
        </button>
      </div>
      <h3 className="font-serif">{tagline}</h3>
      <div>
        <h2 className="text-lg font-bold">OverView</h2>
        <p className="text">{overview}</p>
      </div>
      {created_by && (
        <div className="flex gap-2">
          {created_by.map((item) => (
            <div key={item.id}>
              <h2 className="text-lg font-serif">{item.name} </h2>
              <p>Creator</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Info;
