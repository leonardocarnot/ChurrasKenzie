import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: var(--grey-4);

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: var(--grey-4);

    img {
      width: 50%;
      height: 50%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 50%;

    background: var(--grey-5);

    h1 {
      color: var(--white);
      width: 50%;
      font-size: 25px;
    }

    p {
      color: var(--white);
      width: 70%;
      font-size: 20px;
    }

    button {
      border: 1px solid var(--white);
      width: 50%;
      font-size: 18px;
      padding: 10px;
      background-color: transparent;
    }

    button:hover {
      transition: all ease-in-out 0.3s;
      background-color: var(--red-1);
    }

    a {
      color: var(--white);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    height: 100vh;
    background: var(--grey-4);

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: var(--grey-4);

    img {
      width: 70%;
      height: 70%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 80%;

    background: var(--grey-5);

    h1 {
      color: var(--white);
      width: 63%;
      font-size: 25px;
    }

    p {
      color: var(--white);
      width: 63%;
      font-size: 20px;
    }

    button {
      border: 1px solid var(--white);
      width: 63%;
      font-size: 18px;
      padding: 10px;
      background-color: transparent;
    }

    button:hover {
      transition: all ease-in-out 0.3s;
      background-color: var(--red-1);
    }

    a {
      color: var(--white);
    }
  }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 20px 20px;
    
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 20%;

      img {
        width: 120%;
        height: 120%;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 20px;
      width: 100%;
      height: 20%;
      padding: 20px 10px;
      border-radius: 16px;

      h1 {
        color: var(--white);
        width: 100%;
        font-size: 20px;
      }

      p {
        color: var(--white);
        width: 100%;
        font-size: 20px;
      }

      button {
        border: 1px solid var(--white);
        width: 88%;
        font-size: 15px;
        padding: 10px;
        background-color: transparent;
      }

      button:hover {
        transition: all ease-in-out 0.3s;
        background-color: var(--red-1);
      }

      a {
        color: var(--white);
      }
    }
  }
`;
