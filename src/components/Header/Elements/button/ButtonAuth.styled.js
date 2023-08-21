import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';

const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.brown2};
  height: 35px;
  text-decoration: none;
  text-transform: uppercase;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.04em;
  transition: all 0.25s ease-in;

  :hover,
  :focus {
    background-color: ${theme.colors.orangeLight};
    color: ${theme.colors.white};
  }

  &.active {
    background-color: ${theme.colors.orangeLight};
    color: ${theme.colors.white};
  }

  @media screen and (min-width: 767.99px) and (max-width: 1280px) {
    height: 44px;
    font-size: 20px;
    line-height: 27px;
  }
  @media screen and (min-width: 1279.99px) {
    height: 48px;
    font-size: 20px;
    line-height: 27px;
  }
`;

export { AuthLink };
