import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwiitch";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link href={"/"}>Rare</Link>
        </div>
        <div>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
        </div>
        <div>
          <DarkModeSwitch />
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"} className="text-xl hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href={"/about"} className="text-xl hover:text-blue-400">
                  About
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
