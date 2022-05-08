import { ColumnType, TaskType } from "../data/initialData";
import { TaskList, Title, Container } from "./Column.styles";
import { Task } from "./Task";

type ColumnProps = {
  tasks: TaskType[];
  column: ColumnType;
};

export const Column: React.FC<ColumnProps> = ({ tasks, column }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
};
