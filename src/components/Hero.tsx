import React from "react";
interface BgImage {
  image: string;
}
const Hero = ({ image }: BgImage) => {
  return (
    <div
      className="hero min-h-96 "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content ">
        <div className="max-w-full">
          <h1 className="mb-5 text-5xl font-bold">Welcome.</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex text-lg ">
            <input
              type="Text"
              placeholder="Search for a movie or Tv shows..."
              className="input input-bordered input-info w-full rounded-3xl bg-slate-50 bg-opacity-50 outline-0 text-gray-800 placeholder-gray-800"
            />
            <button className="btn btn-info rounded-3xl px-10 -ml-12 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
