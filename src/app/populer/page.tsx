import React from "react";

const page = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );
  const data = await res.json();
  return <div>page</div>;
};

export default page;
