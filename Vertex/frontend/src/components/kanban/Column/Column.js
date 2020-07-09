import React, { Component } from "react";
import Task from "../Task/Task";
import { Droppable } from "react-beautiful-dnd";
import { Container, Title } from "./Styles";

export class Column extends Component {
  render() {
    return (
      <Container className="card rounded border-0 mx-2">
        <div className="card-body d-flex flex-column p-1">
          <h5 className="my-1 ml-1">
            <Title>{this.props.column.title}</Title>
          </h5>
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
      </Container>
    );
  }
}

export default Column;
