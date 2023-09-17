import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { Section, Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';

const FormSection = styled(Section)``;

const FormContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 170px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 80px;
    min-height: calc(100vh - 120px);

    background-repeat: no-repeat;
    background-size: 1280px auto;
    background-position: bottom 0 left 50%;
  }
`;

const TitleLogin = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
    color: ${theme.colors.brown1};
  }
`;
export const IconValid = styled(FaCheck)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const IconInValid = styled(FaTimes)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

const FormLogin = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 608px;
    height: 100%;
    margin: 0 auto;
    padding: 60px 0 40px 0;
    background-color: transparent;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 618px;
    padding: 60px 0 60px 0;
  }
  > div {
    position: relative;
  }
`;
const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;
const Input = styled(Field)`
  width: 280px;
  font-size: ${theme.fontSizes.small};
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: ${theme.colors.blue1};
  color: ${theme.colors.brown2};
  border: none;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${theme.colors.darkGreen};
    color: ${theme.colors.darkGreen};
    outline: none;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 448px;
    font-size: ${theme.fontSizes.medium};
    padding: 14px 0 13px 32px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 558px;
  }
  &::placeholder {
    text-transform: uppercase;
  }
  &:focus ~ .floating-label,
  &:not([value='']):not(:focus):invalid ~ .floating-label,
  &:not([value='']):not(:focus):valid ~ .floating-label {
    top: -15px;
    left: 20px;
    font-size: 11px;
    opacity: 1;
  }
`;

export const Span = styled.span`
  position: absolute;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  text-transform: uppercase;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
`;

const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  color: ${theme.colors.brown1};
  background: ${theme.colors.green4};
  transform: scale(1);
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.brown2};
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
`;
const ErrorBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: -5px;
  left: 15px;
  color: #e53e3e;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.03em;
  margin-bottom: -16px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    left: 32px;
  }
`;

const Div = styled.div`
  margin-bottom: 32px;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-bottom: 32px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 448px;
    font-size: ${theme.fontSizes.medium};
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 558px;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 10px;
  color: ${theme.colors.brown2};
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    color: ${theme.colors.brown3};
  }
`;

const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  letter-spacing: 0.04em;
  color: ${theme.brown2};
`;

export {
  FormSection,
  FormContainer,
  TitleLogin,
  FormLogin,
  ShowPassword,
  Input,
  Btn,
  StyledLink,
  BoxText,
  ErrorBox,
  Div,
  BtnContainer,
};
