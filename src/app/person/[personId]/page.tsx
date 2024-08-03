import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { personId: number } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${params.personId}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();

  return (
    <div className="flex gap-4 px-4 w-screen mx-auto mt-6 flex-wrap ">
      <div className="min-w-60 max-w-72 " style={{ width: "40%" }}>
        <Image
          src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
          alt="profile "
          width={400}
          height={200}
          objectFit="cover"
          className="rounded shadow"
        />
      </div>
      <div style={{ width: "70%" }}>
        <h1 className="text-2xl font-bold font-serif">{data.name}</h1>
        <div>
          <h2 className="text-xl font-semibold">Biography</h2>
          <p className="text-sm ">{data.biography}</p>
        </div>
        <div className="flex justify-between p-4">
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
  );
};

export default page;
