import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PersonData {
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  know_for_department: string;
  profile_path: string;
}
interface DataProp {
  data: PersonData[];
}
const Person = ({ data }: DataProp) => {
  return (
    <div className=" grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto  gap-4 ">
      {data.map((data) => (
        <div
          key={data.id}
          className="rounded bg-base-100 shadow-sm hover:shadow-lg p-2"
        >
          <Link href={`/person/${data.id}`}>
            <div className="overflow-hidden">
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
              <h1>{data.name || data.original_name}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Person;
