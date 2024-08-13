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
    <div className="flex flex-col md:flex-row max-h-80 gap-4 overflow-hidden overflow-y-scroll md:overflow-x-scroll max-w-3xl mx-auto">
      {data.results.map((item: any) => (
        <div
          className="min-w-40  rounded border border-gray-300 p-2 space-y-2 "
          key={item.id}
        >
          <div className="flex items-center">
            <MdAccountCircle className="size-14 " />
            <div>
              <h1 className="text-lg font-semibold">{item.author}</h1>
              <h2 className="text-sm text-gray-400">
                {item.created_at.toLocaleString()}
              </h2>
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
