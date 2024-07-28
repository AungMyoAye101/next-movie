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
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-4 p-4">
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="card card-compact bg-base-100 shadow-md rounded-lg max-w-6xl mx-auto hover:opacity-80 hover:shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          exit={{ opacity: 0 }}
        >
          <Link
            href={`/${item.media_type || "movie"}/${item.id} `}
            className="relative "
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="overflow-hidden"
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  item.backdrop_path || item.poster_path
                }`}
                width={300}
                height={200}
                alt="posters"
                className="rounded object-cover aspect-video hover:scale-110 transition-all duration-150 ease-in-out"
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
            <h2 className="card-title font-serif line-clamp-1 text-lg">
              {item.title || item.original_name}
            </h2>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
