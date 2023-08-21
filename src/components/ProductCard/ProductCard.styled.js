import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const ProductCardSection = styled(Section)`
  padding-top: 40px;
`;

const ProductCardContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

const ProductNav = styled.div`
  padding: 24px 0;
  border-top: 1px solid ${theme.colors.brown1};
  border-bottom: 1px solid ${theme.colors.brown1};
`;

const ProductNavList = styled.ul`
  display: inline-flex;
`;

const ProductNavItem = styled.li`
  position: relative;
  margin-right: 13px;

  &:not(:last-child)::before {
    content: ' / ';
    position: absolute;
    top: 0;
    right: -8px;
  }
`;

const ProductNavLink = styled.a`
  font-family: ${theme.fonts[0]}; //'Nib Pro'
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${props =>
    props.$primary ? theme.colors.green : theme.colors.green1};

  text-decoration: none;
`;

export {
  ProductCardSection,
  ProductCardContainer,
  ProductNav,
  ProductNavList,
  ProductNavItem,
  ProductNavLink,
};
