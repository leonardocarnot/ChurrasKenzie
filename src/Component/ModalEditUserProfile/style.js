import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:auto;
height: auto;
background-color: var(--grey-3);
width: 296px;
height: 400px;
border-radius: 4px;


form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.headerModal{
    margin: 10px 10px 20px 10px;
    display: flex;
    width: 100%;
    padding: 0px 20px;
    justify-content: space-between;
    color: var(--white);
}

.closeModal{
    background: none;
    border: none;
    color: var(--white);
}
` 