import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 60px 0;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;

    height: 1px;
    width: 100%;
    background: ${theme.colors.brown1};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 120px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1440px;
    padding: 0 120px;
  }
`;

const Title = styled.h1`
  font-family: 'Archivo', sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${props => props.theme.brown};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 48px;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${props => props.theme.brown};
  text-transform: uppercase;
`;

const Headline = styled.h3`
  font-family: 'Domine', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 144.5%; /* 46.24px */
  color: ${props => props.theme.brown};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 32px;
  }
`;

export { Container, Section, Title, Headline, Subtitle };
