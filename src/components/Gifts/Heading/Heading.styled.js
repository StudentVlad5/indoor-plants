import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import { Section } from 'components/baseStyles/CommonStyle.styled';

const HeadingSection = styled(Section)`
  padding-top: 129px;
  padding-bottom: 0;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 139px;
    padding-bottom: 0;
  }

  & img {
    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      height: 400px;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 36.8%;
  height: 100%;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 5px 5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    -5px -5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    20px 30px 100px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(7.5px);

  @media screen and (min-width: 1440px) {
    width: 530px;
    height: 400px;
  }
`;

const LinkBtn = styled(NavLink)`
  /* width: 100%; */
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

export { HeadingSection, ImageContainer, Background, LinkBtn };
