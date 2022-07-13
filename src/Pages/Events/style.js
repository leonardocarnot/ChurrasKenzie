import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px 20px;

  background-color: var(--red-3);

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-start;
    height: max-content;
  }
`;
