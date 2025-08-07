import React from "react";
import styled from "styled-components";
import space from "../utils/space";

function Header() {
  return (
    <StyledHeader>
      <Logo>Saravanan&nbsp;Devaraj</Logo>
      <Filler />
      <Tagline>
        a <span className="highlight">&lt;ReactDeveloper /&gt;</span> creating
        beautiful prototypes
      </Tagline>
    </StyledHeader>
  );
}

export default Header;

// styled components

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: var(--layout-max-width);
  margin: ${space(6)}px auto;
  align-items: center;
`;

const Logo = styled.div`
  font-family: var(--logo-font);
  font-size: ${space(6)}px;
  line-height: ${space(9)}px;
`;

const Tagline = styled.div`
  font-weight: 600;
  .highlight {
    color: var(--text-highlight-color);
  }
`;

const Filler = styled.div`
  width: ${space(9)}px;
  height: 2px;
  background-color: black;
  margin-left: auto;
  margin-right: ${space(2)}px;
`;
