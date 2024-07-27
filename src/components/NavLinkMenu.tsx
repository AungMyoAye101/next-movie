import React from "react";
import NavItems from "./NavItems";
const NavLinkMenu = () => {
  return (
    <div className="flex m-4 gap-1 ">
      <NavItems title={"Trending"} param={"trending"} />
      <NavItems title={"Top Rated"} param={"top_rated"} />
    </div>
  );
};

export default NavLinkMenu;
