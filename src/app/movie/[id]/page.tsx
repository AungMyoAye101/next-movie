import Details from "@/components/Details";
import React from "react";

const MoviePage = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <Details media_type="movie" id={params.id} />
    </div>
  );
};

export default MoviePage;
