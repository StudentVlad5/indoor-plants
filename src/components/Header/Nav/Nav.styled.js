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
  text-transform: uppercase;
  margin-top: 60px;

  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    margin-top: 88px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const NavList = styled(MobileNavList)`
  display: none;

  @media screen and (min-width: 1280px) {
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
  font-size: ${theme.medium};
  text-decoration: none;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${theme.colors.brown1};

  &:not(:first-child) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;

    &:not(:first-child) {
      margin-top: 60px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    &:not(:first-child) {
      margin-top: 0px;
      margin-left: 80px;
    }
  }

  color: ${theme.colors.brown1};
  transition: all 0.25s ease-in;
  :focus,
  :hover {
    color: ${theme.colors.brown};
  }
  &.active {
    color: ${theme.colors.brown};
    text-decoration: underline;
  }
`;

export { MobileNavList, NavList, NavItem };
