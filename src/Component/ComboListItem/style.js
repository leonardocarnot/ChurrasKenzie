import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: var(--grey-2);
    border-radius: 4px;
    min-width: 220px;

    img{
        width: 40px;
        height: 40px;
        display: flex;
    }
    button{
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:5px;
        background: transparent;
        color: var(--grey-1);
    }
    .buttonsComboCard{
        display: flex;
    }

    .comboName {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 20vw;
    }

`