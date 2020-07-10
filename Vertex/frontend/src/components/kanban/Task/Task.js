import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, TaskLink } from "./Styles";

export class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <TaskLink
            to="/"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              className="card rounded border-0 mx-0"
              isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}
            >
              <div className="card-body">{this.props.task.content}</div>
            </Card>
          </TaskLink>
        )}
      </Draggable>
    );
  }
}

export default Task;
