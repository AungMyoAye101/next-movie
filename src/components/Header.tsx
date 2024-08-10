import Link from "next/link";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-2 gap-4">
      <div className="text-3xl">
        <Link href={"/"} className="  hover:text-warning ">
          Rare{" "}
          <span className="text-sm bg-warning px-2 text-gray-800 rounded hidden lg:inline-block">
            movie
          </span>
        </Link>
      </div>
      <div className="hidden lg:flex gap-3 text-lg font-semibold ">
        <Link
          href={"/"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          Home{" "}
        </Link>
        <Link
          href={"/"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          Trending
        </Link>
        <Link
          href={"/"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          Movie
        </Link>
        <Link
          href={"/"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          TV Series
        </Link>
        <Link
          href={"/"}
          className="hover:underline hover:text-warning hover:underline-offset-8"
        >
          People
        </Link>
      </div>
      <div className="bg-greem-200 min-w-72 max-w-96 relative">
        <input
          type="text"
          placeholder="Search Movie & Tv Shows.. "
          className="py-2 px-3 rounded-2xl  bg-gray-300 focus:outline-none w-full text-gray-600"
        />
        <FaSearch className="absolute right-5 top-3 text-lg text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
