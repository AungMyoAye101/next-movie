import Image from "next/image";
import SearchBox from "./SearchBox";
interface BgImage {
  image: string;
}
const Hero = ({ image }: BgImage) => {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="image"
        fill
        className="h-screen object-cover w-full absolute left-0 right-0 -z-20 bg-opacity-50"
      />
      <div className="h-screen hero-overlay bg-opacity-70 absolute -z-10"></div>
      <div className="h-80 flex items-center justify-center">
        <div className="min-w-screen-sm max-w-screen-xl  mx-auto flex flex-col items-center gap-2 px-4">
          <h1 className="text-xl md:text-4xl font-bold font-serif">Welcome.</h1>
          <p className="text-lg font-semibold ">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
