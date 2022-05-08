import { memo } from "react";
import { ColumnType, TaskType } from "../data/initialData";
import { Column } from "./Column";

type InnerColumnListProps = {
  tasksMap: Record<string, TaskType>;
  column: ColumnType;
  isDropDisabled: boolean;
  index: number;
};

export const InnerColumnList: React.FC<InnerColumnListProps> = memo(
  ({ tasksMap, column, index, isDropDisabled }) => {
    const tasks = column.taskIds.map((column) => tasksMap[column]);
    return (
      <Column
        tasks={tasks}
        index={index}
        isDropDisabled={isDropDisabled}
        column={column}
      />
    );
  }
);
