import Image from "next/image";
import Hero from "../components/Hero";
import NavLinkMenu from "@/components/NavLinkMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Results from "@/components/Results";
import { getMovie } from "@/ApiConfig";

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
  const genre: string = searchParams.genre || "trending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "top_rated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to load.");
  }
  const result: ApiResponse = await res.json();

  // const movie = await getMovie("/movie/top_rated");
  // console.log(movie);

  const index = Math.floor(Math.random() * result.results.length);
  const data = result.results[index];

  return (
    <section>
      <Hero
        image={data.backdrop_path || data.poster_path}
        title={data.title || data.original_name}
        poster={data.poster_path}
        overview={data.overview}
      />
      <div className="py-6 px-4 md:px-4">
        <NavLinkMenu />
        <Card data={result.results} />
      </div>
    </section>
  );
}
