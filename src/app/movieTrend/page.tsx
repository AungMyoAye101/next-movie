import Card from "@/components/Card";
import SearchNav from "@/components/SearchNav";
import React from "react";

const page = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const resData = await res.json();
  const data = resData.results;

  return (
    <div>
      <h1 className="text-xl font-bold p-4">Movie</h1>
      <Card data={data} />
    </div>
  );
};

export default page;
