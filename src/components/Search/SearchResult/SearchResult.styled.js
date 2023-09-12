import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import {
  Card,
  CardDiscount,
  CardImage,
  CardName,
  CardPrice,
  CardPrices,
  CardSize,
  CardTitle,
} from 'components/Catalog/CatalogList/CatalogList.styled';

import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const SearchResult = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 40;

  width: 1000px;
  height: 500px;

  background-color: ${theme.colors.fon};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const InnerLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  width: 65%;
  padding: 30px;
`;

const InnerRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  width: 35%;
  padding: 30px;

  background-color: ${theme.colors.greyOpacity};
`;

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;

  width: 100%;
`;

const LinkToCatalog = styled(NavLink)`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  padding: 7px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  text-align: center;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 0.5px solid ${theme.colors.green};
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: ${theme.colors.green2};
    border: 0.5px solid ${theme.colors.green2};
  }
`;

const CardSearch = styled(Card)``;

const CardImageSearch = styled(CardImage)`
  width: 62px;
  height: 100px;
  margin-right: 12px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 93px;
    height: 150px;
  }
`;

const CardNameSearch = styled(CardName)`
  font-size: 12px;
`;

const CardPricesSearch = styled(CardPrices)`
  gap: 4px;
`;

const CardDiscountSearch = styled(CardDiscount)`
  font-size: 12px;
`;

const CardPriceSearch = styled(CardPrice)`
  font-size: 10px;
`;

const CardSizeSearch = styled(CardSize)`
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  & span {
    font-size: 8px;
  }
`;

const CardTitleSearch = styled(CardTitle)`
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  max-width: 200px;
`;

const Category = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  & a {
    text-decoration: none;
    text-transform: capitalize;
    color: ${theme.colors.green};

    &:hover,
    &:focus {
      color: ${theme.colors.brown1};
    }
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;
  transition: ${theme.transition[0]};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 2px solid ${theme.colors.brown1};
    border: none;
  }
`;

const IconClose = styled(iconClose)`
  size: 24px;
  display: block;
  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
`;

export {
  SearchResult,
  Wrapper,
  InnerLeftWrapper,
  InnerRightWrapper,
  Products,
  LinkToCatalog,
  Category,
  CardSearch,
  CardDiscountSearch,
  CardImageSearch,
  CardNameSearch,
  CardPriceSearch,
  CardPricesSearch,
  CardSizeSearch,
  CardTitleSearch,
  ButtonClose,
  IconClose,
};
