"use client";
import React from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import space from "@/utils/space";
import Link from "next/link";

const IntroWarpper = styled.div`
  max-width: var(--layout-max-width);
  margin: ${space(20)}px auto;
`;

function HomeIntro() {
  return (
    <IntroWarpper>
      <h1>
        This is my {/* Prototype Hub || Portfolio || Official Blog */}Official
        Blog!
      </h1>
      <p>Welcome to my full-stack React-based website!</p>
      <p>
        I plan to use this platform to test and showcase my React skills. Here,
        I will experiment with my learnings and share the outcomes in a reusable
        format—what I like to call "prototypes." If time permits, I’ll also
        publish new articles on React, JavaScript, and other web development
        topics.
      </p>
      <Link href="/about">
        <Button>Get started!</Button>
      </Link>
    </IntroWarpper>
  );
}
export default HomeIntro;
