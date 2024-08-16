import Image from "next/image";
import SearchBox from "./SearchBox";

interface BgImage {
  image: string;
}
const Hero = () => {
  return (
    <main
      className="h-96 bg-right-bottom bg-no-repeat bg-cover bg-black relative flex items-center justify-center "
      // style={{ backgroundImage: 'url("/backdrop.jpg")' }}
    >
      <div className="flex flex-col justify-center items-center  z-30">
        <h1 className="text-xl md:text-4xl  font-bold font-serif z-40 shadow">
          Welcome.
        </h1>
        <p className="text-lg font-semibold text-center z-30 shadow">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <Image
          src={"/backdrop.jpg"}
          width={600}
          height={600}
          alt="background image"
        />
      </div>
      {/* <div className="">
        <div className="">
         
       
        </div>
      </div>
      <div>
      
      </div> */}
      {/* <div className="min-h-96 hero-overlay bg-opacity-70 absolute -z-10"></div> */}
    </main>
  );
};

export default Hero;
