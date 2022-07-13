import styled from "styled-components";
import { keyframes } from "styled-components";

const appearFromright = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
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
    animation: ${appearFromright} 2s;
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

  select {
    width: 90%;
    height: 30px;
    margin-bottom: 15px;
  }

  .backgroundImage {
    display: none;
  }

  .logoImage {
    animation: ${rotate90deg} 3s;
  }

  .error {
    color: var(--red-1);
  }

  span {
    font-size: 11px;
    color: var(--grey-4);
  }
  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 680px) {
    .backgroundImage {
      width: 50vw;
      display: block;
      background-repeat: repeat;
    }
    form {
      width: 369px;
      height: auto;
    }
    .background {
      width: 50vw;
    }
  }
`;
