import { useState } from "react";
import { Column } from "./components";
import { initialData, InitialDataType } from "./data/initialData";

const App: React.FC = () => {
  const [state, setState] = useState<InitialDataType>(initialData);

  return (
    <>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((column) => state.tasks[column]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </>
  );
};

export default App;
