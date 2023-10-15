import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
import {
  DataContainer,
  Btnwrapper,
  DeliveryInfoBlock,
  DataContainerText,
  DataContainerPensil,
  DataContainerCheckMark,
  DeliveryFormLableText,
  DeliveryFormBtnFinish,
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormLable,
  DeliveryFormBtn,
} from '../Order/Order.styled';
import { getUser } from 'redux/auth/selectors';
import { getFromStorage, saveToStorage } from 'services/localStorService';

const Step2 = () => {
  const [showAddAddress, setShowAddAddress] = useState(true);
  const [isDisabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const auth = useSelector(getUser);

  let delivery = '';
  getFromStorage('selectedDeliveryOption')
    ? (delivery = getFromStorage('selectedDeliveryOption'))
    : (delivery = '');

  const [formData, setFormData] = useState(
    getFromStorage('formData')
      ? getFromStorage('formData')
      : {
          name: auth._id ? auth?.userName : '',
          surname: '',
          // company: auth._id ? auth?.company : '',
          email: auth._id ? auth?.email : '',
          phone: auth._id ? auth?.phone : '',
          city: '',
          address: '',
          // address2: auth._id ? auth?.address2 : '',
          // state: auth._id ? auth?.state : '',
          // zipCode: auth._id ? auth?.zipCode : '',
        },
  );

  // const restoreFormDataFromLocalStorage = () => {
  //   const savedFormData = getFromStorage('formData');
  //   if (savedFormData) {
  //     setFormData(savedFormData);
  //   }
  // };

  // useEffect(() => {
  //   restoreFormDataFromLocalStorage();
  // }, []);

  useEffect(() => {
    delivery === 'Courier delivery' &&
    formData.name !== '' &&
    formData.surname !== '' &&
    formData.email !== '' &&
    formData.phone !== '' &&
    formData.city !== '' &&
    formData.address !== ''
      ? setDisabled(false)
      : setDisabled(true);
    if (
      delivery !== 'Courier delivery' &&
      formData.name !== '' &&
      formData.surname !== '' &&
      formData.email !== '' &&
      formData.phone !== ''
    ) {
      setDisabled(false);
    }
  }, [formData, delivery]);

  const handleInputChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });

    saveToStorage('formData', {
      ...formData,
      [inputName]: inputValue,
    });
  };

  const nextStep = () => {
    navigate('/checkout/step3', { replace: true });
    saveToStorage('step', '3');
  };

  return (
    <DeliveryInfoBlock>
      <DataContainer>
        <DataContainerText>
          {formData.name} {formData.surname}
        </DataContainerText>
        {/* <DataContainerText>{formData.company}</DataContainerText> */}
        {delivery === '' ||
          (delivery === 'Courier delivery' && (
            <DataContainerText>{formData.city}</DataContainerText>
          ))}
        {/* <DataContainerText>{formData.state}</DataContainerText> */}
        {/* <DataContainerText>{formData.zipCode}</DataContainerText> */}
        {delivery === '' ||
          (delivery === 'Courier delivery' && (
            <DataContainerText>{formData.address}</DataContainerText>
          ))}
        {/* <DataContainerText>{formData.address2}</DataContainerText> */}
        <DataContainerText>{formData.email}</DataContainerText>
        <DataContainerText>{formData.phone}</DataContainerText>

        <DataContainerPensil onClick={() => setShowAddAddress(!showAddAddress)}>
          {showAddAddress ? <DataContainerCheckMark /> : <PensilStyle />}
        </DataContainerPensil>
      </DataContainer>

      {showAddAddress && (
        <DeliveryForm>
          <DeliveryFormLable>
            <DeliveryFormLableText>First name</DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              required
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>Last name</DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              required
              // placeholder="Washington"
            />
          </DeliveryFormLable>

          {/* <DeliveryFormLable>
                <DeliveryFormLableText>Company</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="company"
                  value={formData.company}
                  name="company"
                />
              </DeliveryFormLable> */}

          {delivery === '' ||
            (delivery === 'Courier delivery' && (
              <DeliveryFormLable>
                <DeliveryFormLableText>City</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  required
                />
              </DeliveryFormLable>
            ))}

          {delivery === '' ||
            (delivery === 'Courier delivery' && (
              <DeliveryFormLable>
                <DeliveryFormLableText>Address</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="address"
                  value={formData.address}
                  name="address"
                  required
                />
              </DeliveryFormLable>
            ))}

          {/* <DeliveryFormLable>
                <DeliveryFormLableText>Address 2</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="address2"
                  name="address2"
                  value={formData.address2}
                />
              </DeliveryFormLable> */}

          {/* <DeliveryFormLable>
                <DeliveryFormLableText>State</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  required
                />
              </DeliveryFormLable> */}

          {/* <DeliveryFormLable>
                <DeliveryFormLableText>Zip code</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  required
                />
              </DeliveryFormLable> */}

          <DeliveryFormLable>
            <DeliveryFormLableText>Phone</DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              required
              // placeholder="+123456789"
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>Email</DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              required
              // placeholder="george.washington@gmail.com"
            />
          </DeliveryFormLable>
        </DeliveryForm>
      )}
      <Btnwrapper>
        <Link to={`/checkout/step1`}>
          <DeliveryFormBtn
            type="button"
            // onClick={goBackToDelivery}
          >
            Back
          </DeliveryFormBtn>
        </Link>
        <DeliveryFormBtnFinish
          type="button"
          onClick={nextStep}
          disabled={isDisabled}
        >
          Next
        </DeliveryFormBtnFinish>
      </Btnwrapper>
    </DeliveryInfoBlock>
  );
};

export default Step2;
