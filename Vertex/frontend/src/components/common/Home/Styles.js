import styled from "styled-components";
import { Link } from "react-router-dom";

export const Heading = styled.div`
  font-size: 60px;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: inherit;
  z-index: 0;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Link)`
  border-radius: 0.25rem;
  background-color: #ff6b4a;
  color: white;
  font-size: 20px;
  padding: 16px 30px;
  :hover {
    color: white;
    background-color: #e95739;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`;
