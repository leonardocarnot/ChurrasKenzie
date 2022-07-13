import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-2);
  height: fit-content;
  width: 100%;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 10px;
  align-items: center;

  .icon {
    fill: var(--white);
    margin: 10px;
  }

  .iconSection {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    button {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 666px) {
    flex-direction: column;
    gap: 25px;

    .iconSection {
      flex-direction: row;
      gap: 100px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1100px) {
    flex-direction: row;
  }
`;
export const TitleAndImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: fit-content;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    width: 60%;

    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const OtherInfos = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1100px) {
    flex-direction: column;
    gap: 15px;
    text-align: flex-start;
    margin-left: 25px;

    .infoTitle {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5px;

    div {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
`;
