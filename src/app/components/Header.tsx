import React from "react";
import Link from "next/link";

const Header = ({ pathname }: { pathname?: string }) => {
  const link = (path: string, name: string) => (
    <div>
      <Link href={path}>
        <a className={pathname === path ? "is-active" : ""}>{name}</a>
      </Link>
      <style jsx>{`
        a {
          margin: 0 ${1 / 4}rem;
        }
      `}</style>
    </div>
  );

  return (
    <header>
      {link("/", "Home")}
      {link("/about", "About")}
      <style jsx>{`
        header {
          display: flex;
        }
      `}</style>
    </header>
  );
};

export default Header;
