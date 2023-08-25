import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const CatalogSection = styled(Section)`
  padding-top: 24px;
`;

const CatalogContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SortBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 285px;
  }
`;

const Sort = styled.div`
  display: flex;
  align-items: center;

  padding: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 181px;

    padding: 19px 15px;
    border: 0.5px solid ${theme.colors.brown2};
  }

  & span {
    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.green};
  }
`;

const SortList = styled.ul`
  position: absolute;
  top: 35px;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  gap: 4px;

  padding: 15px;
  border: 0.5px solid ${theme.colors.brown2};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 2px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 65px;
    right: 0;
    width: 100%;
    border-radius: 0;
  }
`;

const SortItem = styled.li`
  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    font-weight: 600;
  }
`;

const IconBtn = styled.button`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
  }

  &:disabled {
    cursor: default;

    & > svg > path {
      stroke: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
  }
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  margin-top: 36px;
`;

const FiltersBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 36px;

  width: 285px;
`;

const Filters = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 16px; */

  width: 100%;
`;

const Filter = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 18px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  border-top: 1px solid ${theme.colors.beige};

  &:last-of-type {
    border-bottom: 0.5px solid ${theme.colors.beige};
  }
`;

const FilterBtn = styled.button`
  width: 100%;
  padding: 16px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.brown1};

  background-color: transparent;

  border: 0.5px solid ${theme.colors.brown1};
  border-radius: 10px;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.brown2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    border: 1px solid ${theme.colors.brown2};
    cursor: default;
  }
`;

const InfoBtn = styled.button`
  width: 100%;
  padding: 16px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 0.5px solid ${theme.colors.green};
  border-radius: 10px;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
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

const InfoBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 100%;
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: stretch;
  gap: 20px;

  width: calc(100% - 285px);
`;

const Card = styled.li``;

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

  color: ${theme.colors.green};
`;

const CardPrices = styled.div`
  display: flex;
  gap: 8px;
`;

const CardDiscount = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  color: ${theme.colors.green};
`;

const CardPrice = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

const InfoSection = styled.div``;

export {
  CatalogSection,
  CatalogContainer,
  Heading,
  SortBox,
  Sort,
  SortList,
  SortItem,
  IconBtn,
  FiltersBox,
  FilterBtn,
  InfoBtn,
  InfoBtnBox,
  GridContainer,
  Filters,
  Filter,
  Grid,
  Card,
  CardImage,
  CardTitle,
  CardName,
  CardPrices,
  CardDiscount,
  CardPrice,
  CardSize,
  InfoSection,
};
