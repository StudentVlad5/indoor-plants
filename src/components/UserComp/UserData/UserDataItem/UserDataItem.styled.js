import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { ReactComponent as Pencil } from 'images/svg/pencil.svg';
import { ReactComponent as CheckMark } from 'images/svg/checkMark.svg';
import styled from 'styled-components';

const UserDataItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 6px;
  padding-left: 16px;
  padding-right: 12px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: row;
    align-items: center;
  }
`;

const UserDataItemInputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserDataItemLabel = styled.label`
  display: block;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.04em;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
    line-height: 1.8;
  }
`;

const UserDataItemInput = styled.input`
  box-sizing: border-box;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small};
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.04em;
  width: 216px;
  height: 32px;
  padding: 4px 18px;
  border-radius: 5px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
    line-height: 1.8;
    width: 216px;
    height: 32px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Error = styled.div`
  font-size: 10px;
  line-height: 1;
  font-weight: 500;

  padding: 1px, 8px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  position: absolute;
  bottom: -20px;
  right: 20px;
  z-index: 2;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }
`;

const UserDataItemBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 20px;
  height: 20px;
  background-color: ${theme.colors.darkGreen};
  border-radius: 50%;
  border-color: transparent;
  margin-left: 9px;
  cursor: pointer;
  transform: all 150ms linear;
  transition: all 0.25s ease-in;

  &:hover svg,
  &:focus svg {
    fill: ${theme.colors.brown};
  }
  :disabled {
    svg {
      fill: ${theme.colors.grey1};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;

const PensilStyle = styled(Pencil)`
  width: 14px;
  height: 14px;
  fill: ${theme.colors.white};
  transform: all 150ms linear;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

const CheckMarkStyle = styled(CheckMark)`
  width: 14px;
  height: 14px;
  fill: ${theme.colors.white};
  transform: all 150ms linear;
  transition: all 0.25s ease-in;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 28px;
    height: 28px;
  }
`;

export {
  CheckMarkStyle,
  Error,
  InputWrapper,
  PensilStyle,
  UserDataItemBtn,
  UserDataItemInput,
  UserDataItemInputBtnWrapper,
  UserDataItemLabel,
  UserDataItemWrapper,
};
