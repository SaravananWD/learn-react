"use client";
import React from "react";
import styled from "styled-components";
import space from "@/utils/space";
import { device } from "@/styles/breakpoints";
import { Logo } from "./Header";

function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper>
        <LinkGroup>
          <h5>Learn React</h5>
          <ul>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Prototypes</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
          </ul>
        </LinkGroup>
        <LinkGroup>
          <h5>Hire Me</h5>
          <ul>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </LinkGroup>
        <LinkGroup>
          <h5>Site Info</h5>
          <ul>
            <li>
              <a href="#">About Me</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </LinkGroup>
        <p className="copy">&copy; Saravanan.dev</p>
      </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;

// styled components

const LinkGroup = styled.div``;

const StyledFooter = styled.footer`
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

const FooterWrapper = styled.div`
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

  .copy {
    color: var(--color-muted);
    font-family: var(--logo-font);
    font-size: ${space(4)}px;
    line-height: ${space(5)}px;
  }
`;
