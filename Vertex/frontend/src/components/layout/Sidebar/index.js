import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  InlineWrapper,
  SidebarWrapper,
  SidebarHeading,
  ListGroup,
  ListItem,
  KanbanIcon,
  LinkText,
  LeadIcon,
} from "./Styles";

export class Sidebar extends Component {
  static propTypes = {
    sidebar: PropTypes.object.isRequired,
  };

  render() {
    const { visible } = this.props.sidebar;

    const sidebar = (
      <SidebarWrapper>
        <SidebarHeading>Project Manager</SidebarHeading>
        <ListGroup>
          <ListItem
            exact
            to="/board"
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

    return <InlineWrapper>{visible ? sidebar : ""}</InlineWrapper>;
  }
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

export default connect(mapStateToProps)(Sidebar);
