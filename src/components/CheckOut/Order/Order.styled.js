import { Section } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as novaPoshta } from 'images/svg/Nova_Poshta.svg';
import { ReactComponent as ukrposhta } from 'images/svg/ukrposhta-logo.svg';
import styled from 'styled-components';

export const DeliverySection = styled(Section)`
  padding-top: 170px;
`;

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
  background-color: ${theme.colors.green6};

  &:not(:last-child) {
    margin-bottom: 10px;
  }

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
`;

export const DeliveryBlockOptionsTitle = styled.span`
  color: ${theme.colors.brown1};

  margin-bottom: 14px;
  font-family: 'Fraunces', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
`;

export const DeliveryBlockOptionsTitleDiscr = styled.span`
  color: ${theme.colors.brown1};

  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
`;

export const DeliveryForm = styled.form`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
`;

export const DeliveryFormLable = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DeliveryFormLableText = styled.span`
  margin-bottom: 8px;
  color: ${theme.colors.darkGreen};
  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
`;

export const DeliveryFormInput = styled.input`
  /* padding: 15px 222px 15px 15px; */
  border: 1px solid #c6cdd3;
  padding-left: 15px;
  width: 580px;
  height: 44px;
  border-color: transparent;
  border-radius: 10px;
  background: ${theme.colors.blue3};

  &::placeholder {
    color: ${theme.colors.green};
    font-family: 'Fraunces', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
  }
`;

export const DeliveryFormBtn = styled.button`
  border-radius: 10px;
  border: 1px solid rgb(140, 130, 118);
  background-color: transparent;
  padding: 15px 66px;
  margin-top: 22px;
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
  position: absolute;
  left: 413px;
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
