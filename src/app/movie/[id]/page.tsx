import Details from "@/components/Details";
import React from "react";

const MoviePage = async ({ params }: { params: { id: number } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <Details
        backdrop_path={data.backdrop_path}
        id={data.id}
        title={data.title}
        name={data.name}
        original_name={data.original_name}
        original_title={data.original_title}
        overview={data.overview}
        poster_path={data.poster_path}
        release_date={data.release_date}
        first_air_date={data.first_air_date}
        vote_average={data.vote_average}
        runtime={data.runtime}
        tagline={data.tagline}
        total_season={data.number_of_seasons}
        genres={data.genres}
      />
    </div>
  );
};

export default MoviePage;
