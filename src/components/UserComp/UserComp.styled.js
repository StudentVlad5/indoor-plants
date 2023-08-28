import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { NavLink } from 'react-router-dom';

export const UserSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

export const UserContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

export const UserDataWrapper = styled.div`
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

export const UserDataContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px ${props => props.theme.shadowColor};
  margin-bottom: 40px;
  margin-top: 18px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 40px;
    margin-left: -32px;
    padding-right: 40px;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
    margin-top: 24px;
    margin-left: -16px;
    padding-right: 16px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const MyPetContainer = styled.div`
  display: flex;
  width: 80%;
  border-bottom: none;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 768px) {
    border-bottom: 2px solid ${props => props.theme.orangeLight};
  }
`;

export const UserTitle = styled(Title)`
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
  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
`;
