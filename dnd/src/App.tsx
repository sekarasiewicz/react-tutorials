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

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { draggableId, source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = { ...column, taskIds: newTaskIds };

    const newState = {
      ...state,
      columns: { ...state.columns, [newColumn.id]: newColumn },
    };
    setState(newState);
  };

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
