import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import {
  Section,
  Headline,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';

const GiftsSection = styled(Section)`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    height: 1px;
    width: 100%;
    background: ${theme.colors.brown1};
  }
`;

const GiftsInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 0;
  }
`;

const InnerLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
    padding-right: 173px;
  }
`;

const InnerRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
    padding-left: 173px;
  }
`;

const GiftsHeadline = styled(Headline)`
  margin-bottom: 40px;
`;

const GiftsSubtitle = styled(Subtitle)`
  color: ${theme.colors.brown1};
  margin-bottom: 24px;
`;

const Description = styled.p`
  margin-bottom: 32px;

  font-family: ${theme.fonts[1]}; //Nib pro
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 166%; /* 26.56px */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const LinkBtn = styled(NavLink)`
  /* width: 220px; */
  padding: 10px 25px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 0.5px solid ${theme.colors.green};
  border-radius: 5px;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
    padding: 10px 55px;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.green2};
    border: 0.5px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    background-color: ${theme.colors.green4};
    border: 0.5px solid ${theme.colors.green4};
    cursor: default;
  }
`;

export {
  GiftsSection,
  GiftsInnerContainer,
  InnerLeftWrapper,
  InnerRightWrapper,
  GiftsHeadline,
  GiftsSubtitle,
  Description,
  LinkBtn,
};
