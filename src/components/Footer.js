"use client";
import React from "react";
import styled from "styled-components";
import space from "@/utils/space";
import { device } from "@/styles/breakpoints";

function Footer() {
  return (
    <Wrapper>
      <StyledFooter>
        <h5>Links</h5>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Prototypes</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
        </ul>
        <p>&copy; Saravanan.dev</p>
      </StyledFooter>
    </Wrapper>
  );
}

export default Footer;

// styled components

const Wrapper = styled.footer`
  /* display: flex;
  flex-direction: column;
  gap: ${space(2)}px; 
  align-items: flex-start; */
  padding: ${space(10)}px ${space(3)}px 0;
  margin: auto;

  @media ${device.laptop} {
    /* flex-direction: row;
    justify-content: space-between; */
    /* align-items: center; */
    max-width: var(--layout-max-width);
  }
`;

const StyledFooter = styled.div`
  border-top: 2px solid var(--color-text);
  padding: ${space(4)}px 0;
  color: var(--color-text);

  h5 {
    color: var(--color-text);
    padding-top: 0;
  }

  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    margin-bottom: ${space(4)}px;
  }

  ul > li {
    list-style: none;
    font-size: var(--type-size-xs);
    line-height: var(--type-height-xs);
    margin-bottom: ${space(0)}px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
