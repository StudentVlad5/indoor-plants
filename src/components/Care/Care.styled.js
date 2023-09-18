import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const CareSection = styled(Section)`
  padding-top: 122px;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

const CareContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: thin;
  scroll-behavior: smooth;
`;
const CareUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
`;

const CareLi = styled.li`
  margin: 8px 0px;
  width: 100%;
`;

const CareSpanTitle = styled.span`
  font-size: ${theme.fontSizes.extra};
  color: ${theme.colors.darkGreen};
  font-family: ${theme.fonts[1]};
  font-weight: 500px;
`;

const CareSpan = styled.span`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.brown};
  font-family: ${theme.fonts[1]};
  font-weight: 400px;
  padding-left: 40px;
`;

const CareP = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.brown};
  font-family: ${theme.fonts[1]};
  font-weight: 400px;
  padding-left: 40px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 10px 0;
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
  CareP,
  CareSpan,
};
