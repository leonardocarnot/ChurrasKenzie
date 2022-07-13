import React from "react";
import ThemeButton from ".";

// import { Container } from './styles';

function ExamplesButton() {
  return (
    <>
      <ThemeButton schema="var(--red-2)">aperte</ThemeButton>
      <ThemeButton large schema="var(--black)">
        aperte
      </ThemeButton>
      <ThemeButton large schema="var(--grey-1)" textBlack>
        aperte
      </ThemeButton>
      <ThemeButton large schema="var(--grey-2)">
        aperte
      </ThemeButton>
    </>
  );
}

export default ExamplesButton;
