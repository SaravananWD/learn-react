"use client";
import React from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import space from "@/utils/space";
import Link from "next/link";
import { device } from "@/style/breakpoints";

function ShortProtosList() {
  return (
    <Wrapper>
      <h2>Working Prototypes</h2>
    </Wrapper>
  );
}
export default ShortProtosList;

const Wrapper = styled.div`
  max-width: var(--layout-max-width);
  margin: auto;
  padding: 0 ${space(3)}px;
`;
