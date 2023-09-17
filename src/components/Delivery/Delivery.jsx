import React, { useState, useEffect } from 'react';
import schemas from 'components/Schemas/schemas';
import {
  FormSection,
  FormContainer,
  TitleDelivery,
  Div,
  BtnContainer,
  Btn,
  SelectInput,
} from './Delivery.styled';
import {
  getListOfCities,
  getListOfDepartments,
  getListOfCitiesUP,
  getListOfDepartmentsUP,
} from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { number } from 'yup';

const Delivery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState('');
  const [checkCityName, setCheckCityName] = useState('');
  const [listOfCities, setListOfSities] = useState([]);

  const [departmentName, setDepartmentName] = useState('');
  const [cityRef, setCityRef] = useState('');
  const [checkCityRef, setCheckCityRef] = useState('');
  const [listOfDepartment, setListOfDepartment] = useState([]);

  const [cityNameUP, setCityNameUP] = useState('');
  const [checkCityNameUP, setCheckCityNameUP] = useState('');
  const [listOfCitiesUP, setListOfSitiesUP] = useState([]);

  const [departmentNameUP, setDepartmentNameUP] = useState('');
  const [cityIDUP, setCityIDUP] = useState('');
  const [checkCityIDUP, setCheckCityIDUP] = useState('');
  const [listOfDepartmentUP, setListOfDepartmentUP] = useState([]);

  //  get cities for Nova Poshta
  useEffect(() => {
    async function getData(cityName) {
      setCheckCityName(cityName);
      setIsLoading(true);
      try {
        const { data } = await getListOfCities('/cities', { filter: cityName });
        setListOfSities(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (checkCityName !== cityName && cityName.length > 2) {
      getData(cityName);
    }
  }, [cityName, checkCityName]);

  //  get cities for Ukr Poshta
  useEffect(() => {
    async function getData(cityNameUP) {
      setCheckCityNameUP(cityNameUP);
      setIsLoading(true);
      try {
        const { data } = await getListOfCitiesUP('/cities/up', {
          filter: cityNameUP,
        });
        setListOfSitiesUP(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (checkCityNameUP !== cityNameUP && cityNameUP.length > 2) {
      getData(cityNameUP);
    }
  }, [cityNameUP, checkCityNameUP]);

  let departmentCity;

  if (listOfCities) {
    departmentCity = listOfCities.filter(
      key => key.Description === checkCityName,
    )[0];
  }
  if (departmentCity && departmentCity.Ref !== cityRef) {
    setCityRef(departmentCity.Ref);
  }

  // get departments for Nova Poshta
  useEffect(() => {
    async function getData() {
      setCheckCityRef(cityRef);
      setIsLoading(true);
      try {
        const { data } = await getListOfDepartments('/departments', {
          filter: cityRef,
        });
        setListOfDepartment(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (cityRef !== checkCityRef) {
      getData();
    }
  }, [cityRef, checkCityRef]);

  // get departments for Ukr Poshta
  useEffect(() => {
    async function getData() {
      setCityIDUP(checkCityNameUP);
      setIsLoading(true);
      try {
        const { data } = await getListOfDepartmentsUP('/departments/up', {
          filter: checkCityNameUP,
        });
        setListOfDepartmentUP(data);
        if (!data) {
          return alert('Whoops, something went wrong');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (
      Number(checkCityNameUP) &&
      checkCityNameUP !== '' &&
      checkCityNameUP !== undefined
    ) {
      getData();
    }
  }, [checkCityNameUP]);

  // options for Nova Poshta

  function optionsNP(city) {
    const options = [];
    const list = [...listOfCities];
    list
      .filter(key =>
        key.Description.toLowerCase()
          .split('(')[0]
          .includes(city.toLowerCase()),
      )
      .forEach(key => {
        const obj = {};
        if (key.Description) {
          obj.value = key.Description;
          obj.label = key.Description;
          options.push(obj);
        }
      });
    return options;
  }

  function oNP(city) {
    const options = [];
    if (listOfDepartment) {
      const list = [...listOfDepartment];
      list
        .filter(key =>
          key.Description.toLowerCase().includes(city.toLowerCase()),
        )
        .forEach(key => {
          const obj = {};
          if (key.Description) {
            obj.value = key.Description;
            obj.label = key.Description;
            options.push(obj);
          }
        });
    }
    return options;
  }

  // options for UKR Poshta

  function optionsUP(city) {
    const options = [];
    if (
      listOfCitiesUP !== '' &&
      listOfCitiesUP !== undefined &&
      Array.isArray(listOfCitiesUP)
    ) {
      const list = [...listOfCitiesUP];
      list
        .filter(key => key.CITY_UA.toLowerCase().includes(city.toLowerCase()))
        .forEach(key => {
          const obj = {};
          if (key.CITY_UA) {
            obj.value = key.CITY_ID;
            obj.label = key.CITY_UA + ` ` + key.REGION_UA + ` область`;
            options.push(obj);
          }
        });
    }

    return options;
  }

  function oUP(city) {
    const options = [];
    if (listOfDepartmentUP) {
      const list = [...listOfDepartmentUP];
      list
        .filter(key => key.IS_SECURITY === '0')
        .forEach(key => {
          const obj = {};
          if (key.ID) {
            obj.value =
              key.PO_SHORT + ' ' + key.ADDRESS + ' код відділення: ' + key.ID;
            obj.label =
              key.PO_SHORT + ' ' + key.ADDRESS + ' код відділення: ' + key.ID;
            options.push(obj);
          }
        });
    }
    return options;
  }

  return (
    <FormSection>
      <FormContainer>
        <h2>Delivery block</h2>
        <TitleDelivery>{'Nova Poshta departments'}</TitleDelivery>
        <Div>
          <SelectInput
            name="cityName"
            type="text"
            className="basic-single"
            classNamePrefix="select"
            onInputChange={e => setCityName(e)}
            onChange={e => {
              if (e?.value) {
                setCityName(e.value);
              }
            }}
            defaultValue={cityName}
            isDisabled={false}
            isClearable={true}
            isSearchable={true}
            validate={schemas.checkDepartmentNP.city}
            options={optionsNP(cityName)}
            placeholder="Select city please..."
          />
        </Div>
        <Div>
          <SelectInput
            name="departmentName"
            type="text"
            className="basic-single"
            classNamePrefix="select"
            onInputChange={e => setDepartmentName(e)}
            defaultValue={departmentName}
            isDisabled={!checkCityRef}
            isClearable={true}
            isSearchable={true}
            validate={schemas.checkDepartmentNP.department}
            options={oNP(departmentName)}
            placeholder={
              departmentName === ''
                ? 'Select department please...'
                : departmentName
            }
          />
        </Div>

        <TitleDelivery>{'UKR Poshta departments'}</TitleDelivery>
        <Div>
          <SelectInput
            name="cityNameUP"
            type="text"
            className="basic-single"
            classNamePrefix="select"
            onInputChange={e => setCityNameUP(e)}
            onChange={e => {
              if (e?.value) {
                setCityNameUP(e.value);
              }
            }}
            defaultValue={cityNameUP}
            isDisabled={false}
            isClearable={true}
            isSearchable={true}
            options={optionsUP(cityNameUP)}
            placeholder="Select city please..."
          />
        </Div>
        <Div>
          <SelectInput
            name="departmentNameUP"
            type="text"
            className="basic-single"
            classNamePrefix="select"
            onInputChange={e => setDepartmentNameUP(e)}
            defaultValue={departmentNameUP}
            isDisabled={typeof +checkCityNameUP !== 'number'}
            isClearable={true}
            isSearchable={true}
            validate={schemas.checkDepartmentNP.department}
            options={oUP(departmentNameUP)}
            placeholder={
              departmentNameUP === ''
                ? 'Select department please...'
                : departmentNameUP
            }
          />
        </Div>

        {isLoading ? onLoading() : onLoaded()}
      </FormContainer>
    </FormSection>
  );
};

export default Delivery;
