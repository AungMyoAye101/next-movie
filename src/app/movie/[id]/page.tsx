import Details from "@/components/Details";
import React from "react";

const MoviePage = async ({ params }: { params: { id: number } }) => {
  return (
    <div className="bg-gradient-to-tr from-gray-900 to-gray-600 p-8 ">
      <Details media_type="movie" id={params.id} />
    </div>
  );
};

export default MoviePage;
