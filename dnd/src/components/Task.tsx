import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../data/initialData";
import { Container, Handle } from "./Task.styles";

type TaskProps = {
  task: TaskType;
  index: number;
};

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps} />
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
