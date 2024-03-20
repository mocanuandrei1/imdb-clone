"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [seachValue, setSeachValue] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${seachValue}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl border-2 items-center rounded-lg mt-4 border-amber-200 mx-auto flex justify-between p-2"
    >
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-full placeholder-gray-500"
        value={seachValue}
        onChange={(e) => setSeachValue(e.target.value)}
      />
      <button disabled={!seachValue} className=" disabled:text-gray-400">
        <FaSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchBox;
