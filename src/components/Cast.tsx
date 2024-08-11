import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CastProps {
  series_id: number;
  season_number: number;
}
const Cast = async ({ series_id, season_number }: CastProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}/aggregate_credits?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log(data);
  return (
    <section className="p-6">
      <h1 className="text-2xl font-semibold font-serif mb-2">Cast List</h1>
      <div className=" flex overflow-hidden overflow-x-scroll  gap-4 ">
        {data.cast.map((data: any) => (
          <div
            key={data.id}
            className="rounded bg-base-100 shadow-sm hover:shadow-lg  hover:text-purple-500 w-56"
          >
            <Link href={`/person/${data.id}`}>
              <div className="overflow-hidden w-48">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
                  alt="person "
                  width={300}
                  height={400}
                  objectFit="cover"
                  className="rounded hover:scale-110 transition-transform ease-in-out"
                />
              </div>
              <div className="p-2">
                <h1 className="text-lg font-serif font-semibold">
                  {data.name || data.original_name}
                </h1>
                <h1 className=" ">({data.character})</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cast;
