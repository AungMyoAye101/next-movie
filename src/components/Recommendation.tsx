import React, { useRef } from "react";
import Card, { CardDetailProps } from "./Card";
import { getRecommendations } from "@/ApiConfig";
import { CardData, CardProps } from "./CardGridCon";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import VideoCon from "./VideoCon";

const Recommendation = ({ data }: { data: CardDetailProps[] }) => {
  return (
    <section className="px-6 py-4 space-y-2 relative">
      <h1 className="text-xl font-semibold font-serif ">Recommendations</h1>
      <VideoCon data={data} />
    </section>
  );
};

export default Recommendation;
