"use-client";

import React from "react";
import styled from "styled-components";
import space from "@/utils/space";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
export default Button;

const StyledButton = styled.button`
  background-color: var(--color-text);
  color: var(--color-bg);
  cursor: pointer;
  padding: ${space(2)}px ${space(5)}px;
  border: 0;
  border-radius: ${space(1)}px;
  margin-top: ${space(1)}px;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
