import { getTv } from "@/ApiConfig";
import Card from "@/components/CardGridCon";
import Footer from "@/components/Footer";
import React from "react";

const page = async () => {
  const res = await getTv("trending/tv/day");
  const data = res.results;

  return (
    <div className=" px-4 md:px-12 py-16">
      <h1 className="text-xl font-bold font-serif mb-4">Tv Shows</h1>
      <Card data={data} />
    </div>
  );
};

export default page;
