import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl bg-amber-500 dark:bg-slate-100">
          RARE
        </a>
      </div>
      <div className="flex-none">
        <DarkMode />
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"} className="text-red-400 dark:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
