"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Count from "./Count";
import { CardProps } from "./Results";
import FallbackImg from "./FallbackImg";
import { motion } from "framer-motion";
const cardContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    duration: 0.5,
  },
};
const Card = ({ data }: CardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-4 p-4">
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="card card-compact bg-base-100 shadow-xl rounded-lg max-w-6xl mx-auto hover:opacity-80 "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link
            href={`/${item.media_type || "movie"}/${item.id} `}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  item.poster_path || item.backdrop_path
                }`}
                width={300}
                height={300}
                alt="posters"
                className="rounded object-cover aspect-video"
              />
            </motion.div>
            <div className="absolute -bottom-2 right-0">
              <Count rating={item.vote_average} />
            </div>
          </Link>

          <motion.div
            className="card-body p-2"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <h2 className="card-title font-serif line-clamp-2">
              {item.title || item.original_name}
            </h2>
            <p>{item.first_air_date || item.release_date}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
