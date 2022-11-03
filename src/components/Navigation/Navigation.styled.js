import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10 px;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;

  &.active {
    background-color: #07c;
    color: white;
  }
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  margin-top: auto;
  margin-bottom: auto;
`;
