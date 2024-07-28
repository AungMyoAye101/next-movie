import React from "react";
import Image from "next/image";
import Info from "./Info";
import Footer from "./Footer";
import Series from "./Series";
import Table from "./Table";
interface Detail {
  media_type: string;
  id: number;
}

const Details = async ({ media_type, id }: Detail) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();

  return (
    <>
      <div
        className="hero place-items-start hidden md:grid "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            data.backdrop_path || data.poster_path
          })`,
          maxHeight: "80vh",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="p-4 flex gap-1 ">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              data.poster_path || data.backdrop_path
            }  `}
            width={300}
            height={200}
            alt="posters"
            className="rounded "
          />

          <Info
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
            genres={data.genres}
            lg_screen={true}
            created_by={data.created_by}
          />
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}  `}
            width={500}
            height={300}
            alt="posters"
            className="rounded aspect-video object-fill "
          />
        </div>

        <Info
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
          genres={data.genres}
          lg_screen={false}
          created_by={data.created_by}
        />
      </div>
      <div>
        {/* table */}
        <Table
          status={data.status}
          budget={data.budget}
          production={data.production_companies}
          homePage={data.homePage}
        />
        {media_type === "tv" && (
          <Series
            next_episode_to_air={data.next_episode_to_air}
            last_episode_to_air={data.last_episode_to_air}
          />
        )}

        <Footer />
      </div>
    </>
  );
};

export default Details;
