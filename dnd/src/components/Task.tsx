import { TaskType } from "../data/initialData";
import { Container } from "./Task.styles";

type TaskProps = {
  task: TaskType;
};

export const Task: React.FC<TaskProps> = ({ task }) => {
  return <Container>{task.content}</Container>;
};
