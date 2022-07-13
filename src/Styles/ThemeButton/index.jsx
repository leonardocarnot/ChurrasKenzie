import React from "react";

import { StyledButton } from "./style";

function ThemeButton({ children, schema, blackText, large, type, handleClick}) {
  return (
    <StyledButton
      type={type}
      large={large}
      blackText={blackText}
      schema={schema}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
}

export default ThemeButton;
