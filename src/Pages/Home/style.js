import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--red-3);
  display: flex;
  justify-content: center;
  padding: 20px;

  .wrapper {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--grey-3);
    width: 75%;
    border-radius: 5px;
    padding: 20px;
    padding-bottom: 40px;

    min-width: 700px;

    h1 {
      color: var(--white);
      font-size: 24px;
      text-align: center;
      margin: 10px 0 20px;
    }
  }

  .header__dashboard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    gap: 25px;
  }

  .header__filter {
    display: flex;
    align-items: center;
    gap: 25px;

    select {
      background: var(--red-2);
      color: var(--white);
      width: 130px;
      padding: 5px;
      border-radius: 15px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .header__search {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .icon {
      width: 40px;
      height: 40px;
      color: var(--white);
      cursor: pointer;
    }

    input {
      width: 180px;
      padding: 10px;
      color: var(--black);
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      display: flex;
      width: 90%;
      min-width: 280px;
    }
    .header__dashboard {
      flex-direction: row;
    }

    .header__filter {
      display: none;
    }

    .header__search {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;

      .icon {
        
        width: 40px;
        height: 40px;
        color: var(--white);
        cursor: pointer;
      }
      input {
        width: 100%;
        padding: 10px;
      }
    }
  }
`;
