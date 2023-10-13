import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import DeliveryNP from 'components/Delivery/DeliveryNP';
// import DeliveryUP from 'components/Delivery/DeliveryUP';
// import { addDelivery } from 'redux/delivery/operations';
// import { saveToStorage, getFromStorage } from 'services/localStorService';
// import {
//   FormContainer,
//   Legend,
//   Label,
//   SubLabel,
//   Input,
//   DeliveryBtn,
//   PostContainer,
//   TextAreaLabel,
//   TextArea,
// } from './Step1.styled';
import { CheckoutBtn } from '../Checkout.styled';

import {
  DeliveryInfoBox,
  DeliveryBlock,
  DeliveryBlockOptions,
  // DeliveryInfoBoxTitle,
  DeliveryBlockOptionsLable,
  DeliveryBlockOptionsInput,
  DeliverySection,
  UkrPoshtaIcon,
  NovaPoshtaIcon,
  PoshtaBox,
  DeliveryBlockOptionsBoxLable,
  PoshtaBoxTitle,
  BoxPost,
  DeliveryBlockOptionsTitleDiscr,
  DeliveryBlockOptionsBtn,
  DeliveryBlockOptionsLableBox,
  DeliveryBlockOptionsTitle,
} from '../Order/Order.styled';
import { NovaPoshta } from 'components/Delivery/NovaPoshta/NovaPoshta';
import { UkrPoshta } from 'components/Delivery/UkrPoshta/UkrPoshta';
import { getUser } from 'redux/auth/selectors';
import { useAuth } from 'hooks/useAuth';

