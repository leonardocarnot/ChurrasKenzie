import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:auto;
height: auto;
background-color: var(--grey-3);
width: 320px;
height: auto;
border-radius: 4px;
padding-bottom: 20px;


form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.headerModal{
    margin: 20px 10px 20px 10px;
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