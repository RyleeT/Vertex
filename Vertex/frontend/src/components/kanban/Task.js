import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";

const Card = styled.div`
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  :hover {
    background: #ebecf0;
  }
  ${(props) =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;

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
