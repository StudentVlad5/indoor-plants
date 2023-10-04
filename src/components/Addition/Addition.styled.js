import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { NavLink } from 'react-router-dom';

export const AdditionSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

export const AdditionContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
  /* min-height: 100vh; */
  height: 100%;
  padding-top: 40px;
`;

export const AdditionDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: start;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 320px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 437px;
  }
`;

export const AdditionAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const AdditionTitle = styled(Title)`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 0px;
  margin-bottom: 24px;
  font-size: ${theme.fontSizes.extra};
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.brown1};
  outline: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    text-align: start;
    padding-bottom: 4px;
    font-size: 28px;
    letter-spacing: 0;
  }
`;

export const LinkFolder = styled(NavLink)`
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
  transition: ${theme.transition};
  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
`;