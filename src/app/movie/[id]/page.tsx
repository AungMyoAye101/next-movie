import Details from "@/components/Details";
import React from "react";

const MoviePage = async ({ params }: { params: { id: number } }) => {
  return (
    <div className=" p-8 ">
      <Details media_type="movie" id={params.id} />
    </div>
  );
};

export default MoviePage;
