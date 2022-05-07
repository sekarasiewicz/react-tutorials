import { ColumnType, TaskType } from "../data/initialData";

type ColumnProps = {
  tasks: TaskType[];
  column: ColumnType;
};

export const Column: React.FC<ColumnProps> = ({ tasks, column }) => {
  return <>{column.title}</>;
};
