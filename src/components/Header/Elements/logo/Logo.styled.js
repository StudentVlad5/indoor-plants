import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';

const Text = styled(NavLink)`
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0.07em;
  color: ${theme.colors.brown2};
  text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.6);
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export { Text };
