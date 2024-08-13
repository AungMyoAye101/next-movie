import React from "react";
import Person from "./Person";

const PeopleData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&page=1`,
    { next: { revalidate: 3600 } }
  );
  const resData = await res.json();
  const data = resData.results;
  return (
    <div>
      <Person data={data} />
    </div>
  );
};

export default PeopleData;
