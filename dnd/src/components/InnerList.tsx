import { memo } from "react";
import { TaskType } from "../data/initialData";
import { Task } from "./Task";

export const InnerList: React.FC<{ tasks: TaskType[] }> = memo(
  ({ tasks }) => (
    <>
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ))}
    </>
  ),
  (prevProps, nextProps) => {
    if (prevProps.tasks === nextProps.tasks) {
      return false;
    }
    return true;
  }
);
