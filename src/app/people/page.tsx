import Person from "@/components/Person";
import SearchNav from "@/components/SearchNav";
import React from "react";

const page = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&page=3`,
    { next: { revalidate: 3600 } }
  );
  const resData = await res.json();
  const data = resData.results;
  console.log(data);
  return (
    <div className="p-6 ">
      <h1 className="text-xl font-bold mb-4">People</h1>
      <Person data={data} />
    </div>
  );
};

export default page;
