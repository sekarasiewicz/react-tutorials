import styled from "styled-components/macro";

export const Container = styled.div<{ isDragging?: boolean }>`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({ isDragging }) =>
    isDragging ? "lightgreen" : "white"};
`;
