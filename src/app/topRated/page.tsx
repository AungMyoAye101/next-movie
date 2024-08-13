import Card from "@/components/Card";
import Footer from "@/components/Footer";
import SearchNav from "@/components/SearchNav";
import React from "react";

const page = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const resData = await res.json();
  const data = resData.results;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Top Rating</h1>
      <Card data={data} />
      <Footer />
    </div>
  );
};

export default page;
