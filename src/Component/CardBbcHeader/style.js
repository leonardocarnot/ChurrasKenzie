import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  .combo-list {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  
  thead {
    width: 100%;
  }

  tr {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  img {
    max-width: 100px;
    max-height: 100px;
  }
`;
