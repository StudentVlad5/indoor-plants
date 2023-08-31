import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { IconClose } from '../MobileMenu/MobileMenu.styled';
import { Link } from 'react-router-dom';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.grey};
  opacity: 0.4;
  z-index: 1000;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const BasketBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: ${theme.colors.darkGreen};
  width: 437px;
  height: 780px;

  padding: 36px 55px;

  display: ${props => (props.open ? 'block' : 'none')};
  z-index: 1001;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 36px 25px;
  }
`;

export const Box = styled.div`
  position: relative;
  padding-bottom: 145px;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  }
`;

export const BasketBoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 52px;
`;

export const BasketTitle = styled.h3`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: 'Fraunces', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BasketBoxList = styled.div``;

export const BasketBoxListTitle = styled.h2`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: 'Fraunces', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BasketBoxListDiscr = styled.p`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 64px;
`;

export const ListItem = styled.li`
  &:nth-child(3) {
    margin-top: 24px;
  }
  &:nth-child(4) {
    margin-top: 24px;
  }

  & a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ListImage = styled.img`
  width: 120px;
  height: 130px;
`;

export const ListTitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const ListTitle = styled.span`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: 'Fraunces', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

export const BasketIconClose = styled(IconClose)`
  cursor: pointer;

  & > path {
    stroke: ${theme.colors.fon};
    fill: ${theme.colors.fon};
  }
`;

// Order true

export const OrderBox = styled.div`
  position: relative;
`;

export const OrderBtn = styled(Link)`
  border-radius: 10px;
  background-color: ${theme.colors.fon};

  padding: 12px 160px;
  text-decoration: none;
  color: ${theme.colors.brown1};
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const OrderList = styled.ul`
  position: relative;
  padding-top: 10px;
  padding-bottom: 232px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  }
`;

export const OrderItem = styled.li``;

export const TotalTitleBox = styled.div`
  /* position: absolute; */
  /* bottom: -365px; */

  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  } */
`;

export const TotalTitle = styled.p`
  padding-top: 24px;

  color: ${theme.colors.fon};
  font-family: 'Fraunces', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
`;

export const TotalDiscr = styled.p`
  margin-top: 12px;
  margin-bottom: 24px;

  color: ${theme.colors.fon};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
