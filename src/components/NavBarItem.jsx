"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const NavBarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      className={`hover:text-amber-500 font-bold text-lg ${
        genre === param
          ? `underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg`
          : ``
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
};

export default NavBarItem;
