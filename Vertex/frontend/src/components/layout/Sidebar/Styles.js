import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { ViewBoards } from "@styled-icons/heroicons-outline/ViewBoards";
import { Contacts } from "@styled-icons/typicons/Contacts";

export const InlineWrapper = styled.div`
  display: flex;
  @media (max-width: 992px) {
    position: fixed;
    z-index: 1;
    min-height: 100vh;
  }
`;

export const SidebarWrapper = styled.div`
  background: #f4f5f7;
  padding: 0px;
  border: 1px solid #dfe1e6;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
`;

export const SidebarHeading = styled.div`
  font-weight: bold;
  padding: 16px;
  font-size: 1.2rem;
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

export const KanbanIcon = styled(ViewBoards)``;

export const LeadIcon = styled(Contacts)``;

export const LinkText = styled.span`
  padding: 0px 0px 2px 6px;
  font-weight: bold;
`;
{
  /*


    #wrapper.toggled #sidebar-wrapper {
      margin-left: 0;
    }
    

    
      #wrapper.toggled #sidebar-wrapper {
        margin-left: -15rem;
      }
    }
    */
}
