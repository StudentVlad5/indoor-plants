import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const CareSection = styled(Section)`
  padding-top: 122px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
    flex-direction: row;
  }
`;

const CareContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &:first-child {
    height: 30vh;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    &:first-child {
      height: 100vh;
    }
  }
`;
const ListContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: content-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CareUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
  padding: 30px;
  margin-bottom: 20px;
  background-color: ${theme.colors.green6};
`;

const CareLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: baseline;
  margin: 8px 0px;
  width: 100%;
  &:first-child {
    margin-bottom: 24px;
  }
`;

const CareSpanTitle = styled.span`
  color: ${theme.colors.green1};
  font-family: ${theme.fonts[0]};
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  &:first-letter {
    text-transform: uppercase;
  }
`;

const CareSpanName = styled.span`
  color: ${theme.colors.green};
  font-family: ${theme.fonts[0]};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
const CareSpanValue = styled.span`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:first-letter {
    text-transform: uppercase;
  }
`;

const CareSpan = styled.span`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  &:first-letter {
    text-transform: uppercase;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 20px;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  width: 100%;
  padding: 8px 0 8px 10px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};
  background-color: ${theme.colors.fon};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 18px 0 18px 10px;
    font-size: 14px;
  }

  border-top: 1px solid ${theme.colors.beige};

  &:last-of-type {
    border-bottom: 0.5px solid ${theme.colors.beige};
  }
`;

const TitleHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  cursor: pointer;

  &.active ~ div {
    display: flex;
  }

  & span {
    text-transform: uppercase;
  }
`;
export {
  CareSection,
  CareContainer,
  CareUl,
  CareLi,
  CareSpanTitle,
  List,
  ListItem,
  TitleHeading,
  CareSpan,
  ListContainer,
  CareSpanName,
  CareSpanValue,
};
