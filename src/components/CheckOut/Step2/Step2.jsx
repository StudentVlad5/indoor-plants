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
  DeliveryFormLableTextSpan,
} from '../Order/Order.styled';
import { getUser } from 'redux/auth/selectors';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import { useAuth } from 'hooks/useAuth';

const Step2 = () => {
  const [isDisabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const auth = useSelector(getUser);
  const { userIn } = useAuth();

  let delivery = '';
  getFromStorage('selectedDeliveryOption')
    ? (delivery = getFromStorage('selectedDeliveryOption'))
    : (delivery = '');

  const [formData, setFormData] = useState(
    getFromStorage('formData')
      ? getFromStorage('formData')
      : {
          name: auth._id ? userIn.userName : '',
          surname: auth._id ? userIn.surname : '',
          company: auth._id ? userIn.company : '',
          email: auth._id ? userIn.email : '',
          phone: auth._id ? userIn.phone : '',
          address1: auth._id ? userIn.address1 : '',
          address2: auth._id ? userIn.address2 : '',
          city: auth._id ? userIn.city : '',
          state: auth._id ? userIn.state : '',
          zipCode: auth._id ? userIn.zipCode : '',
        },
  );

  useEffect(() => {
    delivery === 'Courier delivery' &&
    formData.name !== '' &&
    formData.surname !== '' &&
    formData.email !== '' &&
    formData.phone !== '' &&
    formData.address1 !== '' &&
    formData.city !== '' &&
    formData.state !== '' &&
    formData.zipCode !== ''
      ? setDisabled(false)
      : setDisabled(true);
    if (
      delivery !== 'Courier delivery' &&
      formData.name !== '' &&
      formData.surname !== '' &&
      formData.email !== '' &&
      formData.phone !== '' &&
      formData.address1 !== '' &&
      formData.city !== '' &&
      formData.state !== '' &&
      formData.zipCode !== ''
    ) {
      setDisabled(false);
    }
  }, [formData, delivery]);

  useEffect(() => {
    const requiredFields = [
      'name',
      'surname',
      'address1',
      'city',
      'state',
      'zipCode',
      'email',
      'phone',
    ];

    const isFilled = requiredFields.every(field => !!formData[field]);
    setDisabled(!isFilled);
  }, [formData]);

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

  const isAnyFieldEmpty = Object.values(formData).some(value => value === '');
  const [showAddAddress, setShowAddAddress] = useState(isAnyFieldEmpty);

  return (
    <DeliveryInfoBlock>
      {auth._id ? (
        <>
          <DataContainer>
            <DataContainerText>
              {formData.name} {formData.surname}
            </DataContainerText>
            <DataContainerText>{formData.company}</DataContainerText>
            {/* {delivery === '' ||
            (delivery === 'Courier delivery' && ( */}
            <DataContainerText>{formData.city}</DataContainerText>
            {/* ))} */}
            <DataContainerText>{formData.state}</DataContainerText>
            <DataContainerText>{formData.zipCode}</DataContainerText>
            {/* {delivery === '' || */}
            {/* (delivery === 'Courier delivery' && ( */}
            <DataContainerText>{formData.address1}</DataContainerText>
            {/* ))} */}
            {/* {delivery === '' || */}
            {/* (delivery === 'Courier delivery' && ( */}
            <DataContainerText>{formData.address2}</DataContainerText>
            {/* ))} */}
            <DataContainerText>{formData.email}</DataContainerText>
            <DataContainerText>{formData.phone}</DataContainerText>

            <DataContainerPensil
              onClick={() => setShowAddAddress(!showAddAddress)}
            >
              {showAddAddress ? <PensilStyle /> : <DataContainerCheckMark />}
            </DataContainerPensil>
          </DataContainer>

          {!showAddAddress && (
            <DeliveryForm>
              <DeliveryFormLable>
                <DeliveryFormLableText>
                  First name
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
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
                <DeliveryFormLableText>
                  Last name{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
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

              <DeliveryFormLable>
                <DeliveryFormLableText>Company</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="company"
                  value={formData.company}
                  name="company"
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <DeliveryFormLableText>
                  City <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <DeliveryFormLableText>
                  Address 1
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="address1"
                  value={formData.address1}
                  name="address1"
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <DeliveryFormLableText>Address 2</DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="address2"
                  name="address2"
                  value={formData.address2}
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <DeliveryFormLableText>
                  State <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <DeliveryFormLableText>
                  Zip code{' '}
                  <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
                <DeliveryFormInput
                  onChange={handleInputChange}
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  required
                />
              </DeliveryFormLable>

              <DeliveryFormLable>
                <DeliveryFormLableText>
                  Phone <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
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
                <DeliveryFormLableText>
                  Email <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
                </DeliveryFormLableText>
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
        </>
      ) : (
        <DeliveryForm>
          <DeliveryFormLable>
            <DeliveryFormLableText>
              First name
              <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
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
            <DeliveryFormLableText>
              Last name <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
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

          <DeliveryFormLable>
            <DeliveryFormLableText>Company</DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="company"
              value={formData.company}
              name="company"
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>
              City <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="city"
              name="city"
              value={formData.city}
              required
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>
              Address 1<DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="address1"
              value={formData.address1}
              name="address1"
              required
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>Address 2</DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="address2"
              name="address2"
              value={formData.address2}
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>
              State <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="state"
              name="state"
              value={formData.state}
              required
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>
              Zip code <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
            <DeliveryFormInput
              onChange={handleInputChange}
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              required
            />
          </DeliveryFormLable>

          <DeliveryFormLable>
            <DeliveryFormLableText>
              Phone <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
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
            <DeliveryFormLableText>
              Email <DeliveryFormLableTextSpan>*</DeliveryFormLableTextSpan>
            </DeliveryFormLableText>
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
          <DeliveryFormBtn type="button">Back</DeliveryFormBtn>
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
