"use client";
import React, { useRef } from "react";
import Card from "./Card";
import { getRecommendations } from "@/ApiConfig";
import { CardData, CardProps } from "./CardGridCon";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Recommendation = async ({ data }: CardProps) => {
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
    <>
      <section className="px-6 py-4 space-y-2 relative">
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
        <h1 className="text-xl font-semibold font-serif ">Recommendations</h1>
        <main
          ref={scrollContainer}
          className="flex overflow-hidden overflow-x-scroll gap-4 py-4 scroll-bar"
          style={{ scrollBehavior: "smooth" }}
        >
          {data.map((item) => (
            <div key={item.id}>
              <Card
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
        </main>
      </section>
    </>
  );
};

export default Recommendation;
