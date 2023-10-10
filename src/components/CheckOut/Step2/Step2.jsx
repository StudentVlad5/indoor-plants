import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveToStorage, getFromStorage } from 'services/localStorService';
import { addPayment } from 'redux/payment/operations';
import { makeOrder } from 'services/APIservice';
import { getUser, selectId } from 'redux/auth/selectors';
import {
  selectBasket,
  selectTotalAmount,
  selectTotalDiscount,
  selectTotalPayment,
} from 'redux/basket/selectors';
import { selectDelivery } from 'redux/delivery/selectors';
import { selectPayment } from 'redux/payment/selectors';
import { onSuccess } from 'components/helpers/Messages/NotifyMessages';
import {
  FormContainer,
  Legend,
  Label,
  Input,
  PostContainer,
} from './Step2.styled';
import { CheckoutBtn } from '../Checkout.styled';

// import { useTranslation } from 'react-i18next';

const Step2 = () => {
  const [isFetch, setisFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
  const basket = useSelector(selectBasket);
  const totalAmount = useSelector(selectTotalAmount);
  const totalDiscount = useSelector(selectTotalDiscount);
  const totalPayment = useSelector(selectTotalPayment);
  const user_id = useSelector(selectId);
  const user = useSelector(getUser);
  const delivery = useSelector(selectDelivery);
  const metodPayment = useSelector(selectPayment);
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

  useEffect(() => {
    async function postOrder() {
      const order = {
        basket,
        totalAmount,
        totalDiscount,
        totalPayment,
        delivery,
        metodPayment,
        userName: user.userName,
        userPhone: user.phone,
        userEmail: user.email,
      };
      setIsLoading(true);
      try {
        const { data } = await makeOrder(`/order/${user_id}`, order);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        onSuccess('Great! Thank you for your order');
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        setisFetch(false);
      }
    }
    if (isFetch) {
      postOrder();
    }
  }, [isFetch]);

  const handleConfirmOrder = e => {
    e.preventDefault;
    payment = { prepaidCard, accountPayment, cashOnDelivery };
    saveToStorage('payment', payment);
    dispatch(addPayment(payment));
    setisFetch(true);
    document.querySelector('.step3Btn').classList.remove('isDisabled');
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
              Cash on delivery
            </Label>
          </div>
        </PostContainer>
        <Link
          to={`/checkout/step3`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <CheckoutBtn
            type="submit"
            disabled={isDisabled}
            onClick={e => handleConfirmOrder(e)}
          >
            Confirm order
          </CheckoutBtn>
        </Link>
      </form>
    </FormContainer>
  );
};

export default Step2;
