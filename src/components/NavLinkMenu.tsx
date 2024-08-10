import React from "react";
import NavItems from "./NavItems";
const NavLinkMenu = () => {
  return (
    <div className="flex px-6 py-2 gap-4 ">
      <NavItems title={"Trending"} param={"trending"} />
      <NavItems title={"Top Rated"} param={"top_rated"} />
    </div>
  );
};

export default NavLinkMenu;
