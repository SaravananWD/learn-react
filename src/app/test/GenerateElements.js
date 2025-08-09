"use client";

import React from "react";
import styled from "styled-components";
import space from "@/utils/space";

function GenerateElements({ styleType }) {
  console.log(styleType);
  return (
    <Element>
      <StyledButton styleType={styleType}>Get Started!</StyledButton>
      <p>{styleType}</p>
      <p>
        Lorem ipsum <Anchor styleType={styleType}>dolor sit amet</Anchor>{" "}
        consectetur, adipisicing elit.
      </p>
    </Element>
  );
}

export default GenerateElements;

const StyledButton = styled.button(
  ({ styleType = "color-primary" }) => `
  background-color: var(--${styleType});
  color: var(${styleType === "color-bg" ? "--color-text" : "--color-bg"});
  cursor: pointer;
  padding: ${space(2)}px ${space(5)}px;
  border: 0;
  border-radius: ${space(1)}px;
  margin-top: ${space(1)}px;
  transition: var(--bg-transition);

  &:hover {
    background-color: var(--color-primary-dark);
  }
`
);

const Anchor = styled.a(
  ({ styleType = "color-primary" }) => `
 color: var(--${styleType === "color-bg" ? "color-text" : styleType});
`
);

const Element = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;
