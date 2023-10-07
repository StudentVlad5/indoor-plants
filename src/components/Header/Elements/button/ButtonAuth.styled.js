import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';

const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.brown2};
  /* height: 35px; */
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 8px;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: normal;
  /* letter-spacing: -0.04em; */
  white-space: nowrap;
  transition: ${theme.transition[0]};

  :hover,
  :focus {
    color: ${theme.colors.darkGreen};
  }

  &.active {
    color: ${theme.colors.darkGreen};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* height: 44px; */
    /* line-height: 27px; */
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* height: 48px; */
    /* line-height: 27px; */
  }
`;

export { AuthLink };
