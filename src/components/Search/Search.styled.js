import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconSearch } from 'images/svg/icon_searchLight__header.svg';
import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100%;
  height: 100vh;

  background-color: ${theme.colors.grey};
  opacity: 0.4;
`;

const FormContainer = styled.form`
  position: relative;
  margin-left: auto;
  width: 100%;
  z-index: 40;

  background-color: ${theme.colors.fon};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 250px;
  }
`;

const Input = styled.input`
  all: unset;

  width: 100%;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${theme.colors.brown2};
  background-color: ${theme.colors.fon};

  padding-right: 5px;
  margin-right: 10px;

  &:focus,
  &:hover {
    border-right: 2px solid ${theme.colors.green};
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;

  padding: 10px;

  color: ${theme.colors.grey};
  background-color: transparent;
  border: 0.5px solid ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 44px;
    padding: 10px 30px 10px 10px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

const Result = styled.div``;

const ButtonSearch = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;

  transition: ${theme.transition[0]};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 2px solid ${theme.colors.brown1};
    border: none;
  }
`;

const IconSearch = styled(iconSearch)`
  display: none;
  size: 24px;
  transition: ${theme.transition[0]};
  cursor: pointer;

  & > path {
    stroke: ${theme.colors.brown1};
  }

  &:hover,
  &:focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export {
  Overlay,
  FormContainer,
  Input,
  Label,
  Result,
  ButtonSearch,
  IconSearch,
};
