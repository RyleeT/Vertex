import React, { Component } from "react";
import { SidebarWrapper, SidebarHeading, ListGroup, ListItem } from "./Styles";

export class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper className="border-right">
        <SidebarHeading>Project Manager</SidebarHeading>
        <ListGroup className="list-group list-group-flush">
          <a href="/" className="list-group-item list-group-item-action">
            Kanban Board
          </a>
          <a href="#/leads" className="list-group-item list-group-item-action">
            Lead Manager
          </a>
        </ListGroup>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
