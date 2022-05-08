import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../data/initialData";
import { Container } from "./Task.styles";

type TaskProps = {
  task: TaskType;
  index: number;
};

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
