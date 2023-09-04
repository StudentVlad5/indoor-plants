import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: space-around;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* justify-content: flex-end; */
  }
`;

const Card = styled.li`
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
};
