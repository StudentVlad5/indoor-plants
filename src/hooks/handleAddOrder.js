import { useState } from 'react';
import { selectBasket } from 'redux/basket/selectors';
import {
  getFromStorage,
  removeItem,
  saveToStorage,
} from 'services/localStorService';

export const handleAddOrder = e => {
  e.preventDefault();

  const [formData] = useState(
    getFromStorage('formData')
      ? getFromStorage('formData')
      : {
          name: auth._id ? userIn?.userName : '',
          surname: auth._id ? userIn?.surname : '',
          email: auth._id ? userIn?.email : '',
          phone: auth._id ? userIn?.phone : '',
          city: '',
          address: '',
        },
  );
  let delivery = '';
  getFromStorage('selectedDeliveryOption')
    ? (delivery = getFromStorage('selectedDeliveryOption'))
    : (delivery = '');

  const [selectedCity] = useState(
    getFromStorage('selectedCity') ? getFromStorage('selectedCity') : '',
  );
  const [selectedDepartment] = useState(
    getFromStorage('selectedDepartment')
      ? getFromStorage('selectedDepartment')
      : '',
  );
  const [selectedCity_UP_NAME] = useState(
    getFromStorage('selectedCity_UP_NAME')
      ? getFromStorage('selectedCity_UP_NAME')
      : '',
  );
  const [selectedDepartment_UP] = useState(
    getFromStorage('selectedDepartment_UP')
      ? getFromStorage('selectedDepartment_UP')
      : '',
  );

  const [selectedPaymentOption] = useState(
    getFromStorage('selectedPaymentOption')
      ? getFromStorage('selectedPaymentOption')
      : '',
  );

  const [comments, setComments] = useState(
    getFromStorage('comments') ? getFromStorage('comments') : '',
  );
  const basket = useSelector(selectBasket);

  let cityDelivery = '';
  let departmentDelivery = '';
  if (delivery === 'NovaPoshta') {
    cityDelivery = selectedCity;
    departmentDelivery = selectedDepartment;
  } else if (delivery === 'NovaPoshta') {
    cityDelivery = selectedCity_UP_NAME;
    departmentDelivery = selectedDepartment_UP;
  } else {
    cityDelivery = formData.city;
    departmentDelivery = formData.address;
  }

  const newOrder = {
    basket,
    deliveryOrder: { delivery, cityDelivery, departmentDelivery },
    name: formData.name + ' ' + formData.surname,
    phone: formData.phone,
    email: formData.email,
    selectedPaymentOption,
    comments,
  };

  dispatch(addOrder(newOrder));
  setOrder([...order, newOrder]);
  saveToStorage('formData', newOrder);
  console.log(newOrder);
  removeItem('step');
};
