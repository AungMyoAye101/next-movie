"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Count from "./Count";

export interface CardDetailProps {
  id: number;
  media_type: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  name: string | null;
  title: string;
  original_name: string;
}
const Card = ({
  id,
  media_type,
  backdrop_path,
  poster_path,
  vote_average,
  name,
  title,
  original_name,
}: CardDetailProps) => {
  const [imgSrc, setimgSrc] = useState(
    `https://image.tmdb.org/t/p/original${backdrop_path || poster_path}`
  );

  return (
    <>
      <motion.div
        className="shadow rounded-md min-w-72 hover:text-purple-400 hover:shadow-purple-400 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <Link href={`/${media_type || "movie"}/${id} `} className="relative ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="overflow-hidden relative "
          >
            <Image
              src={imgSrc}
              width={400}
              height={200}
              alt="posters"
              className=" aspect-video object-cover hover:scale-110 transition-all duration-150 ease-in-out"
              onError={(e) => setimgSrc("/failedImg.jpg")}
            />
            <div className="absolute bottom-1 right-1">
              <Count rating={vote_average} />
            </div>
          </motion.div>
        </Link>

        <motion.div
          className="card-body px-2 py-1"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <h2 className="font-bold font-serif text-lg line-clamp-1">
            {name || title || original_name}
          </h2>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Card;
