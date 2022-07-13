import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-end;
  font-weight: 600;
  padding: 10px 0;

  p {
    color: var(--white);
  }

  img {
    border-radius: 16px;
    width: 100px;
    height: 100px;
  }

  .left_info figure {
    text-align: center;
    width: 100px;
    height: 100px;
    margin: 0;
  }

  .right_info {
    text-align: left;
  }
  .right_info p {
    margin: 5px 0;
  }

  .edit_profile_button {
    padding: 5px 10px;
    font-weight: 600;
    color: var(--white);
    border-radius: 15px;
    background-color: var(--red-1);
  }
`;

export const ContainerAll = styled.div`
  background-color: var(--grey-3);
  padding: 10px 15px;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 15px;
  width: 300px;

  h2 {
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
