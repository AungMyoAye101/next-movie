import SearchNav from "@/components/SearchNav";
import SearchResult from "@/components/SearchResult";
import React from "react";

const page = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const resData = await res.json();
  const data = resData.results;

  return (
    <div>
      <h1 className="text-xl font-bold p-4">Trending</h1>
      <SearchResult data={data} />
    </div>
  );
};

export default page;