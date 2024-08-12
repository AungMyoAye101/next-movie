import React from "react";
import ImageCard from "./ImageCard";
import Image from "next/image";
import Link from "next/link";

interface PersonCreditProps {
  person_id: number;
}
const PersonCredit = async ({ person_id }: PersonCreditProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${person_id}/combined_credits?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  const personalInfo = data.cast;
  console.log(personalInfo);
  return (
    <section className="flex overflow-hidden overflow-x-scroll gap-4">
      {personalInfo.map((item: any) => (
        <ImageCard
          id={item.id}
          media_type={item.media_type}
          backdrop_path={item.backdrop_path}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          title={item.title}
          original_name={item.original_name}
        />
      ))}
    </section>
  );
};

export default PersonCredit;
