"use client";
import React from "react";
import styled from "styled-components";
import space from "@/utils/space";
import { device } from "@/style/breakpoints";

function Header() {
  return (
    <StyledHeader>
      <Logo>Saravanan&nbsp;Devaraj</Logo>

      <Tagline>
        <Filler />
        <div>
          a <span className="highlight">&lt;ReactDeveloper /&gt;</span> creating
          beautiful prototypes
        </div>
      </Tagline>
    </StyledHeader>
  );
}

export default Header;

// styled components

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${space(2)}px;
  padding: 0 ${space(3)}px;
  margin: ${space(6)}px auto;
  align-items: flex-start;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    max-width: var(--layout-max-width);
    align-items: center;
  }
`;

const Logo = styled.div`
  font-family: var(--logo-font);
  font-size: ${space(6)}px;
  line-height: ${space(9)}px;
`;

const Tagline = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 600;

  .highlight {
    color: var(--color-primary);
  }

  @media ${device.laptop} {
    align-items: center;
  }
`;

const Filler = styled.span`
  display: inline-block;
  width: ${space(9)}px;
  height: 2px;
  background-color: black;
  margin-right: ${space(2)}px;
  margin-top: ${space(3)}px;

  @media ${device.laptop} {
    margin-top: 0;
  }
`;
