import Image from "next/image";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

const API_KEY = process.env.API_KEY;

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  );
  const result = await res.json();

  return (
    <>
      <Hero />
      <Card result={result.results} />
      <Footer />s
    </>
  );
}
