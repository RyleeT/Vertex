import styled from "styled-components";
import Particles from "react-particles-js";
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
  padding: 16px 50px;
  :hover {
    color: white;
    background-color: #e95739;
  }
`;

export const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
