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
        <FooterLinks>
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
        </FooterLinks>
        <Copy>&copy; Saravanan.dev</Copy>
      </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;

// styled components

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${space(0)}px ${space(10)}px;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const LinkGroup = styled.div`
  h5 {
    color: var(--color-text);
    padding-top: 0;
    line-height: ${space(5)}px;
    margin-bottom: ${space(3)}px;
  }

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

const StyledFooter = styled.footer`
  padding: ${space(10)}px ${space(3)}px 0;
  margin: auto;

  @media ${device.laptop} {
    max-width: var(--layout-max-width);
  }
`;

const FooterWrapper = styled.div`
  border-top: 2px solid var(--color-text);
  padding: ${space(4)}px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${space(0)}px ${space(10)}px;
`;

const Copy = styled.p`
  color: var(--color-muted);
  font-family: var(--logo-font);
  font-size: ${space(4)}px;
  line-height: ${space(5)}px;
  margin: 0;
`;
