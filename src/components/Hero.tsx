import Image from "next/image";
import SearchBox from "./SearchBox";

interface BgImage {
  image: string;
}
const Hero = () => {
  return (
    <main
      className=" h-[100vh] bg-center bg-no-repeat bg-cover relative flex items-center justify-center "
      style={{ backgroundImage: "url(/cinima.jpg)" }}
    >
      <div className="flex flex-col justify-center items-center  z-30">
        <h1 className="text-3xl md:text-4xl lg:5xl text-gray-100  font-bold font-serif z-40 text-shadow">
          Welcome.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-semibold text-center z-30 shadow">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
    </main>
  );
};

export default Hero;
