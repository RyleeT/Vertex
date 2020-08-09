import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProjectAvatar from "./ProjectAvatar";
import {
  SidebarWrapper,
  SidebarHeading,
  ProjectTexts,
  ProjectName,
  ProjectInfo,
  SidebarFooter,
  ListGroup,
  ListItem,
  LinkText,
  KanbanIcon,
  LeadIcon,
  GithubIcon,
  StyledLink,
} from "./Styles";

export class Sidebar extends Component {
  static propTypes = {
    sidebar: PropTypes.object.isRequired,
  };

  render() {
    const { visible } = this.props.sidebar;

    const sidebar = (
      <SidebarWrapper>
        <SidebarHeading>
          <ProjectAvatar />
          <ProjectTexts>
            <ProjectName>Vertex 1.0</ProjectName>
            <ProjectInfo>Project Manager</ProjectInfo>
          </ProjectTexts>
        </SidebarHeading>
        <ListGroup>
          <ListItem
            exact
            to="/board"
            activeStyle={{
              color: "#ff6b4a",
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
              color: "#ff6b4a",
              backgroundColor: "#ebecf0",
            }}
          >
            <LeadIcon size="30" />
            <LinkText>Lead Manager</LinkText>
          </ListItem>
        </ListGroup>
        <SidebarFooter>
          <StyledLink href="https://github.com/RyleeT/Vertex" target="_blank">
            <GithubIcon size="30" />
          </StyledLink>
        </SidebarFooter>
      </SidebarWrapper>
    );

    if (visible) {
      return sidebar;
    } else {
      return "";
    }
  }
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

export default connect(mapStateToProps)(Sidebar);
