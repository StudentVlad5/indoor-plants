import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../baseStyles/Variables.styled';

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.medium};
  text-decoration: none;
  white-space: nowrap;
  text-transform: uppercase;
  margin-top: 60px;

  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: ${theme.breakpoints.desktop_max}) {
    margin-top: 88px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const NavList = styled(MobileNavList)`
  display: none;
  white-space: nowrap;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px;
    width: 100%;
  }
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.medium};
  line-height: 19px;
  letter-spacing: -0.04em;
  text-decoration: none;
  white-space: nowrap;
  color: ${theme.colors.brown1};

  &:not(:first-child) {
    margin-top: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: ${theme.breakpoints.desktop_max}) {
    font-weight: 500;
    font-size: ${theme.fontSizes.medium};

    &:not(:first-child) {
      margin-top: 60px;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-weight: 500;
    font-size: ${theme.fontSizes.large};

    &:not(:first-child) {
      margin-top: 0px;
      margin-left: 80px;
    }
  }

  transition: ${theme.transition[0]};
  :focus,
  :hover {
    color: ${theme.colors.darkGreen};
  }
  &.active {
    color: ${theme.colors.darkGreen};
    text-decoration: underline;
  }
`;

export { MobileNavList, NavList, NavItem };
