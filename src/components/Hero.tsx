import Image from "next/image";
import SearchBox from "./SearchBox";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface BgImage {
  image: string;
}
const Hero = () => {
  return (
    <main className=" min-h-[70vh]  relative flex items-center justify-center  ">
      <div className="flex flex-col justify-center items-center gap-4 bg-cyan-400">
        <h1 className="text-3xl md:text-4xl lg:5xl text-gray-100  font-bold font-serif z-40 text-shadow">
          Welcome.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-semibold text-center z-30 shadow">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="w-[90vw] md:w-full flex items-center justify-center mx-auto bg-green-400 ">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-full focus:outline-none shadow-md"
            placeholder="Search movies and tv series"
          />
          <FaMagnifyingGlass className="text-xl text-gray-700 -ml-10" />
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="relative w-full h-full -z-10">
          <Image
            src={"/cinima.jpg"}
            fill
            alt="cinima background"
            className="object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
