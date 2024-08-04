"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import Footer from "./Footer";
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
interface ProfileProp {
  profile: string;
}
const SearchResult = ({ data }: CardProps) => {
  return (
    <>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-4">
        {data.map((item) => (
          <Link
            href={`/${item.media_type || "movie"}/${item.id}`}
            key={item.id}
            className="rounded shadow hover:text-info"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              exit={{ opacity: 0 }}
            >
              <div>
                <ImageCard
                  img={`https://image.tmdb.org/t/p/original${
                    item.backdrop_path || item.poster_path
                  }`}
                />
              </div>

              <motion.div
                className="space-y-1 p-2"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
              >
                <h2 className="text-lg line-clamp-2 font-bold">
                  {item.title || item.original_name}
                </h2>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
