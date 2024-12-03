import { getMovie, getMovieDetails } from "@/ApiConfig";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import SearchNav from "@/components/SearchNav";
import React from "react";

const page = async () => {
  const res = await getMovie("trending/movie/day");
  const data = res.results;

  return (
    <div className=" px-4 md:px-12 py-16">
      <h1 className="text-xl font-bold font-serif">Movie</h1>
      <Card data={data} />
    </div>
  );
};

export default page;

