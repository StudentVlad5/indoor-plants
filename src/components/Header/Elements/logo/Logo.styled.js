import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';

const Text = styled(NavLink)`
  font-family: ${theme.fonts[0]};
  font-weight: 700;
  font-style: normal;
  font-size: ${theme.fontSizes.large};
  line-height: 42px;
  letter-spacing: 0.07em;
  color: ${theme.colors.brown2};
  text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.4);
  text-decoration: none;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export { Text };
