import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  padding: 20px;

  box-shadow: 0px 6px 8px -6px rgba(0, 0, 0, 0.75);
`;

export const Container = styled.div`
  position: relative;
  padding: 0 30px;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavItemLink = styled(NavLink)`
  margin: 0;
  padding: 10px 0;

  color: #000000;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;

  border-bottom: 2px solid transparent;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: goldenrod;
  }

  :hover {
    border-bottom: 2px solid;
  }
`;
