import { getMovie } from "@/ApiConfig";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import SearchNav from "@/components/SearchNav";
import React from "react";

const page = async () => {
  const data = await getMovie("trending/all/day?");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Trending</h1>
      <Card data={data} />
      <Footer />
    </div>
  );
};

export default page;
