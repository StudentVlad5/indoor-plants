import React, { useEffect, useState } from 'react';
import { CheckoutBtn } from '../Checkout.styled';
import { saveToStorage, getFromStorage } from 'services/localStorService';
import {
  DeliveryInfoBox,
  DeliveryBlock,
  DeliveryBlockOptions,
  DeliveryBlockOptionsLable,
  DeliveryBlockOptionsInput,
  UkrPoshtaIcon,
  NovaPoshtaIcon,
  PoshtaBox,
  DeliveryBlockOptionsBoxLable,
  PoshtaBoxTitle,
  BoxPost,
  DeliveryBlockOptionsTitleDiscr,
  DeliveryBlockOptionsLableBox,
  DeliveryBlockOptionsTitle,
} from '../Order/Order.styled';
import { NovaPoshta } from 'components/Delivery/NovaPoshta/NovaPoshta';
import { UkrPoshta } from 'components/Delivery/UkrPoshta/UkrPoshta';
import { useNavigate } from 'react-router-dom';
import curier from '../../../images/delivery/pngegg.png';

const Step1 = () => {
  const [selectedCity, setSelectedCity] = useState(
    getFromStorage('selectedCity') ? getFromStorage('selectedCity') : '',
  );
  const [selectedDepartment, setSelectedDepartment] = useState(
    getFromStorage('selectedDepartment')
      ? getFromStorage('selectedDepartment')
      : '',
  );
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(
    getFromStorage('selectedDeliveryOption')
      ? getFromStorage('selectedDeliveryOption')
      : '',
  );
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = index => {
    const selectedDeliveryOption = deliveryOptions[index].label;
    setSelectedDeliveryOption(selectedDeliveryOption);
  };

  const deliveryOptions = [
    { value: 'NovaPoshta', label: 'NovaPoshta' },
    { value: 'UkrPoshta', label: 'UkrPoshta' },
    { value: 'Courier delivery', label: 'Courier delivery' },
  ];

  useEffect(() => {
    if (
      selectedDeliveryOption === 'Courier delivery' ||
      (selectedDeliveryOption && selectedCity && selectedDepartment)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedDeliveryOption, selectedCity, selectedDepartment]);

  const nextStep = () => {
    const perem = document?.querySelector('.step2Btn');
    perem && perem.classList.remove('isDisabled');
    console.log(perem);
    saveToStorage('selectedCity', selectedCity);
    saveToStorage('selectedDepartment', selectedDepartment);
    saveToStorage('selectedDeliveryOption', selectedDeliveryOption);
    navigate('/checkout/step2', { replace: true });
  };

  return (
    <DeliveryInfoBox>
      <DeliveryBlock>
        <DeliveryBlockOptions>
          <DeliveryBlockOptionsBoxLable>
            <DeliveryBlockOptionsLable>
              <DeliveryBlockOptionsInput
                type="radio"
                name="delivery"
                checked={selectedDeliveryOption === 'NovaPoshta'}
                onChange={() => handleOptionClick(0)}
              />
              <NovaPoshtaIcon />

              <DeliveryBlockOptionsLableBox>
                <DeliveryBlockOptionsTitle>
                  NovaPoshta
                </DeliveryBlockOptionsTitle>
                <DeliveryBlockOptionsTitleDiscr>
                  Cash upon delivery, card payment Visa, Master Card
                </DeliveryBlockOptionsTitleDiscr>
              </DeliveryBlockOptionsLableBox>
            </DeliveryBlockOptionsLable>

            {selectedDeliveryOption === 'NovaPoshta' && (
              <BoxPost style={{ width: '100%' }}>
                <PoshtaBoxTitle>Select point office </PoshtaBoxTitle>

                <PoshtaBox>
                  <NovaPoshta
                    setSelectedCity={setSelectedCity}
                    setSelectedDepartment={setSelectedDepartment}
                  />
                </PoshtaBox>
              </BoxPost>
            )}
          </DeliveryBlockOptionsBoxLable>

          <DeliveryBlockOptionsBoxLable>
            <DeliveryBlockOptionsLable>
              <DeliveryBlockOptionsInput
                type="radio"
                name="delivery"
                checked={selectedDeliveryOption === 'UkrPoshta'}
                onChange={() => handleOptionClick(1)}
              />
              <UkrPoshtaIcon />

              <DeliveryBlockOptionsLableBox>
                <DeliveryBlockOptionsTitle>UkrPoshta</DeliveryBlockOptionsTitle>
                <DeliveryBlockOptionsTitleDiscr>
                  Cash upon delivery, card payment Visa, Master Card
                </DeliveryBlockOptionsTitleDiscr>
              </DeliveryBlockOptionsLableBox>
            </DeliveryBlockOptionsLable>

            {selectedDeliveryOption === 'UkrPoshta' && (
              <BoxPost>
                <PoshtaBoxTitle>Select point office </PoshtaBoxTitle>

                <PoshtaBox>
                  <UkrPoshta
                    setSelectedCity={setSelectedCity}
                    setSelectedDepartment={setSelectedDepartment}
                  />
                </PoshtaBox>
              </BoxPost>
            )}
          </DeliveryBlockOptionsBoxLable>

          <DeliveryBlockOptionsBoxLable>
            <DeliveryBlockOptionsLable>
              <DeliveryBlockOptionsInput
                type="radio"
                name="delivery"
                checked={selectedDeliveryOption === 'Courier delivery'}
                onChange={() => handleOptionClick(2)}
              />
              <img style={{ width: 55 }} src={curier} alt="Courier delivery" />
              <DeliveryBlockOptionsLableBox>
                <DeliveryBlockOptionsTitle>
                  Courier delivery
                </DeliveryBlockOptionsTitle>
                <DeliveryBlockOptionsTitleDiscr>
                  Cash upon delivery, card payment Visa, Master Card
                </DeliveryBlockOptionsTitleDiscr>
              </DeliveryBlockOptionsLableBox>
            </DeliveryBlockOptionsLable>
          </DeliveryBlockOptionsBoxLable>
          <CheckoutBtn disabled={isDisabled} type="button" onClick={nextStep}>
            Next
          </CheckoutBtn>
        </DeliveryBlockOptions>
      </DeliveryBlock>
    </DeliveryInfoBox>
  );
};

export default Step1;
