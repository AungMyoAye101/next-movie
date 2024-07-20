import Image from "next/image";
import Hero from "../components/Hero";
import NavLinkMenu from "@/components/NavLinkMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";

const API_KEY = process.env.API_KEY;

interface CardData {
  backdrop_path: string;
  id: number;
  title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}
interface ApiResponse {
  page: number;
  results: CardData[];
}

export default async function Home({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  const genre = searchParams.genre || "trending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "top_rated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}`
  );
  const result: ApiResponse = await res.json();

  return (
    <>
      <Hero />
      <NavLinkMenu />
      <Card data={result.results} />
      <Footer />s
    </>
  );
}
