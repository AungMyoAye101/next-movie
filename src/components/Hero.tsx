import Image from "next/image";
import SearchBox from "./SearchBox";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface BgImage {
  image: string;
}
const Hero = () => {
  return (
    <main className=" min-h-[70vh]  relative flex items-center justify-center  ">
      <div className="flex flex-col justify-center items-center gap-4  w-full px-4  md:w-[50vw]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-100  font-bold font-serif text-shadow">
          Welcome.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-semibold text-center shadow">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>

        <SearchBox />
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
