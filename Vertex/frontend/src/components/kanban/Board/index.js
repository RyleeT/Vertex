import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DragDropContext } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import Column from "./Column";
import AddColumn from "../AddColumn";
import AddTask from "../AddTask";
import {
  getColumns,
  getTasks,
  getBoards,
  moveTask,
} from "../../../actions/kanban";
import { Title } from "./Styles";

export class Board extends Component {
  static propTypes = {
    tasks: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    boards: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    getColumns: PropTypes.func.isRequired,
    getBoards: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    await this.props.getColumns();
    await this.props.getTasks();
    await this.props.getBoards();
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If destination is not valid, do nothing
    if (!destination) {
      return;
    }

    // If task is dropped in the same place, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.props.columns[source.droppableId];
    const finish = this.props.columns[destination.droppableId];

    // If task is dropped in the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      this.props.dispatch(moveTask(newColumn));
      return;
    }

    // If task is dropped in different column
    else {
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
      this.props.dispatch(moveTask(newStart, newFinish));
      return;
    }
  };

  render() {
    return (
      <Fragment>
        <Title className="d-flex justify-content-between">
          Kanban Board
          <span>
            <button
              className="btn btn-primary rounded mr-1"
              type="button"
              data-toggle="collapse"
              data-target="#form"
              aria-expanded="false"
              aria-controls="form"
            >
              Add Issue
            </button>
            {/* TODO: FINISH ADD COLUMN FUNCTION
            <button
              className="btn btn-primary rounded"
              type="button"
              data-toggle="collapse"
              data-target="#form2"
              aria-expanded="false"
              aria-controls="form2"
            >
              Add Column
            </button> 
            */}
          </span>
        </Title>
        <div className="collapse" id="form">
          <AddTask />
        </div>
        <div className="collapse" id="form2">
          <AddColumn />
        </div>

        <div className="card-deck mx-n2">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.props.boards.map((boardId) => {
              const board = boardId.columnOrder;

              return board.map((columnId) => {
                const column = this.props.columns[columnId];
                const task = column.taskIds.map(
                  (taskId) => this.props.tasks[taskId]
                );
                return <Column key={column.id} column={column} tasks={task} />;
              });
            })}
          </DragDropContext>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  columns: state.kanban.columns,
  tasks: state.kanban.tasks,
  boards: state.kanban.boards,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators({ getTasks, getColumns, getBoards }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
