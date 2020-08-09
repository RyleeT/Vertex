import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h3`
  font-weight: 500;
  line-height: 100%;
`;

export const Button = styled(Link)`
  border-radius: 0.25rem;
  background-color: #ff6b4a;
  color: white;
  font-size: 16px;
  :hover {
    color: white;
    background-color: #e95739;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`;

export const DeleteButton = styled.button`
  border-radius: 0.25rem;
  background-color: #ff4a4a;
  color: white;
  :hover {
    color: white;
    background-color: #e8323a;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`;