const Step1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formDataAuth, setFormDataAuth] = useState({});
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);

  const auth = useSelector(getUser);
  let { userIn } = useAuth();

  const [formData, setFormData] = useState({
    name: auth._id ? userIn.address.userName : '',
    surname: auth._id ? userIn.address.surname : '',
    company: auth._id ? userIn.address.company : '',
    email: auth._id ? userIn.address.email : '',
    phone: auth._id ? userIn.address.phone : '',
    address1: auth._id ? userIn.address.address1 : '',
    address2: auth._id ? userIn.address.address2 : '',
    city: auth._id ? userIn.address.city : '',
    state: auth._id ? userIn.address.state : '',
    zipCode: auth._id ? userIn.address.zipCode : '',
  });

  const handleOptionClick = index => {
    const selectedDeliveryOption = deliveryOptions[index].label;
    setSelectedDeliveryOption(selectedDeliveryOption);

    setSelectedOption(index);
    setFormData({
      ...formData,
      selectedDeliveryOption: selectedDeliveryOption,
    });

    setFormDataAuth({
      ...formDataAuth,
      selectedDeliveryOption: selectedDeliveryOption,
    });
    // setDelivery(selectedDeliveryOption);
  };

  const deliveryOptions = [
    { value: 'NovaPoshta', label: 'NovaPoshta' },
    { value: 'UkrPoshta', label: 'UkrPoshta' },
    { value: 'Courier delivery', label: 'Courier delivery' },
  ];

  const restoreFormDataFromLocalStorage = () => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  };

  useEffect(() => {
    restoreFormDataFromLocalStorage();
  }, []);

  // useEffect(() => {
  //   if (delivery) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // }, [delivery]);

  const handleInputChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  // const nextStep = () => {
  //   document.querySelector('.step2Btn').classList.remove('isDisabled');
  // };

  return (
    <DeliveryInfoBox>
      <DeliveryBlock>
        <DeliveryBlockOptions>
          <DeliveryBlockOptionsBoxLable>
            <DeliveryBlockOptionsLable
              onClick={() => handleOptionClick(0)}
              onChange={handleInputChange}
            >
              <DeliveryBlockOptionsInput type="radio" name="delivery" />
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

            {selectedOption === 0 && (
              <BoxPost>
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
            <DeliveryBlockOptionsLable
              onClick={() => handleOptionClick(1)}
              onChange={handleInputChange}
            >
              <DeliveryBlockOptionsInput type="radio" name="delivery" />
              <UkrPoshtaIcon />

              <DeliveryBlockOptionsLableBox>
                <DeliveryBlockOptionsTitle>UkrPoshta</DeliveryBlockOptionsTitle>
                <DeliveryBlockOptionsTitleDiscr>
                  Cash upon delivery, card payment Visa, Master Card
                </DeliveryBlockOptionsTitleDiscr>
              </DeliveryBlockOptionsLableBox>
            </DeliveryBlockOptionsLable>

            {selectedOption === 1 && (
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
            <DeliveryBlockOptionsLable
              onClick={() => handleOptionClick(2)}
              onChange={handleInputChange}
            >
              <DeliveryBlockOptionsInput type="radio" name="delivery" />
              {/* <ShippingFast style={{ width: 55 }} /> */}
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

          <Link
            to={`/checkout/step2`}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <CheckoutBtn
              onClick={() => {
                localStorage.setItem('selectedCity', selectedCity);
                localStorage.setItem('selectedDepartment', selectedDepartment);
                localStorage.setItem('selectedDeliveryOption', selectedDeliveryOption);
              }}
              // disabled={isDisabled}
              type="button"
              // onClick={nextStep}
            >
              Next
            </CheckoutBtn>
          </Link>

          {/* <Link to={`/checkout/step2`}>
            <DeliveryBlockOptionsBtn
              type="button"
              // onClick={showDeliveryInfoBlock}
            >
              Next
            </DeliveryBlockOptionsBtn>
          </Link> */}
        </DeliveryBlockOptions>
      </DeliveryBlock>
    </DeliveryInfoBox>
  );
};

export default Step1;

// const [isDisabled, setDisabled] = useState(true);
// // const { t } = useTranslation();

// let delivery = getFromStorage('delivery');
// const [novaPoshta, setNovaPoshta] = useState(
//   delivery?.novaPoshta ? delivery.novaPoshta : false,
// );
// const [ukrPoshta, setUkrPoshta] = useState(
//   delivery?.ukrPoshta ? delivery.ukrPoshta : false,
// );
// const [other, setOther] = useState(delivery?.other ? delivery.other : false);

// const [department, setDepartment] = useState(
//   delivery?.department ? delivery.department : false,
// );
// const [courier, setCourier] = useState(
//   delivery?.courier ? delivery.courier : false,
// );
// const [postAdress, setPostAdress] = useState(
//   delivery?.postAdress ? delivery.postAdress : false,
// );

// const [cityNameNovaPosta, setCityNameNovaPosta] = useState(
//   getFromStorage('cityNameNP') ? getFromStorage('cityNameNP') : '',
// );
// const [departmentNameNovaPosta, setDepartmentNameNovaPosta] = useState(
//   getFromStorage('departmentNameNP')
//     ? getFromStorage('departmentNameNP')
//     : '',
// );

// const [cityNameUPLabel, setCitytNameUPLabel] = useState(
//   getFromStorage('cityNameUP') ? getFromStorage('cityNameUP') : '',
// );
// const [departmentUPLabel, setDepartmentUPLabel] = useState(
//   getFromStorage('departmentNameUP')
//     ? getFromStorage('departmentNameUP')
//     : '',
// );

// const dispatch = useDispatch();

// useEffect(() => {
//   if (department || postAdress) {
//     setDisabled(false);
//   } else {
//     setDisabled(true);
//   }
// }, [department, postAdress]);

// const handleEnableStep2 = () => {
//   document.querySelector('.step2Btn').classList.remove('isDisabled');
//   delivery = {
//     novaPoshta,
//     ukrPoshta,
//     other,
//     department,
//     courier,
//     postAdress,
//     cityNameNP: cityNameNovaPosta,
//     departmentNameNP: departmentNameNovaPosta,
//     cityNameUP: cityNameUPLabel,
//     departmentNameUP: departmentUPLabel,
//   };
//   saveToStorage('delivery', delivery);
//   dispatch(addDelivery(delivery));
// };

// const handleChangeDelivery = e => {
//   switch (e.target.value) {
//     case 'novaPoshta':
//       setNovaPoshta(true);
//       setUkrPoshta(false);
//       setOther(false);
//       break;
//     case 'ukrPoshta':
//       setNovaPoshta(false);
//       setUkrPoshta(true);
//       setOther(false);
//       break;
//     case 'other':
//       setNovaPoshta(false);
//       setUkrPoshta(false);
//       setOther(true);
//       break;
//     default:
//       break;
//   }
// };

// const handleChangePost = e => {
//   switch (e.target.value) {
//     case 'department':
//       setDepartment(true);
//       setCourier(false);
//       break;
//     case 'courier':
//       setDepartment(false);
//       setCourier(true);
//       break;
//     default:
//       break;
//   }
// };
// return (
//   <FormContainer>
//     <form>
//       <PostContainer>
//         <div>
//           <Legend>Delivery</Legend>
//           <Label>
//             <Input
//               type="radio"
//               name="delivery"
//               value="novaPoshta"
//               checked={novaPoshta}
//               onChange={e => handleChangeDelivery(e)}
//             />
//             NovaPoshta
//           </Label>
//           {novaPoshta && (
//             <div
//               style={{
//                 paddingLeft: '30px',
//                 display: 'flex',
//                 flexDirection: 'column',
//               }}
//             >
//               <SubLabel>
//                 <Input
//                   type="radio"
//                   name="post"
//                   value="department"
//                   checked={department}
//                   onChange={e => handleChangePost(e)}
//                 />
//                 To department
//               </SubLabel>
//               <DeliveryNP
//                 novaPoshta={novaPoshta}
//                 department={department}
//                 setCityNameNovaPosta={setCityNameNovaPosta}
//                 setDepartmentNameNovaPosta={setDepartmentNameNovaPosta}
//               />
//               <SubLabel>
//                 <Input
//                   type="radio"
//                   name="post"
//                   value="courier"
//                   checked={courier}
//                   onChange={e => handleChangePost(e)}
//                 />
//                 Courier
//               </SubLabel>
//               {novaPoshta && courier && (
//                 <TextAreaLabel>
//                   Edit your post adress:
//                   <TextArea
//                     name="postAdress"
//                     rows={4}
//                     cols={40}
//                     value={postAdress ? postAdress : ''}
//                     onChange={e => setPostAdress(e.target.value)}
//                   />
//                 </TextAreaLabel>
//               )}
//             </div>
//           )}
//           <br />
//           <Label>
//             <Input
//               type="radio"
//               name="delivery"
//               value="ukrPoshta"
//               checked={ukrPoshta}
//               onChange={e => handleChangeDelivery(e)}
//             />
//             UkrPoshta
//           </Label>
//           {ukrPoshta && (
//             <div style={{ paddingLeft: '30px' }}>
//               <SubLabel>
//                 <Input
//                   type="radio"
//                   name="post"
//                   value="department"
//                   checked={department}
//                   onChange={e => handleChangePost(e)}
//                 />
//                 To department
//               </SubLabel>
//               <DeliveryUP
//                 ukrPoshta={ukrPoshta}
//                 department={department}
//                 setDepartmentUPLabel={setDepartmentUPLabel}
//                 setCitytNameUPLabel={setCitytNameUPLabel}
//               />
//             </div>
//           )}
//           <br />
//           <Label>
//             <Input
//               type="radio"
//               name="delivery"
//               value="other"
//               checked={other}
//               onChange={e => handleChangeDelivery(e)}
//             />
//             Other Delivery Service
//           </Label>
//           {other && (
//             <TextAreaLabel>
//               Add your Delivery service:
//               <TextArea
//                 name="postAdress"
//                 value={postAdress ? postAdress : ''}
//                 rows={4}
//                 cols={40}
//                 onChange={e => setPostAdress(e.target.value)}
//               />
//             </TextAreaLabel>
//           )}
//         </div>
//       </PostContainer>
//       <Link
//         to={`/checkout/step2`}
//         style={{ textDecoration: 'none', width: '100%' }}
//       >
//         <CheckoutBtn
//           disabled={isDisabled}
//           type="submit"
//           onClick={handleEnableStep2}
//         >
//           Choose way of delivery
//         </CheckoutBtn>
//       </Link>
//     </form>
//   </FormContainer>
// );
