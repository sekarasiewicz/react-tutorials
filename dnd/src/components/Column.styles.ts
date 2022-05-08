import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 220px;
`;

export const Title = styled.h3`
  padding: 8px;
`;

export const TaskList = styled.div<{ isDraggingOver?: boolean }>`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;

  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "skyblue" : "white"};
`;
