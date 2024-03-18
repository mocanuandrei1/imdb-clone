import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center gap-6 py-2 bg-amber-200">
      <NavBarItem title="Trending" param="getTrending" />
      <NavBarItem title="Top Rated" param="getTopRated" />
    </div>
  );
};

export default NavBar;
