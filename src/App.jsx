import React from "react";
import Header from "./components/Header";
import HomeIntro from "./components/HomeIntro";
import styled from "styled-components";

export default function App() {
  return (
    <StyledWrapper>
      <Header></Header>
      <HomeIntro />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0 var(--space-4);
`;
