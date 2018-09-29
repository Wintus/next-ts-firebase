import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
`;

const Item = styled.div`
  margin: 0 ${1 / 4}rem;
`;

const Header = ({ pathname }: { pathname?: string }) => {
  const link = (path: string, name: string) => (
    <Item>
      <Link href={path}>
        <a className={pathname === path ? "is-active" : ""}>{name}</a>
      </Link>
    </Item>
  );

  return (
    <header>
      <FlexBox>
        {link("/", "Home")}
        {link("/about", "About")}
      </FlexBox>
    </header>
  );
};

export default Header;
