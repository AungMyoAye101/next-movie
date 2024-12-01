import { getTrailer } from "@/ApiConfig";
import React from "react";

const Video = async ({ movie_id }: { movie_id: number }) => {
  const trailerData = await getTrailer(movie_id);

  const trailer = trailerData.results.find(
    (video: any) => video.type === "Trailer" && video.site === "YouTube"
  );
  console.log(trailer);
  return (
    <section className="px-4 md:px-12 py-6 space-y-6">
      <h1 className="text-lg md:text-2xl font-semibold ">Trailer</h1>
      <div className="mx-auto">
        {trailer && (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[80vw] rounded-md aspect-video"
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Video;
