"use client";
import styled from "styled-components";
import React from "react";
import GenerateElements from "@/components/GenerateElements";

const STYLES = [
  "color-primary-darker",
  "color-primary-dark",

  "color-primary",
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
    <div>
      {STYLES.map((style) => {
        return <GenerateElements key={style} styleType={style} />;
      })}
    </div>
  );
}

export default TestCSS;
