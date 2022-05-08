import { Draggable, Droppable } from "react-beautiful-dnd";
import { ColumnType, TaskType } from "../data/initialData";
import { TaskList, Title, Container } from "./Column.styles";
import { Task } from "./Task";

type ColumnProps = {
  tasks: TaskType[];
  column: ColumnType;
  isDropDisabled: boolean;
  index: number;
};

export const Column: React.FC<ColumnProps> = ({
  tasks,
  column,
  isDropDisabled,
  index,
}) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable
            droppableId={column.id}
            // type={column.id === "column-3" ? "done" : "active"}
            isDropDisabled={isDropDisabled}
            type="task"
          >
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};
