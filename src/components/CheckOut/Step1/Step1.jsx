// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
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
// import { CheckoutBtn } from '../Checkout.styled';
// import { useTranslation } from 'react-i18next';

const Step1 = () => {
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
};

export default Step1;
