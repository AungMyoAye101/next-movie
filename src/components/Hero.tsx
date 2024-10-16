import Image from "next/image";
import SearchBox from "./SearchBox";

interface BgImage {
  image: string;
}
const Hero = () => {
  return (
    <main className=" min-h-[60vh]  relative flex items-center justify-center  ">
      <div className="flex flex-col justify-center items-center  z-30">
        <h1 className="text-3xl md:text-4xl lg:5xl text-gray-100  font-bold font-serif z-40 text-shadow">
          Welcome.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-semibold text-center z-30 shadow">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
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
