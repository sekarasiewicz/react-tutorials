import { useState } from "react";
import { Column } from "./components";
import { initialData, InitialDataType } from "./data/initialData";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

const App: React.FC = () => {
  const [state, setState] = useState<InitialDataType>(initialData);

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((column) => state.tasks[column]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
