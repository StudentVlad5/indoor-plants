import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconSearch } from 'images/svg/icon_searchLight__header.svg';
import { ReactComponent as iconFavorite } from 'images/svg/icon_favorite__header.svg';
import { ReactComponent as iconBasket } from 'images/svg/icon_basketLight__header.svg';

const IconSearch = styled(iconSearch)`
  cursor: pointer;
  size: 24px;
  transition: ${theme.transition[0]};
  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;

const IconFavorite = styled(iconFavorite)`
  cursor: pointer;
  size: 24px;
  transition: ${theme.transition[0]};
  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;

const IconBasket = styled(iconBasket)`
  cursor: pointer;
  size: 24px;
  transition: ${theme.transition[0]};
  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;

const Container = styled.div`
  display: flex;
  text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 80px;
  }
`;

const NavBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: ${theme.breakpoints.desktop_max}) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
export { Container, NavBlock, IconSearch, IconFavorite, IconBasket };
