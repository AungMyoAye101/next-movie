import React from "react";

const Video = async ({ movie_id }: { movie_id: number }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/1241982/videos?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const resData = await res.json();
  console.log(resData);
  const data = resData.results;

  console.log(data);

  return (
    <section>
      <h1>video</h1>
      <div>
        <video src={`https://www.youtube.com/`} className="size-40"></video>
      </div>
    </section>
  );
};

export default Video;
