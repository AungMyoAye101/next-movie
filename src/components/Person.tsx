"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PersonData {
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  know_for_department: string;
  profile_path: string;
}
interface DataProp {
  data: PersonData[];
}
const Person = ({ data }: DataProp) => {
  return (
    <div className=" grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto  gap-4 ">
      {data.map((data) => (
        <motion.div
          key={data.id}
          className="rounded bg-base-100 shadow-sm hover:shadow-lg p-2 hover:text-purple-500"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          exit={{ opacity: 0 }}
        >
          <Link href={`/person/${data.id}`}>
            <div className="overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
                alt="person "
                width={300}
                height={400}
                objectFit="cover"
                className="rounded hover:scale-110 transition-transform ease-in-out"
              />
            </div>
            <motion.div
              className="p-2"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <h1 className="text-lg font-serif font-semibold">
                {data.name || data.original_name}
              </h1>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Person;
