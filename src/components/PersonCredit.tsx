import React from "react";
import ImageCard from "./Card";
import Image from "next/image";
import Link from "next/link";
import { getPersonCredit } from "@/ApiConfig";

interface PersonCreditProps {
  person_id: number;
}
const PersonCredit = async ({ person_id }: PersonCreditProps) => {
  const data = await getPersonCredit(person_id);
  const personalInfo = data.cast;

  return (
    <section className="py-4 flex overflow-hidden overflow-x-scroll gap-4 scroll-bar">
      {personalInfo.map((item: any) => (
        <div key={item.id}>
          <ImageCard
            id={item.id}
            media_type={item.media_type}
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            name={item.name}
            title={item.title}
            original_name={item.original_name}
          />
        </div>
      ))}
    </section>
  );
};

export default PersonCredit;
