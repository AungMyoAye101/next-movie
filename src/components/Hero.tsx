import Image from "next/image";
import SearchBox from "./SearchBox";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getTrailer } from "@/ApiConfig";
import Link from "next/link";

interface BgImage {
  type: string;
  id: number;
  image: string;
  title: string;
  poster: string;
  overview: string;
}
const Hero = async ({ type, id, image, title, poster, overview }: BgImage) => {
  const isTv = type ? "tv" : "movie";
  const data = await getTrailer(isTv, id);
  const watchTrailer = data.results.find(
    (item: any) => item.type === "Trailer"
  );

  return (
    <main className=" h-dvh  relative flex items-center justify-center  ">
      <div className="relative z-10  flex md:items-center justify-center  gap-12 font-serif text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-gray-200 ">
        <div className="w-full md:w-[45%]  flex flex-col gap-6 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans   font-bold">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold line-clamp-6">
            {overview}
          </p>

          <a
            href={`https://www.youtube.com/embed/${watchTrailer.key}`}
            className="px-4 py-1.5 rounded-md self-start bg-pink-600  text-gray-100 font-sans shadow cursor-pointer"
          >
            Watch Trailer
          </a>
        </div>
        <div className="hidden md:block">
          <div className="w-72  rounded-md  overflow-hidden object-cover shadow shadow-purple-400">
            <Image
              src={`https://image.tmdb.org/t/p/original${poster}`}
              width={400}
              height={400}
              alt="poster image"
            />
          </div>
        </div>
      </div>

      <h1 className="absolute right-4  bottom-4 text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-purple-400    font-bold font-serif">
        RARE
      </h1>

      <div className="absolute inset-0">
        <div className="relative w-full h-full -z-20">
          <Image
            src={`https://image.tmdb.org/t/p/original${image}`}
            fill
            alt="background"
            className="object-cover object-center bg-gray-800"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gray-700 bg-opacity-60"></div>
      </div>
    </main>
  );
};

export default Hero;
