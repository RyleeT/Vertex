import styled, { css } from "styled-components";

export const Card = styled.div`
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  :hover {
    background: #ebecf0;
  }
  ${(props) =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;
