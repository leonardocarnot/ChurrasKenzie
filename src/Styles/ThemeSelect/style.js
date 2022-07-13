import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  div {
    margin-left: 5%;
    color: var(--white);
    span {
      color: var(--red-2);
    }
  }
  input {
  }
`;
export const InputContainer = styled.div`
  background: var(--white);
  /* border: 2px solid var(--white); */
  /* width: 100%; */

  margin: 10px 5%;
  width: 90%;
  height: 30px;
  border-radius: 4px;
  outline: none;

  transition: 0.4s;
  /* Em progresso borda vermelha no erro */
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red-1);
    `}

  select {
    width: 100%;
    height: 100%;
    padding: 0 0.5,rem;
    background-color: transparent;
    color: var(--grey-4);
    &::placeholder {
      color: var(--grey-2);
    }
  }
`;
