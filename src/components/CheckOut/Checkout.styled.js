import styled from 'styled-components';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { IconClose } from 'components/Footer/ModalTeam/ModalTeam.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import { ReactComponent as done } from 'images/svg/done.svg';
import { ReactComponent as shippingFast } from 'images/svg/shipping-fast.svg';
import { Quantity } from 'components/ProductCard/ProductCard.styled';
import { NavLink } from 'react-router-dom';

export const FormSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;
export const CheckOutContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
  /* min-height: 100vh; */
  height: 100%;
  padding-top: 40px;
`;
export const BasketCompBox = styled.div`
  position: relative;
`;
export const BoxForData = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const BasketCompTitle = styled.h2`
  margin-bottom: 40px;
  color: ${theme.colors.brown1};

  font-family: 'Barlow', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
export const BasketCompIconClose = styled(IconClose)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
`;
export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 320px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 437px;
  }
`;
export const CheckOutDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: start;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;
export const BasketCompList = styled.ul`
  /* display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative; */
`;
export const BasketCompItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${theme.colors.green6};
  width: 100%;
  height: 140px;
  margin-bottom: 20px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 500px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 800px;
  }
`;
export const BoxForDiscrData = styled.div`
  margin-left: 20px;
`;
export const DiscrDataList = styled.ul``;
export const DiscrDataListItem = styled.li`
  display: flex;

  &:nth-child(1) {
    margin-bottom: 10px;
  }

  &:nth-child(2) {
    margin-bottom: 8px;
    position: relative;
  }

  &:nth-child(3) {
    margin-bottom: 8px;
    position: relative;
  }

  &:nth-child(4) {
    margin-bottom: 15px;
    position: relative;
  }
`;
export const DiscrDataListItemTitle = styled.h4`
  color: ${theme.colors.brown1};
  font-family: 'Fraunces', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-top: 1px;
`;
export const DiscrDataListItemTitlePrice = styled(DiscrDataListItemTitle)`
  position: absolute;
  font-size: 14px;
  right: 10px;
`;
export const DiscrDataListItemInfoTitle = styled.p`
  color: ${theme.colors.brown1};
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
`;
export const DiscrDataListItemInfo = styled.p`
  position: absolute;
  right: 0;
`;
export const BtnItem = styled.p`
  display: flex;
  align-items: center;
  color: ${theme.colors.brown2};
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`;
export const BasketCompImg = styled.img`
  width: 107px;
  height: 140px;
`;
export const QuantityCheckOut = styled(Quantity)`
  border-radius: 0;
  border: none;
  position: absolute;
  left: 58px;
`;

// PaymentBox

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${theme.colors.green6};
  width: 100%;
  padding: 8px 8px 8px 26px;
  margin-bottom: 20px;
  /* position: absolute; */
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 500px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 800px;
  }
`;

export const PaymentTotalTitle = styled.h4`
  color: ${theme.colors.brown1};
  font-family: Fraunces;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-bottom: 11px;
`;

export const PaymentBoxOrder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentTotalList = styled.ul``;

export const PaymentTotalListItem = styled.li`
  display: flex;

  &:nth-child(1) {
    margin-bottom: 6px;
  }

  &:nth-child(2) {
    margin-bottom: 6px;
  }

  &:nth-child(3) {
    margin-bottom: 10px;
  }
`;

export const PaymentTotalListItemDiscr = styled.p`
  position: absolute;
  right: 8px;

  color: ${theme.colors.brown2};
  font-family: 'Fraunces', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PaymentTotalTitlePrice = styled(PaymentTotalListItemDiscr)`
  color: ${theme.colors.brown1};
  font-size: 16px;
  letter-spacing: 0.32px;
`;

export const PaymentBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${theme.colors.brown2};
  background-color: transparent;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 22px;
  margin-bottom: 24px;
  width: 100%;
  cursor: pointer;

  color: ${theme.colors.brown2};
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 500px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 800px;
  }
`;

export const DeliverBox = styled.div``;

export const DeliverBoxItem = styled.p`
  display: flex;
  align-items: center;
  color: ${theme.colors.brown2};
  font-family: 'Fraunces', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 19.2px */

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Done = styled(done)`
  margin-right: 14px;
`;

export const ShippingFast = styled(shippingFast)`
  margin-right: 14px;
`;

export const AuthCheckOutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthCheckOutBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckOutAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const CheckOutTitle = styled(Title)`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 0px;
  margin-bottom: 24px;
  font-size: ${theme.fontSizes.extra};
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.brown1};
  outline: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    text-align: start;
    padding-bottom: 4px;
    font-size: 28px;
    letter-spacing: 0;
  }
`;

export const LinkFolder = styled(NavLink)`
  display: flex;
  width: 180px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  text-decoration: none;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid ${theme.colors.brown};
  color: ${theme.colors.brown};
  background-color: transparent;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
`;
