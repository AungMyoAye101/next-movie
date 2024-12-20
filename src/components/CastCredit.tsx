import Image from "next/image";
import React, { useRef } from "react";
import Person from "./Person";
import Link from "next/link";
import PeopleCard from "./PeopleCard";
import { getCast } from "@/ApiConfig";

export interface CreditProps {
  media: string;
  id: number;
}

const CastCredit = async ({ media, id }: CreditProps) => {
  const data = await getCast(media, id);

  return (
    <section className="px-4 md:px-12 space-y-2">
      <h1 className="text-xl font-semibold font-serif">Cast List</h1>

      <main className="flex overflow-hidden overflow-x-scroll gap-4 scroll-bar ">
        {data.cast.map((data: any) => (
          <div key={data.id} className="min-w-48 py-4 ">
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
