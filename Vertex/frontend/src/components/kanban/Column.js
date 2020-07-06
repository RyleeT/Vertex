import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

export class Column extends Component {
  render() {
    return (
      <div className="card bg-light rounded mx-2">
        <div className="card-body d-flex flex-column p-1">
          <h5 className="card-title my-1 ml-2">{this.props.column.title}</h5>
          <Droppable droppableId={this.props.column.id}>
            {(provided) => (
              <div
                className="flex-grow-1"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}

export default Column;
