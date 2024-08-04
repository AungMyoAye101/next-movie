import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwiitch";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-4 py-2 border-b border-b-gray-600">
        <div className="flex items-center gap-4">
          <Link
            href={"/"}
            className="text-xl font-semibold hover:text-amber-500 "
          >
            Rare
          </Link>
        </div>
        <div className="hidden md:flex gap-4 ">
          <Link
            href={"/people"}
            className="link  text-md no-underline hover:underline px-2 "
          >
            People
          </Link>
          <Link
            href={`/trending`}
            className="link text-md no-underline hover:underline px-2 "
          >
            Trending
          </Link>
          <Link
            href={`/movieTrend`}
            className="link text-md no-underline hover:underline px-2 "
          >
            Movie
          </Link>
          <Link
            href={`/tvTrend`}
            className="link  text-md no-underline hover:underline px-2 "
          >
            TV Shows
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <DarkModeSwitch />

          <div className="dropdown relative block md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-0"
            >
              <li>
                <Link
                  href={"/people"}
                  className="link  text-md no-underline hover:underline px-2 "
                >
                  People
                </Link>
              </li>
              <li>
                <Link
                  href={`/trending`}
                  className="link text-md no-underline hover:underline px-2 "
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href={`/movieTrend`}
                  className="link text-md no-underline hover:underline px-2 "
                >
                  Movie
                </Link>
              </li>
              <li>
                <Link
                  href={`/tvTrend`}
                  className="link  text-md no-underline hover:underline px-2 "
                >
                  TV Shows
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
