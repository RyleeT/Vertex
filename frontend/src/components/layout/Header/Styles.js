import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThreeBars } from "@styled-icons/octicons/ThreeBars";

export const Navbar = styled.div`
  background: #24292e;
`;

export const Navbutton = styled(ThreeBars)`
  color: white;
  border-radius: 0.25rem;
  :hover {
    color: #bebfc1;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  border-radius: 0.25rem;
  :hover {
    color: #bebfc1;
  }
`;

export const Title = styled.span`
  font-weight: 500;
`;

export const Welcome = styled.span`
  font-weight: 500;
`;
