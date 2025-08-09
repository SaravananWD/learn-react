"use client";
import styled from "styled-components";
import React from "react";
import GenerateElements from "@/components/GenerateElements";

const STYLES = [
  "color-primary",
  "color-primary-dark",
  "color-primary-darker",
  "color-primary-light",
  "color-primary-lighter",
  "color-secondary",
  "color-accent",
  "color-bg",
  "color-text",
  "color-muted",
  "color-surface",
];

function TestCSS() {
  return (
    <Element>
      {STYLES.map((style) => {
        <GenerateElements styleType={style} />;
      })}
    </Element>
  );
}

export default TestCSS;

const Element = styled.div`
  display: flex;
  justify-content: space-around;

  align-items: center;

  p {
    margin: 0;
  }
`;
