import styled from 'styled-components';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const ProductCardSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  position: relative;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 0;
  }
`;

const ProductCardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0px 20px;
  margin: 0 auto;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 0px 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export { ProductCardSection, ProductCardContainer };
