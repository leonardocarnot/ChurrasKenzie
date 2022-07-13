import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromleft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`;

const rotate90deg = keyframes`
from {
    opacity: 0;
    transform: rotate3d(0, 1, 0, 90deg);
}

to{
    opacity: 1;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--grey-3);
  align-items: center;
  min-height: 100vh;
  height: 100%;

  form {
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 296px;
    height: auto;
    background-color: var(--grey-4);
    border-radius: 6px;
    animation: ${appearFromleft} 2s;
    width: 90%;
    padding: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .background {
    background-color: var(--grey-3);
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 20px;
  }

  p {
    color: var(--white);
    font-size: 22px;
  }

  a,
  label {
    color: var(--white);
    font-size: 11px;
  }

  .imgContainerLogin {
    background-color: var(--white);
    height: 100vh;
  }

  .loginImage {
    display: none;
  }

  .logoImage {
    animation: ${rotate90deg} 3s;
  }

  .error {
    color: var(--red-1);
    input {
      outline-color: var(--red-1);
    }
  }

  span {
    font-size: 11px;
    color: var(--white);
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 680px) {
    .loginImage {
      height: 100vh;

      width: 50vw;
      display: block;
    }
    form {
      width: 340px;
      height: auto;
    }
    .background {
      height: 100vh;
      width: 50vw;
    }
  }
`;
