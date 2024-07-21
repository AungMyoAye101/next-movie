import Details from "@/components/Details";
import React from "react";

const TvShow = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <Details media_type="tv" id={params.id} />
    </div>
  );
};

export default TvShow;
