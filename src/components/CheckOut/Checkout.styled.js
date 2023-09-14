import styled from 'styled-components';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { IconClose } from 'components/Footer/ModalTeam/ModalTeam.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import { ReactComponent as done } from 'images/svg/done.svg';
import { ReactComponent as shippingFast } from 'images/svg/shipping-fast.svg';
import { Quantity } from 'components/ProductCard/ProductCard.styled';

export const FormSection = styled(Section)``;

export const FormContainer = styled(Container)`
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 170px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 80px;
  }
`;

export const TitleCheckOut = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
    color: ${theme.colors.brown1};
  }
`;

export const TextCheckOut = styled.p`
  font-size: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
  margin-top: 0;
  color: ${theme.colors.brown2};
`;

export const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  color: ${theme.colors.brown1};
  background: ${theme.colors.green4};
  transform: scale(1);
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  margin-bottom: 20px;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.brown2};
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 71px;
  }
`;

export const BasketSection = styled(Section)`
  padding-top: 138px;

  &::before {
    content: none;
  }
`;

export const BasketContainer = styled(Container)`
  /* padding: 0 30px; */
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
  width: 600px;
  height: 140px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:last-child {
    margin-bottom: 261px;
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
  background-color: ${theme.colors.green6};
  width: 500px;
  height: 140px;
  padding: 8px 8px 8px 26px;
  position: absolute;
  top: 148px;
  right: 120px;
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
  border-radius: 10px;
  border: 1px solid ${theme.colors.brown2};
  background-color: transparent;
  padding: 15px 215px;
  margin-top: 22px;
  margin-bottom: 24px;
  cursor: pointer;

  color: ${theme.colors.brown2};
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
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

// Delivery

export const Delivery = styled.div``;

export const DeliveryInfoBox = styled.div``;

export const DeliveryInfoBoxTitle = styled.h2`
  color: rgb(95, 74, 50);
  margin-bottom: 20px;

  font-family: 'Fraunces', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DeliveryBlock = styled.div`
  width: 754px;
`;

export const DeliveryBlockOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryBlockOptionsLable = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  border: 1px solid #000;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  & input[type='radio'] {
    display: none;
  }

  background-color: ${props =>
    props.isSelected ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
`;

export const DeliveryBlockOptionsInput = styled.input``;

export const DeliveryForm = styled.form`
  display: flex;
  margin-top: 20px;
  width: 925px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const DeliveryFormInput = styled.input`
  /* padding: 15px 222px 15px 15px; */
  border: 1px solid #c6cdd3;
  padding-left: 15px;
  width: 394px;
  height: 60px;
  border-color: transparent;
  border-radius: 10px;
  background: ${theme.colors.blue3};
`;

export const DeliveryFormUser = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DeliveryFormLable = styled.label`
  &:nth-child(1) {
    margin-right: 40px;
    margin-bottom: 10px;
  }

  &:nth-child(2) {
    margin-bottom: 10px;
  }

  &:nth-child(3) {
    margin-right: 40px;
    margin-bottom: 10px;
  }

  &:nth-child(5) {
    margin-bottom: 10px;
  }

  &:nth-child(7) {
    margin-right: 40px;
  }
`;

export const DeliveryFormBtn = styled.button`
  border-radius: 10px;
  border: 1px solid rgb(140, 130, 118);
  background-color: transparent;
  padding: 15px 46px;
  margin-top: 22px;
  margin-bottom: 24px;
  cursor: pointer;
  color: ${theme.colors.brown1};
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const DeliveryFormBtnFinish = styled(DeliveryFormBtn)`
  background: ${theme.colors.green4};
`;

export const PaymentBlockOptionsLable = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  border: 1px solid #000;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  & input[type='radio'] {
    display: none;
  }

  background-color: ${props =>
    props.isSelected ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
`;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
