import { getTrailer } from "@/ApiConfig";
import React from "react";

interface videoType {
  type: string;
  key: string;
  id: string;
}

const Video = async ({ type, id }: { type: string; id: number }) => {
  const trailerData = await getTrailer(type, id);

  const trailer = trailerData.results.filter(
    (video: videoType) => video.type === "Trailer" || video.type === "Teaser"
  );

  return (
    <section className="px-4 md:px-12 py-6 space-y-6">
      <h1 className="text-lg md:text-2xl font-semibold ">Trailer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trailer.map((item: videoType) => (
          <div key={item.id} className=" bg-gray-300 rounded-md">
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
