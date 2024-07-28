import SearchBox from "./SearchBox";

interface BgImage {
  image: string;
}
const Hero = ({ image }: BgImage) => {
  return (
    <div
      className="hero min-h-96 "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content ">
        <div className="max-w-full">
          <h1 className="mb-5 text-5xl font-bold">Welcome.</h1>
          <p className="mb-5">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
