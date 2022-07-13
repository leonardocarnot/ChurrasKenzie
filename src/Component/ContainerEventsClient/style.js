import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-3);
  width: 90%;
  min-height: 650px;
  border-radius: 14px;
  padding: 0px 20px;
  padding-bottom: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  h3,
  p {
    color: var(--white);
  }

  h2 {
    margin: 10px 0;
    text-align: center;
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
  }
`;
export const StyledTitles = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
