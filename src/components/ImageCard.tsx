"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Count from "./Count";

interface CardDetailProps {
  id: number;
  media_type: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  name: string | null;
  title: string;
  original_name: string;
}
const ImageCard = ({
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
        className="card card-compact bg-base-100 shadow-md rounded-lg min-w-60 mx-auto hover:opacity-80 hover:shadow-xl"
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
            className="overflow-hidden"
          >
            <Image
              src={imgSrc}
              width={400}
              height={200}
              alt="posters"
              className="rounded aspect-video object-cover hover:scale-110 transition-all duration-150 ease-in-out"
              onError={(e) => setimgSrc("/failedImg.jpg")}
            />
          </motion.div>

          <div className="absolute -bottom-2 right-0">
            <Count rating={vote_average} />
          </div>
        </Link>

        <motion.div
          className="card-body p-2"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <h2 className="card-title font-serif text-lg line-clamp-2">
            {name || title || original_name}
          </h2>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ImageCard;
