import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  // min-height: 250px;
  height: fit-content;
  padding: 20px;
  padding-top: 10px;
  border-radius: 16px;

  background-color: var(--grey-3);

  .scheduleTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;
  }

  .addScheduleBtn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    height: 30px;
    border: none;
    border-radius: 8px;

    background-color: var(--grey-4);
    color: var(--white);
  }

  .scheduleEvent {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    padding: 2px 5px;
    width: 100%;
    border: 1px solid var(--white);
  }
`;
