import { getPeopleDetail } from "@/ApiConfig";
import Footer from "@/components/Footer";
import PersonCredit from "@/components/PersonCredit";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { personId: number } }) => {
  const id: number = params.personId;

  const data = await getPeopleDetail(id);

  return (
    <main>
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center py-16  gap-6 ">
        <div className="w-full md:w-[30%] flex justify-center">
          <div className="w-52 md:w-80 aspect-square ">
            <Image
              src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
              alt="profile "
              width={400}
              height={400}
              className="rounded-md shadow-md shadow-purple-400 mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-[60%] px-4">
          <h1 className="text-2xl font-bold font-serif">
            {data.name} (<span className="font-sans">{data.birthday}</span>)
          </h1>
          <div>
            <span className="px-4 py-1.5 border border-pink-500 rounded-full ">
              {data.known_for_department}
            </span>
          </div>
          <div className="flex flex-wrap  items-center text-lg font-semibold">
            <h3 className=" ">Bron in -</h3>
            <p>({data.place_of_birth})</p>
          </div>
          <div className="text-center md:text-start">
            <h2 className="text-xl font-semibold">Biography</h2>
            <p className="text-sm md:text-base line-clamp-[10] font-serif mt-2 text-pretty">
              {data.biography}
            </p>
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
