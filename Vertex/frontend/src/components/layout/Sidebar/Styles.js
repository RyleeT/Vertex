import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  background: #f4f5f7;
  padding: 0px;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarHeading = styled.div`
  padding: 16px;
  font-size: 1.2rem;
`;

export const ListGroup = styled.div`
  width: 15rem;
`;

export const ListItem = styled.div``;
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
