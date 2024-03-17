import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" adress="/" Icon={FaHome} />
        <MenuItem title="About" adress="/about" Icon={FaInfoCircle} />
      </div>
      <Link href="/">
        <span className="bg-amber-500 py-1 px-2 rounded-xl font-bold text-2xl">
          IMDb
        </span>
        <span className="hidden sm:inline text-xl">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
