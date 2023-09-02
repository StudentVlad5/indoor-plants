import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

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

const Accord = styled.div`
  display: flex;
  align-items: center;

  /* padding: 10px; */

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
  top: 25px;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 38vw;
  min-width: 200px;
  padding: 8px;

  background-color: ${theme.colors.fon};
  border: 0.5px solid ${theme.colors.brown2};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 2px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 65px;
    width: 340px;
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

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding-top: 36px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  max-width: calc(100% - 20px);

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: calc(100% - 60px);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: calc(100% - 285px);
  }
`;

export {
  CatalogSection,
  CatalogContainer,
  Heading,
  HeadingBtnBox,
  SortBox,
  Accord,
  IconBtn,
  GridContainer,
  FiltersContainer,
  FiltersBox,
  FiltersWrapper,
  GridWrapper,
};
