"use client";
import React, { useRef } from "react";
import { CardProps } from "./CardGridCon";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { CardDetailProps } from "./Card";

const VideoCon = ({ data }: { data: CardDetailProps[] }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const scrollBtn = (isRight: boolean) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: isRight ? 400 : -400,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative px-4 ">
      <button
        className="p-2 rounded-full absolute top-1/2 left-0 z-10 shadow-md bg-pink-500"
        onClick={() => scrollBtn(false)}
      >
        <FaLessThan className="text-lg text-gray-100" />
      </button>
      <button
        className="p-2 rounded-full absolute top-1/2 right-0 z-20 shadow-md bg-pink-500"
        onClick={() => scrollBtn(true)}
      >
        <FaGreaterThan className="text-lg text-gray-100" />
      </button>

      <main
        ref={scrollContainer}
        className="flex overflow-hidden overflow-x-scroll gap-4 py-4 scroll-bar"
        style={{ scrollBehavior: "smooth" }}
      >
        {data.map((item) => (
          <div key={item.id} className="flex-shrink-0 min-w-64  ">
            <div className="relative w-64 overflow-hidden rounded-md">
              <Image
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt="video poster "
                width={300}
                height={400}
                objectFit="cover"
                className=" hover:scale-110 transition-transform ease-in-out"
              />
            </div>
            <h1 className="font-semibold font-serif p-2">{item.title}</h1>
          </div>
        ))}
      </main>
    </section>
  );
};

export default VideoCon;
