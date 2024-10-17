import CastCredit from "@/components/CastCredit";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Recommendation from "@/components/Recommendation";
import Review from "@/components/Review";
import React from "react";

const TvShow = async ({ params }: { params: { id: number } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return (
    <div className="px-4 py-20 ">
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
        number_of_seasons={data.number_of_seasons}
        season_number={data.season_number}
        genres={data.genres}
        created_by={data.created_by}
      />
      <div>
        <CastCredit media="tv" id={params.id} />
        <Review media="tv" id={params.id} />
      </div>
      <div>
        <Recommendation media_type="tv" id={params.id} />
      </div>
    </div>
  );
};

export default TvShow;
