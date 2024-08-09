import SearchBox from "./SearchBox";

interface BgImage {
  image: string;
}
const Hero = ({ image }: BgImage) => {
  return (
    <>
      <div className="h-96">
        <img
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt="image"
          className="h-96 object-cover w-full  absolute left-0 right-0 -z-10 bg-opacity-50"
        />
        <div className="h-96 hero-overlay bg-opacity-70 absolute z-0"></div>
      </div>
    </>
    // <div
    //   className="hero min-h-96 bg-right  bg-no-repeat bg-contain "
    //   style={{
    //     backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-90 bg-slate-700"></div>
    //   <div className="hero-content text-neutral-content ">
    //     <div className="max-w-full">
    //       <h1 className="mb-5 text-5xl font-bold">Welcome.</h1>
    //       <p className="mb-5">
    //         Millions of movies, TV shows and people to discover. Explore now.
    //       </p>
    //       <SearchBox />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
