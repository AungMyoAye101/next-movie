import { getTv } from "@/ApiConfig";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import SearchNav from "@/components/SearchNav";
import React from "react";

const page = async () => {
  const data = await getTv("trending/tv/day");

  return (
    <div className=" px-4">
      <h1 className="text-xl font-bold mb-4">Tv Shows</h1>
      <Card data={data} />
    </div>
  );
};

export default page;
