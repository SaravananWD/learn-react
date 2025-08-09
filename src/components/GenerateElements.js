"use client";

import React from "react";
import styled from "styled-components";
import space from "@/utils/space";

function GenerateElements({ styleType }) {
  const TagName = {};

  return (
    <>
      <StyledButton styleType={styleType}>Get Started!</StyledButton>
      <p>
        Lorem ipsum <Anchor>dolor sit amet</Anchor> consectetur, adipisicing
        elit.
      </p>
    </>
  );
}

export default GenerateElements;

const StyledButton = styled.button(
  ({ styleType }) => `
  background-color: var(--${styleType});
  color: var(${styleType === "color-bg" ? "--color-text" : "--color-bg"});
  cursor: pointer;
  padding: ${space(2)}px ${space(5)}px;
  border: 0;
  border-radius: ${space(1)}px;
  margin-top: ${space(1)}px;
  transition: var(--bg-transition);

  &:hover {
    background-color: var(--color-accent);
  }
`
);
