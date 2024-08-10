"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Count from "./Count";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

interface CardData {
  backdrop_path: string;
  id: number;
  title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}
export interface CardProps {
  data: CardData[];
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-4 px-6">
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
            <ImageCard
              img={`https://image.tmdb.org/t/p/original${
                item.backdrop_path || item.poster_path
              }`}
            />

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
            <h2 className="card-title font-serif text-lg">
              {item.title || item.original_name}
            </h2>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
