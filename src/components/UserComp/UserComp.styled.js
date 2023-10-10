import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';

export const UserSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

export const UserContainer = styled(Container)`
  padding-top: 40px;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: start;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 50px;
    width: 80%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 84px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  align-items: flex-start;
  gap: 20px;
  width: 120px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 150px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 30px;
    width: 285px;
  }
`;

export const LinkFolder = styled(NavLink)`
  position: relative;
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.colors.darkGreen};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.green};
  }

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 0;
    width: 110px;
    height: 0.5px;
    background: ${theme.colors.beige};

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 150px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 285px;
    }
  }

  &.active {
    color: ${theme.colors.green};
  }
`;
