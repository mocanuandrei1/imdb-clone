import React from "react";
import Link from "next/link";

const MenuItem = ({ title, adress, Icon }) => {
  return (
    <Link href={adress} className="hover:text-amber-500">
      <Icon className="text-3xl sm:hidden" />
      <p className="hidden sm:inline text-lg uppercase">{title}</p>
    </Link>
  );
};

export default MenuItem;
