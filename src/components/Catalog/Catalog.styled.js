import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';

const CatalogSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
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

const HeadingBtnBox = styled.div`
  display: flex;
  gap: 18px;
`;

const SortBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 150px;
  }
`;

const Sort = styled.div`
  display: flex;
  align-items: center;

  padding: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 50px;

    padding: 15px;
    border: 0.5px solid ${theme.colors.brown2};
  }

  & span {
    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.green};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 14px;
    }
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
  background-color: ${theme.colors.fon};
  border: 0.5px solid ${theme.colors.brown2};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 2px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 58px;
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

const FiltersBox = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const FiltersWrapper = styled.div`
  position: absolute;
  top: 35px;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 50vw;
  padding: 8px;

  background-color: ${theme.colors.fon};
  border: 0.5px solid ${theme.colors.brown2};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 2px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 65px;
    border-radius: 0;
  }
`;

const FiltersContainer = styled.div`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    gap: 36px;
    width: 285px;
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px 0 8px 10px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 18px 0 18px 10px;
    font-size: 14px;
  }

  border-top: 1px solid ${theme.colors.beige};

  &:last-of-type {
    border-bottom: 0.5px solid ${theme.colors.beige};
  }
`;

const FilterBtn = styled.button`
  width: 100%;
  padding: 6px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
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
    padding: 16px 0;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: #6f8d4c;
    background-color: ${theme.colors.green5};
    border: 1px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    border: 1px solid ${theme.colors.brown2};
    cursor: default;
  }
`;

const FilterHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  cursor: pointer;

  &.active ~ div {
    display: flex;
  }
`;

const FilterInnerList = styled.div`
  display: none;
  /* display: flex; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4px;

  width: 100%;

  & > label {
    display: flex;
  }
`;

const FilterInnerListItem = styled.input`
  margin-right: 4px;

  &:checked {
    background-color: ${theme.colors.green};
  }
`;

const InfoBtn = styled.button`
  width: 100%;
  padding: 6px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
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
    padding: 16px 0;
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

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin-top: 36px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;

  width: 100%;
  max-width: calc(100% - 20px);

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: space-around;
    width: calc(100% - 60px);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: flex-end;
    width: calc(100% - 285px);
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

const BenefitsSection = styled(Section)`
  text-align: center;
`;

const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 64px;
`;

const BenefitsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 285px;
  }
`;

const BenefitsSubtitle = styled(Subtitle)`
  color: ${theme.colors.brown1};
`;

const BenefitsDescription = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 26.56px */

  color: ${theme.colors.brown2};
`;

export {
  CatalogSection,
  CatalogContainer,
  Heading,
  HeadingBtnBox,
  SortBox,
  Sort,
  SortList,
  SortItem,
  IconBtn,
  InfoBtn,
  InfoBtnBox,
  GridContainer,
  FiltersContainer,
  FiltersBox,
  FiltersWrapper,
  FilterBtn,
  Filters,
  Filter,
  FilterHeading,
  FilterInnerList,
  FilterInnerListItem,
  Grid,
  Card,
  CardImage,
  CardTitle,
  CardName,
  CardPrices,
  CardDiscount,
  CardPrice,
  CardSize,
  BenefitsSection,
  BenefitsList,
  BenefitsItem,
  BenefitsSubtitle,
  BenefitsDescription,
};
