import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0 25px;
  height: 50px;
  border-radius: 6px;

  transition: 400ms;
  &:hover {
    filter: brightness(75%);
  }

  width: ${(props) => (props.large ? "90%" : "fit-content")};

  background-color: ${(props) => props.schema || "white"};
  color: ${(props) => {
    return props.blackText ? "black" : "white";
  }};
`;
