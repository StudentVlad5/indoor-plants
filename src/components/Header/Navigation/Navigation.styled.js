import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconSearch } from 'images/svg/icon_searchLight__header.svg';
import { ReactComponent as iconFavorite } from 'images/svg/icon_favorite__header.svg';
import { ReactComponent as iconBasket } from 'images/svg/icon_basketLight__header.svg';

const IconSearch = styled(iconSearch)`
  cursor: pointer;
  size: 24px;
  & > path {
    stroke: ${theme.black};
    fill: ${theme.black};
  }
`;

const IconFavorite = styled(iconFavorite)`
  cursor: pointer;
  size: 24px;
  & > path {
    stroke: ${theme.black};
    fill: ${theme.black};
  }
`;

const IconBasket = styled(iconBasket)`
  cursor: pointer;
  size: 24px;
  & > path {
    stroke: ${theme.black};
    fill: ${theme.black};
  }
`;

const Container = styled.div`
  display: flex;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
  }

  @media screen and (min-width: 1280px) {
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

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
export { Container, NavBlock, IconSearch, IconFavorite, IconBasket };
