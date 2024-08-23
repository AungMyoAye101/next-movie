import React from "react";
import ImageCard from "./ImageCard";

interface RecommedProps {
  media_type: string;
  id: number;
}
const Recommendation = async ({ media_type, id }: RecommedProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return (
    <section className="px-6 py-4 space-y-2">
      <h1 className="text-xl font-semibold font-serif ">Recommendations</h1>
      <main className="flex overflow-hidden overflow-x-scroll gap-4  scroll-bar">
        {data.results.map((item: any) => (
          <div key={item.id}>
            <ImageCard
              id={item.id}
              media_type={item.media_type}
              backdrop_path={item.backdrop_path}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              name={item.name}
              title={item.title}
              original_name={item.original_name}
            />
          </div>
        ))}
      </main>
    </section>
  );
};

export default Recommendation;
