import Image from "next/image";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { CreditProps } from "./CastCredit";
import DateString from "./DateString";
const Review = async ({ media, id }: CreditProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${media}/${id}/reviews?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return (
    <section>
      <h1 className="text-xl font-semibold font-serif text-center my-2">
        Reviews
      </h1>

      <div className="grid md:grid-cols-2 max-w-3xl gap-4 mx-auto">
        {data.results.slice(0, 4).map((item: any) => (
          <div
            className="min-w-40 md:min-w-80  rounded border border-gray-300 p-2 space-y-2 "
            key={item.id}
          >
            <div className="flex items-center">
              <MdAccountCircle className="size-14 " />
              <div>
                <h1 className="text-lg font-semibold">{item.author}</h1>

                <DateString dateString={item.created_at} />
              </div>
            </div>
            <div>
              <p className="line-clamp-3">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
