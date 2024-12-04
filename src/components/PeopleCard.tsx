"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface PersonData {
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
}

const PeopleCard = ({ id, name, original_name, profile_path }: PersonData) => {
  return (
    <motion.div
      key={id}
      className=" hover:text-purple-500 rounded-md shadow-md border border-purple-100 hover:shadow-purple-400"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      exit={{ opacity: 0 }}
    >
      <Link href={`/people/${id}`}>
        <div className="overflow-hidden rounded-md ">
          <Image
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt="person "
            width={220}
            height={260}
            objectFit="cover"
            className=" hover:scale-110 transition-transform ease-in-out "
          />
        </div>
        <motion.div
          className="p-2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          <h4 className="text-lg font-serif font-semibold">
            {name || original_name}
          </h4>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default PeopleCard;
