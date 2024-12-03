"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Count from "./Count";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

export interface CardData {
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
    <div className="py-2 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-4 ">
      {data.map((item) => (
        <div key={item.id}>
          <ImageCard
            id={item.id}
            media_type={item.media_type}
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            name={null}
            title={item.title}
            original_name={item.original_name}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
