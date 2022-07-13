import styled from "styled-components";

export const Container = styled.div`

    .cardDetail {
        display: flex;
        flex-direction: column;
        gap: .5rem; 
    }

    .comboName {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 200px;
    }
    

@media (max-width: 375px){
    .cardDetail{
        width: 210px;
    }

    .comboName {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 180px;
    }

}
`