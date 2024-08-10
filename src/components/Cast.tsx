import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cast = async () => {
  const series_id = "94997";
  const season_number = "2";
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log(data);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-semibold font-serif mb-2">Cast List</h1>
      <div className=" flex overflow-hidden overflow-x-scroll  gap-4 ">
        {data.episodes["0"].guest_stars.map((data: any) => (
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
