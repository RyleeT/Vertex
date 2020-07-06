import React, { Component, Fragment } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./column";
import Form from "../leads/Form";

export class Board extends Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    // If task is dropped in the same column
    if (start === finish) {
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // If task is dropped in different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
    return;
  };

  render() {
    return (
      <Fragment>
        <h2 className="d-flex mt-4 justify-content-between">
          Kanban Board
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#form"
            aria-expanded="false"
            aria-controls="form"
          >
            Add Issue
          </button>
        </h2>
        <div className="collapse" id="form">
          <Form />
        </div>

        <div className="card-deck">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => this.state.tasks[taskId]
              );

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </DragDropContext>
        </div>
      </Fragment>
    );
  }
}

export default Board;
