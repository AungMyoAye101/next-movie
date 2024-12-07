"use client";
import React, { useRef } from "react";
import { CardProps } from "./CardGridCon";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const VideoCon = ({ data }: any) => {
  console;
  const scrollContainer = useRef<HTMLDivElement>(null);
  const scrollBtn = (isRight: boolean) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: isRight ? 300 : -300,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative ">
      <button
        className="p-2 rounded-full absolute top-1/2 left-0 z-10 shadow-md bg-pink-500"
        onClick={() => scrollBtn(false)}
      >
        <FaLessThan className="text-lg text-gray-100" />
      </button>
      <button
        className="p-2 rounded-full absolute top-1/2 right-0 z-10 shadow-md bg-pink-500"
        onClick={() => scrollBtn(true)}
      >
        <FaGreaterThan className="text-lg text-gray-100" />
      </button>

      <main
        ref={scrollContainer}
        className="flex overflow-hidden overflow-x-scroll gap-4 py-4 scroll-bar"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* {data.map((item) => (
          <Link href={`${item.media_type}/${item.id}`} key={item.id}>
            <div className="overflow-hidden rounded-md">
              <Image
                src={item.poster_path}
                alt={item.original_name}
                width={300}
                height={500}
                className="object-cover"
              />
            </div>
            <div>
              <h1>{item.title || item.original_name}</h1>
            </div>
          </Link>
        ))} */}
      </main>
    </section>
  );
};

export default VideoCon;
