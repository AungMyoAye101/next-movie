import Image from "next/image";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { CreditProps } from "./CastCredit";
const Review = async ({ media, id }: CreditProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media}/${id}/reviews?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log(data);
  return (
    <div className="flex gap-4 overflow-hidden overflow-x-scroll">
      {data.results.map((item: any) => (
        <div
          className="min-w-80 h-40 rounded border border-gray-300 p-2 space-y-2 "
          key={item.id}
        >
          <div className="flex items-center">
            <MdAccountCircle className="size-14 " />
            <div>
              <h1>{item.author}</h1>
              <h2>{item.created_at}</h2>
            </div>
          </div>
          <div>
            <p className="line-clamp-3">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
