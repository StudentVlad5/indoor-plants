import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconSearch } from 'images/svg/icon_searchLight__header.svg';
import { ReactComponent as iconFavorite } from 'images/svg/icon_favorite__header.svg';
import { ReactComponent as iconBasket } from 'images/svg/icon_basketLight__header.svg';

const IconSearch = styled(iconSearch)`
  cursor: pointer;
  display: none;
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
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const IconFavorite = styled(iconFavorite)`
  cursor: pointer;
  display: none;
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
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const IconBasket = styled(iconBasket)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
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

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 94px;
  }
`;

const NavBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: ${theme.breakpoints.desktop_max}) {
    display: flex;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    gap: 24px;
  }
`;

const MobileContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 0px;
  }
`;
const MobileNavBlock = styled(NavBlock)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const IconSearchMobile = styled(IconSearch)`
  display: flex;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;
const IconFavoriteMobile = styled(IconFavorite)`
  display: flex;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export {
  Container,
  NavBlock,
  IconSearch,
  IconFavorite,
  IconBasket,
  MobileContainer,
  MobileNavBlock,
  IconSearchMobile,
  IconFavoriteMobile,
};
