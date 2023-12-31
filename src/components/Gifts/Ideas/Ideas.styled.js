import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

const HeadlineIdeas = styled(Headline)`
  text-align: center;
  margin-bottom: 57px;
`;

const IdeasList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 20px;
  }
`;

const IdeasItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 24px;
  }

  & img {
    width: 150px;
    height: auto;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 250px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 285px;
      height: 400px;
    }
  }
`;

const Link = styled(NavLink)`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  text-decoration: none;
  color: ${theme.colors.brown1};
`;

export { HeadlineIdeas, IdeasList, IdeasItem, Link };
