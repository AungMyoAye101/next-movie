import Image from "next/image";
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
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-4 p-4">
      {data.map((data) => (
        <div key={data.id} className="">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
            alt="person "
            width={300}
            height={400}
            objectFit="cover"
          />
          <div className="p-2">
            <h1>{data.name || data.original_name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Person;
