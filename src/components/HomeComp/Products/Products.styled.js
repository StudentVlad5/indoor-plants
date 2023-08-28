import { Container } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const ProductsBox = styled(Container)`
  padding-bottom: 0;

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
`;

export const ProductsSection = styled.div`
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

export const ProductsTitle = styled.h2`
  color: #5a6b47;
  font-family: 'Nib Pro', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 144.5%;
  margin-bottom: 24px;
`;

export const ProductsBtn = styled.a`
  display: flex;
  justify-content: flex-end;
  color: #5a6b47;
  font-family: 'Nib Pro', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ProductsList = styled.ul`
  display: flex;
  margin-top: 24px;
`;

export const ProductsListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ProductsImg = styled.img`
  width: 285px;
  height: 400px;
`;

export const ProductsListItemDiscr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsListItemDiscrText = styled.div`
  display: flex;
  margin-top: 21px;
`;

export const ListItemDiscrTitle = styled.h4`
  color: #5a6b47;
  text-align: center;
  font-family: 'Nib Pro', sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const ListItemDiscrSize = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    color: #8c8276;
    text-align: center;
    font-family: 'Raisonne Pro', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;
