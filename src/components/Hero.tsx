import Image from "next/image";
import SearchBox from "./SearchBox";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface BgImage {
  image: string;
}
const Hero = ({ image }: BgImage) => {
  return (
    <main className=" h-dvh  relative flex items-center justify-center  ">
      <div className="absolute left-4  top-16 w-80 flex flex-col gap-1 font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl   font-bold">
          WELCOME
        </h1>
        <p className="text-lg md:text-xl font-semibold ">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
      <h1 className="absolute right-4  bottom-4 text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400   font-bold font-serif text-shadow">
        RARE
      </h1>
      {/* <div className="flex flex-col justify-center items-center gap-4  w-full px-4  md:w-[50vw]">
          <SearchBox />
        </div> */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full -z-20">
          <Image
            src={`https://image.tmdb.org/t/p/original${image}`}
            fill
            alt="cinima background"
            className="object-cover object-center bg-gray-800"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gray-800 bg-opacity-80"></div>
      </div>
    </main>
  );
};

export default Hero;
