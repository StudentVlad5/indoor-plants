import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Section } from 'components/baseStyles/CommonStyle.styled';
import { ReactComponent as novaPoshta } from 'images/svg/Nova_Poshta.svg';
import { ReactComponent as ukrposhta } from 'images/svg/ukrposhta-logo.svg';
import { ReactComponent as liqpay } from 'images/svg/LIQPAY.svg';
import { ReactComponent as wallet } from 'images/svg/wallet.svg';

export const DeliverySection = styled(Section)`
  padding-top: 170px;
`;

export const Delivery = styled.div``;

export const DeliveryInfoBox = styled.div``;

export const DeliveryInfoBoxTitle = styled.h2`
  color: rgb(95, 74, 50);
  margin-bottom: 20px;

  font-family: ${theme.fonts[1]};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DeliveryBlock = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
`;

export const DeliveryBlockOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeliveryBlockOptionsBoxLable = styled.div`
  background-color: ${theme.colors.green6};
  padding: 10px;
  width: 1200px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DeliveryBlockOptionsLable = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  & input[type='radio']::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #6f8d4c;
    display: inline-block;
  }
`;

export const DeliveryBlockOptionsInput = styled.input`
  appearance: none;
  margin-right: 20px;

  &:checked::before {
    content: '';
    background-color: #6f8d4c;
    width: 1px;
    height: 1px;
    display: inline-block;
  }
`;

export const NovaPoshtaIcon = styled(novaPoshta)``;
export const UkrPoshtaIcon = styled(ukrposhta)``;

export const DeliveryBlockOptionsLableBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  /* position: relative; */
  /* width: 100%; */
  padding-bottom: 20px;

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;

    height: 1px;
    width: 100%;
    background: ${theme.colors.brown1};
  } */
`;

export const DeliveryBlockOptionsTitle = styled.span`
  color: ${theme.colors.brown1};

  /* margin-bottom: 14px; */
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
`;

export const DeliveryBlockOptionsTitleDiscr = styled.span`
  color: ${theme.colors.brown1};

  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
`;

export const DeliveryInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DeliveryForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const DeliveryFormLable = styled.label`
  display: flex;
  flex-direction: column;
`;

export const DeliveryFormLableText = styled.span`
  margin-bottom: 8px;
  color: ${theme.colors.darkGreen};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export const DeliveryFormInput = styled.input`
  width: 100%;
  padding: 8px 30px 8px 20px;

  color: ${theme.colors.green};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  border: 1px solid #c6cdd3;
  border-color: transparent;
  border-radius: 10px;
  background: ${theme.colors.blue3};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 580px;
    padding: 12px 30px 12px 20px;
    font-size: 16px;
  }

  &::placeholder {
    color: ${theme.colors.green};
    font-family: ${theme.fonts[1]};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }
`;

export const Btnwrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 580px;
  }
`;

export const DeliveryFormBtn = styled.button`
  width: 150px;
  height: 35px;

  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  border-radius: 10px;
  border: 1px solid ${theme.colors.brown1};
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 190px;
    height: 45px;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.green};
    background-color: ${theme.colors.green};
  }
`;

export const DeliveryFormBtnFinish = styled(DeliveryFormBtn)`
  background: ${theme.colors.green4};
  border: 1px solid ${theme.colors.green4};
`;

// export const PaymentBlockOptionsLable = styled.label`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   padding: 10px;

//   border: 1px solid #000;
//   border-radius: 4px;
//   transition: background-color 0.3s;

//   &:not(:last-child) {
//     margin-bottom: 10px;
//   }

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.1);
//   }

//   & input[type='radio'] {
//     display: none;
//   }

//   background-color: ${props =>
//     props.isSelected ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
// `;

export const BoxPost = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    height: 0.5px;
    width: 1200px;
    background: ${theme.colors.brown1};
  }
`;

export const PoshtaBox = styled.div`
  display: flex;
`;

export const PoshtaBoxTitle = styled.p`
  padding-top: 20px;
  margin-bottom: 18px;
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
`;

export const PoshtaTitle = styled.p`
  color: ${theme.colors.darkGreen};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  margin-bottom: 8px;
`;

export const PaymentOptionBox = styled.div`
  background-color: ${theme.colors.green6};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LIQPAY = styled(liqpay)``;
export const Wallet = styled(wallet)``;

export const PaymentFormBtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const PaymentFormBtn = styled(DeliveryFormBtn)`
  width: 285px;
  height: 45px;
  margin-top: 0;
  margin-right: 131px;
`;

export const PaymentFormBtnFinish = styled.button`
  width: 285px;
  height: 45px;
  border-radius: 10px;
  border-color: transparent;
  background: ${theme.colors.green4};

  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
`;

export const DeliveryBlockOptionsBtn = styled(PaymentFormBtn)`
  margin-top: 24px;
  margin-right: 0;
`;

export const PaymentBlockOptionsLable = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  & input[type='radio']::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #6f8d4c;
    display: inline-block;
  }
`;

export const PaymentBlockOptionsInput = styled.input`
  appearance: none;
  margin-right: 20px;

  &:checked::before {
    content: '';
    background-color: #6f8d4c;
    width: 1px;
    height: 1px;
    display: inline-block;
  }
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
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
// export const Delivery = styled.div``;
