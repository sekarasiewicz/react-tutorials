import { useState } from "react";
import { Column } from "./components";
import { initialData, InitialDataType } from "./data/initialData";
import {
  DragDropContext,
  DragStart,
  DragUpdate,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { Container } from "./App.styles";
import { InnerColumnList } from "./components/InnerColumnList";

const App: React.FC = () => {
  const [state, setState] = useState<InitialDataType>(initialData);

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    setState({ ...state, homeIndex: null });

    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { draggableId, source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = [...state.columnOrder];
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = { ...state, columnOrder: newColumnOrder };
      setState(newState);
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = [...start.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };

      const newState = {
        ...state,
        columns: { ...state.columns, [newColumn.id]: newColumn },
      };
      setState(newState);
      return;
    }

    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(source.index, 0, draggableId);
    const newFinish = { ...finish, taskIds: finishTaskIds };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  const handleDragStart = (start: DragStart, provided: ResponderProvided) => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";

    const homeIndex = state.columnOrder.indexOf(start.source.droppableId);
    setState({ ...state, homeIndex });
  };

  const handleDragUpdate = (
    update: DragUpdate,
    provided: ResponderProvided
  ) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragUpdate={handleDragUpdate}
    >
      <Droppable
        droppableId={"allColumns"}
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {state.columnOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              // const tasks = column.taskIds.map((column) => state.tasks[column]);
              const isDropDisabled = index < (state.homeIndex || -1);
              return (
                <InnerColumnList
                  key={column.id}
                  column={column}
                  tasksMap={state.tasks}
                  isDropDisabled={isDropDisabled}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
