import styled from 'styled-components';
import { ReactComponent as LogoutIcon } from '../../../images/svg/logout.svg';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import theme from 'components/baseStyles/Variables.styled';

export const LogoutBtn = styled(Button)`
  display: flex;
  width: 180px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  text-decoration: none;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid ${theme.colors.brown};
  color: ${theme.colors.brown};
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus,
  &:hover > .logout_icon,
  &:focus > .logout_icon {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    fill: ${theme.colors.white};
    stroke: ${theme.colors.white};
    transition: all 150ms linear;
  }
`;

export const LogoutIconStyled = styled(LogoutIcon)`
  stroke: ${theme.colors.brown};
  transition: all 150ms linear;

  &:hover,
  :focus {
    fill: ${theme.colors.white};
    stroke: ${theme.colors.white};
  }
`;

export const LogoutBtnText = styled.span`
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-weight: 400;
  letter-spacing: -0.04em;
  margin-left: 8px;
  transition: all 150ms linear;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(17, 17, 17, 0.6);
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;
