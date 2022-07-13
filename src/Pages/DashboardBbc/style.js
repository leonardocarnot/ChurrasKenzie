import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #810c0c;
  color: var(--white);

  .ComboList {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    min-width: 0px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 20px;

  padding: 20px;

  main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .OrdersList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;
  }

  .eventListBbc,
  .eventComboBbc {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    min-height: 250px;
    border-radius: 16px;
    padding: 20px;
    padding-top: 10px;

    background-color: var(--grey-3);
  }

  .headerEventList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 100%;
  }

  .headerComboList {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;

    .eventListBbc,
    .eventComboBbc {
      width: 100%;
      min-width: 50vw;
    }
  }
`;
