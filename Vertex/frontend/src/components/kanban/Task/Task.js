import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "./Styles";

export class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card
              className="card rounded border-0 mt-1 mx-0"
              isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}
            >
              <div className="card-body">{this.props.task.content}</div>
            </Card>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;