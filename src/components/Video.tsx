import { getTrailer } from "@/ApiConfig";
import React from "react";

interface videoType {
  type: string;
  key: string;
  id: string;
}

const Video = async ({ movie_id }: { movie_id: number }) => {
  const trailerData = await getTrailer(movie_id);

  const trailer = trailerData.results.filter(
    (video: videoType) => video.type === "Trailer" || video.type === "Teaser"
  );
  console.log(trailer);
  return (
    <section className="px-4 md:px-12 py-6 space-y-6">
      <h1 className="text-lg md:text-2xl font-semibold ">Trailer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {trailer.map((item: videoType) => (
          <div key={item.id} className="min-w-80 bg-gray-300">
            <iframe
              src={`https://www.youtube.com/embed/${item.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-md aspect-video"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;
