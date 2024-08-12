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
      {personalInfo.map((person: any) => (
        <div key={person.id} className="min-w-60 ">
          <Link href={`/${person.media_type || "movie"}/${person.id} `}>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                person.backdrop_path || person.poster_path
              }`}
              width={400}
              height={200}
              alt="posters"
              className="rounded aspect-video object-cover hover:scale-110 transition-all duration-150 ease-in-out"
            />
            <div>
              <h1 className="text-lg font-semibold p-2">
                {person.name || person.original_name || person.title}
              </h1>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default PersonCredit;
