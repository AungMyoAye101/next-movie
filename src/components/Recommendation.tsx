import React from "react";
import Card from "./Card";
import { getRecommendations } from "@/ApiConfig";
import { CardData, CardProps } from "./CardGridCon";

const Recommendation = async ({ data }: CardProps) => {
  console.log(data);
  return (
    <>
      <section className="px-6 py-4 space-y-2">
        <h1 className="text-xl font-semibold font-serif ">Recommendations</h1>
        <main className="flex overflow-hidden overflow-x-scroll gap-4 py-4 scroll-bar">
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
