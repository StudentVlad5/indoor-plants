import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { IconFavorite } from 'components/Header/Navigation/Navigation.styled';

const IconFav = styled(IconFavorite)`
  cursor: pointer;
  display: block;
  size: 30px;
  transition: ${theme.transition[0]};
  & > path {
    stroke: ${theme.colors.brown1};
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: space-evenly;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* justify-content: flex-end; */
  }
`;

const Card = styled.li`
  position: relative;
  & a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 214px;
  height: 300px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 285px;
    height: 460px;
  }
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 285px;
  margin-bottom: 9px;
`;

const CardName = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.green};
`;

const CardPrices = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardDiscount = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  color: ${theme.colors.green};
`;

const CardPrice = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  text-decoration-line: line-through;

  color: ${theme.colors.brown2};
`;

const CardSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  & span {
    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    color: ${theme.colors.brown2};
  }

  & div {
    display: flex;
    gap: 3px;
  }
`;
const BtnForFavorite = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
`;

export {
  Grid,
  Card,
  CardImage,
  CardTitle,
  CardName,
  CardPrices,
  CardDiscount,
  CardPrice,
  CardSize,
  BtnForFavorite,
  IconFav,
};
