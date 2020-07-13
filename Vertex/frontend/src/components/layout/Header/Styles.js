import styled from "styled-components";
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
