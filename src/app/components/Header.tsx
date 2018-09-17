import React from "react";
import Link from "next/link";

const Header = ({ pathname }: { pathname?: string }) => (
  <header style={{ display: "flex" }}>
    <Link href="/">
      <a
        className={pathname === "/" ? "is-active" : ""}
        style={{ margin: "0 .25rem" }}
      >
        Home
      </a>
    </Link>
    <Link href="/about">
      <a
        className={pathname === "/about" ? "is-active" : ""}
        style={{ margin: "0 .25rem" }}
      >
        About
      </a>
    </Link>
  </header>
);

export default Header;
