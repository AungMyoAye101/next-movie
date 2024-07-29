"use client";

import { CardProps } from "./Results";
import Image from "next/image";
import Link from "next/link";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import Footer from "./Footer";

const SearchResult = ({ data, searchWord }: CardProps) => {
  return (
    <>
      <h1 className="text-center my-4 text-lg font-serif font-semibold">
        Search results of {searchWord}
      </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-4">
        {data.map((item) => (
          <Link
            href={`/${item.media_type || "movie"}/${item.id} `}
            key={item.id}
            className=" rounded shadow hover:text-info "
          >
            <div>
              <ImageCard
                img={`https://image.tmdb.org/t/p/original${
                  item.backdrop_path || item.poster_path
                } `}
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
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
