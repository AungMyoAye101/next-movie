import React from "react";
import Image from "next/image";
import Count from "./Count";
const Details = () => {
  return (
    <div
      className="hero place-items-start "
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/original/zCEjjb1NH3LLsWeZx47wOeqkezf.jpg )",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="p-4 flex gap-1">
        <Image
          src={`https://image.tmdb.org/t/p/original/zCEjjb1NH3LLsWeZx47wOeqkezf.jpg  `}
          width={300}
          height={200}
          alt="posters"
          loading="lazy"
          className="rounded"
        />
        <div className=" px-4 text-slate-200">
          <h1 className="text-4xl font-bold">Monogatari</h1>
          <div className="text-lg py-2">
            <span>Sci-Fi & Fantasy</span>
            <span>Action </span>
          </div>
          <div className="flex items-center gap-1">
            <span>User Score</span>
          </div>
          <div className="flex gap-1 py-2">
            <button className="btn btn-circle">Heart</button>
            <button className="btn btn-circle">Heart</button>
            <button className="btn btn-circle">Heart</button>
          </div>
          <div className="py-2">
            <h2 className="text-xl font-bold">OverView</h2>
            <p>
              Although there are still traces of the brief period he became a
              vampire, third-year high school student Koyomi Araragi is human
              again. He happens upon others with their own supernatural problems
              and finds that he can empathize. Koyomi becomes involved in their
              lives, seeking to help them and occasionally asking for advice
              from Meme Oshino, the homeless man who helped him become human
              again.', poster_path: '/zCEjjb1NH3LLsWeZx47wOeqkezf.jpg
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Creator</h3>
            <p>James Gunn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
