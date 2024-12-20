import { getMovieDetails, getRecommendations } from "@/ApiConfig";
import CastCredit from "@/components/CastCredit";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Recommendation from "@/components/Recommendation";
import Video from "@/components/Video";
import React from "react";

const MoviePage = async ({ params }: { params: { id: number } }) => {
  const data = await getMovieDetails(params.id);
  const recommed = await getRecommendations("movie", data.id);

  return (
    <section className="  px-4">
      <Details
        type="movie"
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
        number_of_seasons={data.number_of_seasons}
        season_number={data.season_number}
        genres={data.genres}
        created_by={data.created_by}
      />

      <div>
        <Video type="movie" id={data.id} />
        <CastCredit media="movie" id={params.id} />
      </div>
      <div>
        <Recommendation data={recommed.results} />
      </div>
    </section>
  );
};

export default MoviePage;
