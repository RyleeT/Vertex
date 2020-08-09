import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ViewBoards } from "@styled-icons/heroicons-outline/ViewBoards";
import { Contacts } from "@styled-icons/typicons/Contacts";
import { Github } from "@styled-icons/fa-brands/Github";

export const SidebarWrapper = styled.div`
  display: inherit;
  flex-direction: column;
  background: #f4f5f7;
  border: 1px solid #dfe1e6;
  @media (max-width: 991.98px) {
    position: fixed;
    z-index: 1;
    height: calc(100% - 56.375px);
  }
`;

export const SidebarHeading = styled.div`
  display: inherit;
  flex-direction: row;
  font-size: 1rem;
  font-weight: bold;
  margin: 24px 16px;
`;

export const ProjectTexts = styled.div`
  padding: 3px 0 0 10px;
`;

export const ProjectName = styled.div`
  font-size: 15px;
  line-height: 100%;
`;

export const ProjectInfo = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #5e6c84;
`;

export const ListGroup = styled.div`
  width: 13rem;
  margin: 0px 16px;
`;

export const ListItem = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 59px 8px 0px;
  background: #f4f5f7;
  border: none;
  border-radius: 0.25rem;
  text-decoration: inherit;
  color: inherit;
  user-select: none;
  :hover {
    background: #ebecf0;
  }
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;

export const StyledLink = styled.a`
  color: #24292e;
  :hover {
    color: #bebfc1;
  }
`;

export const LinkText = styled.span`
  padding: 0px 0px 2px 6px;
  font-weight: bold;
`;

export const SidebarFooter = styled.div`
  text-align: center;
  margin: 16px;
  display: inherit;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const KanbanIcon = styled(ViewBoards)``;

export const LeadIcon = styled(Contacts)``;

export const GithubIcon = styled(Github)``;
