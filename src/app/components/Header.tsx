import React from "react";
import Link from "next/link";

const Header = ({ pathname }: { pathname?: string }) => {
  const link = (path, name) => (
    <Link href={path}>
      <a
        className={pathname === path ? "is-active" : ""}
        style={{ margin: "0 .25rem" }}
      >
        {name}
      </a>
    </Link>
  );

  return (
    <header style={{ display: "flex" }}>
      {link("/", "Home")}
      {link("/about", "About")}
    </header>
  );
};

export default Header;
