import styled, { keyframes } from "styled-components";

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
  .card__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    margin-top: 20px;
    min-height: 50vh;

    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--white);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--white);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--white);
    }
  }

  .cardDetail {
    width: 250px;
    height: 340px;
    border: 1px solid var(--white);
    padding: 20px;
    background-color: var(--grey-2);
    border-radius: 5px;
    animation: ${rotate90deg} 2s;
    color: var(--white);
  }

  .headerCardDetail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    button {
      color: var(--white);
      border: none;
      background: none;
    }
  }

  .card {
    width: 250px;
    height: 340px;
    border: 1px solid var(--white);
    padding: 20px;
    background-color: var(--grey-2);
    border-radius: 5px;

    .card__info {
      display: flex;
      justify-content: center;
      color: var(--white);
      gap: 10px;

      img {
        width: 60px;
        height: 60px;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        p {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }

    .card__combo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      h2 {
        color: var(--white);
        text-align: center;
        font-size: 16px;
      }

      img {
        width: 200px;
        height: 150px;
        overflow: auto;
      }
    }
  }

  .card__button {
    display: flex;
    gap: 20px;
    margin-top: 10px;

    .active {
      background-color: var(--grey-3);
      border-radius: 5px;
      color: var(--white);
    }

    button {
      width: 190px;
      height: 30px;
      color: var(--grey-5);
      background-color: var(--grey-1);
      border-radius: 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 375px) {
    .card__container {
      display: flex;
      justify-content: unset;
      overflow-x: scroll;
      flex-wrap: unset;
      height: 350px;
      gap: 40px;
      overflow-y: hidden;
    }

    .cardDetail {
      width: 210px;
      height: 300px;
      border: 1px solid var(--white);
      padding: 20px;
      background-color: var(--grey-2);
      border-radius: 5px;
    }

    .card {
      width: 210px;
      height: 320px;
      border: 1px solid var(--white);
      padding: 20px;
      background-color: var(--grey-2);
      border-radius: 5px;

      .card__info {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);
        width: 110%;

        img {
          width: 60px;
          height: 60px;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 10px;

          p {
            font-size: 10px;
          }
        }
      }

      .card__combo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 10px;

        h2 {
          color: var(--white);
          text-align: center;
          font-size: 12px;
        }

        img {
          width: 170px;
        }
      }
    }

    .card__button {
      display: flex;
      margin-top: 10px;

      .active {
        background-color: var(--grey-3);
        border-radius: 5px;
        color: var(--white);
      }

      button {
        width: 260px;
        height: 25px;
        color: var(--grey-5);
        background-color: var(--grey-1);
        border-radius: 5px;
        font-size: 10px;
      }
    }
  }
`;
