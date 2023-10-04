import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  saveToStorage,
  getFromStorage,
  removeItem,
} from 'services/localStorService';

import {
  FormContainer,
  Legend,
  Label,
  Input,
  ConfirmBtn,
  PostContainer,
} from './Step3.styled';
import { addPayment } from 'redux/payment/operations';

// import { useTranslation } from 'react-i18next';

const Step3 = () => {
  const [isDisabled, setDisabled] = useState(true);
  let payment = getFromStorage('payment');
  // const { t } = useTranslation();
  const [prepaidCard, setPrepaidCard] = useState(
    payment?.prepaidCard ? payment.prepaidCard : false,
  );
  const [accountPayment, setAccountPayment] = useState(
    payment?.accountPayment ? payment.accountPayment : false,
  );
  const [cashOnDelivery, setCashOnDelivery] = useState(
    payment?.cashOnDelivery ? payment.cashOnDelivery : false,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (prepaidCard || accountPayment || cashOnDelivery) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [prepaidCard, accountPayment, cashOnDelivery]);

  const handleChangePayment = e => {
    switch (e.target.value) {
      case 'prepaidCard':
        setPrepaidCard(true);
        setAccountPayment(false);
        setCashOnDelivery(false);
        break;
      case 'accountPayment':
        setPrepaidCard(false);
        setAccountPayment(true);
        setCashOnDelivery(false);
        break;
      case 'cashOnDelivery':
        setPrepaidCard(false);
        setAccountPayment(false);
        setCashOnDelivery(true);
        break;
      default:
        break;
    }
  };

  const handleConfirmOrder = e => {
    e.preventDefault;
    payment = { prepaidCard, accountPayment, cashOnDelivery };
    saveToStorage('payment', payment);
    dispatch(addPayment(payment));
  };
  return (
    <FormContainer>
      <form>
        <PostContainer>
          <div>
            <Legend>Terms of payment</Legend>
            <Label>
              <Input
                type="radio"
                name="payment"
                value="prepaidCard"
                checked={prepaidCard}
                onChange={e => handleChangePayment(e)}
              />
              Prepayment to a bank card
            </Label>
            <br />
            <Label>
              <Input
                type="radio"
                name="payment"
                value="accountPayment"
                checked={accountPayment}
                onChange={e => handleChangePayment(e)}
              />
              Payment on account
            </Label>
            <br />
            <Label>
              <Input
                type="radio"
                name="payment"
                value="cashOnDelivery"
                checked={cashOnDelivery}
                onChange={e => handleChangePayment(e)}
              />
              Сash on delivery
            </Label>
          </div>
        </PostContainer>
        <ConfirmBtn
          type="submit"
          disabled={isDisabled}
          onClick={e => handleConfirmOrder(e)}
        >
          Сonfirm order
        </ConfirmBtn>
      </form>
    </FormContainer>
  );
};

export default Step3;
