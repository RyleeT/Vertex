import React, { Component } from "react";
import {
  SidebarWrapper,
  SidebarHeading,
  ListGroup,
  ListItem,
  KanbanIcon,
  LinkText,
  LeadIcon,
} from "./Styles";

export class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <SidebarHeading>Project Manager</SidebarHeading>
        <ListGroup>
          <ListItem
            exact
            to="/"
            activeStyle={{
              color: "#9954BB",
              backgroundColor: "#ebecf0",
            }}
          >
            <KanbanIcon size="30" />
            <LinkText>Kanban Board</LinkText>
          </ListItem>
          <ListItem
            exact
            to="/leads"
            activeStyle={{
              color: "#9954BB",
              backgroundColor: "#ebecf0",
            }}
          >
            <LeadIcon size="30" />
            <LinkText>Lead Manager</LinkText>
          </ListItem>
        </ListGroup>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
