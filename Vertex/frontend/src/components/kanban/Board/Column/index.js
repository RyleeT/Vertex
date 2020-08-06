import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { Container, Tasks, Title } from "./Styles";

export class Column extends Component {
  render() {
    return (
      <Container className="card rounded border-0 mx-2">
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id.toString()}>
          {(provided) => (
            <Tasks ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  match={this.props.match}
                />
              ))}
              {provided.placeholder}
            </Tasks>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Column;
