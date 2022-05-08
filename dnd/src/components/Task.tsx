import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../data/initialData";
import { Container, Handle } from "./Task.styles";

type TaskProps = {
  task: TaskType;
  index: number;
};

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  const isDragDisabled = task.id === "task-1";
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
        >
          <Handle {...provided.dragHandleProps} />
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
