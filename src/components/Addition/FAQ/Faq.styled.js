import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};

  width: 100%;
  margin: 10px 0;
  padding: 20px;
`;
const Title = styled.h3`
  margin: 20px 0;
`;
const ParahQ = styled.div`
  position: relative;
  padding: 13px 0;
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 10px 0;
  z-index: 90;
  cursor: pointer;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    color: ${theme.colors.green};
    padding: 0;
  }
`;
const ParahA = styled(ParahQ)`
  text-transform: none;
`;
const ArrowBox = styled.div`
  position: absolute;
  right: 0;
  top: 25%;
  cursor: pointer;
`;
const Span = styled.span`
  font-weight: 600;
  color: ${theme.colors.darkGreen};
`;

export { Container, Title, ParahQ, ParahA, ArrowBox, Span };
