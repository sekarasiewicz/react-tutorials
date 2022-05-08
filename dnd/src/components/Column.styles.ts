import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

export const Title = styled.h3`
  padding: 8px;
`;

export const TaskList = styled.div<{ isDraggingOver?: boolean }>`
  padding: 8px;

  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "skyblue" : "white"};
`;
