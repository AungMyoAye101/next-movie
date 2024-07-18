import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import DarkModeSwitch from "./DarkModeSwiitch";

const Header = () => {
  return (
    <nav className="bg-gray-700 px-6 py-2 flex justify-between items-center">
      <div className="flex items-end">
        <span className="text-xl bg-amber-500 text-gray-100 py-2 px-4 rounded-lg">
          RARE
        </span>
        <span className="text-lg ml-1 hidden md:inline">movie</span>
      </div>
      <div>
        <Link href={"/"}>HOME</Link>
        <Link href={"/about"} className="mx-3">
          ABOUT
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <FaUser className=" text-xl" />
        </div>
        <div>
          <GoSearch className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
