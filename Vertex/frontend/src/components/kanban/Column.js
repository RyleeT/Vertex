import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";

const Container = styled.div`
  background: #f4f5f7;
`;

const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export class Column extends Component {
  render() {
    return (
      <Container className="card rounded mx-2">
        <div className="card-body d-flex flex-column p-1">
          <h5 className="card-title my-1 ml-2">
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
