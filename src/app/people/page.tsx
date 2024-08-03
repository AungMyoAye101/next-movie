import Person from "@/components/Person";
import SearchNav from "@/components/SearchNav";
import SearchResult from "@/components/SearchResult";
import React from "react";

const page = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.API_KEY}`
  );
  const resData = await res.json();
  const data = resData.results;

  return (
    <div>
      <SearchNav />
      <h1 className="text-xl font-bold p-4">People</h1>
      <Person data={data} />
    </div>
  );
};

export default page;
