import PersonCredit from "@/components/PersonCredit";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { personId: number } }) => {
  const id: number = params.personId;
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <div className="flex gap-6 flex-wrap md:flex-nowrap py-4 px-6">
        <div className="min-w-80">
          <Image
            src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
            alt="profile "
            width={400}
            height={400}
            objectFit="cover"
            className="rounded shadow"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-serif">{data.name}</h1>
          <div>
            <h2 className="text-xl font-semibold">Biography</h2>
            <p className="text-sm font-serif mt-2 text-pretty">
              {data.biography}
            </p>
          </div>
          <div className="flex justify-between p-4 flex-wrap">
            <div>
              <h3 className="text-lg font-semibold ">Birthday</h3>
              <p>{data.birthday}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold ">Role</h3>
              <p>{data.known_for_department}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold ">Place of birth</h3>
              <p>{data.place_of_birth}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 space-y-2">
        <h1 className="text-xl font-semibold font-serif">Know For</h1>
        <PersonCredit person_id={id} />
      </div>
    </main>
  );
};

export default page;
