import Image from "next/image";
import React from "react";
import Person from "./Person";
import Link from "next/link";
import PeopleCard from "./PeopleCard";

interface CreditProps {
  media: string;
  id: number;
}

const CastCredit = async ({ media, id }: CreditProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();

  return (
    <section className="p-6 space-y-2">
      <h1 className="text-xl font-semibold font-serif">Cast List</h1>
      <main className="flex overflow-hidden overflow-x-scroll gap-4 ">
        {data.cast.map((data: any) => (
          <div key={data.id} className="min-w-60">
            <PeopleCard
              id={data.id}
              name={data.name}
              original_name={data.original_name}
              profile_path={data.profile_path}
            />
          </div>
        ))}
      </main>
    </section>
  );
};

export default CastCredit;
