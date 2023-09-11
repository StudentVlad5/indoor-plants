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
import { getListOfCities, getListOfDepartments } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

const Delivery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setSityName] = useState('');
  const [checkSityName, setCheckSityName] = useState('');
  const [listOfCities, setListOfSities] = useState([]);

  const [departmentName, setDepartmentName] = useState('');
  const [cityRef, setCityRef] = useState('');
  const [checkCityRef, setCheckCityRef] = useState('');
  const [listOfDepartment, setListOfDepartment] = useState([]);

  useEffect(() => {
    async function getData(cityName) {
      setCheckSityName(cityName);
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
    if (checkSityName !== cityName && cityName.length > 2) {
      getData(cityName);
    }
  }, [cityName, checkSityName]);

  const departmentCity = listOfCities.filter(
    key => key.Description === checkSityName,
  )[0];
  if (departmentCity && departmentCity.Ref !== cityRef) {
    setCityRef(departmentCity.Ref);
  }

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

  function options(city) {
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

  function o(city) {
    const options = [];
    const list = [...listOfDepartment];
    list
      .filter(key => key.Description.toLowerCase().includes(city.toLowerCase()))
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
  return (
    <FormSection>
      <FormContainer>
        <h2>Delivery block</h2>
        <TitleDelivery>{'Nova Poshta departments'}</TitleDelivery>
        <Div>
          <SelectInput
            name="cityName"
            type="submit"
            className="basic-single"
            classNamePrefix="select"
            onInputChange={e => setSityName(e)}
            onChange={e => {
              if (e?.value) {
                setSityName(e.value);
              }
            }}
            defaultValue={cityName}
            isDisabled={false}
            isClearable={true}
            isSearchable={true}
            validate={schemas.checkDepartmentNP.city}
            options={options(cityName)}
            placeholder={cityName === '' ? 'Select city please...' : cityName}
          />
          {/* <BtnContainer><Btn type="submit"  aria-label="submit">Submit</Btn>
                                   </BtnContainer>  */}
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
            options={o(departmentName)}
            placeholder={
              departmentName === ''
                ? 'Select department please...'
                : departmentName
            }
          />
        </Div>
        {isLoading ? onLoading() : onLoaded()}
      </FormContainer>
    </FormSection>
  );
};

export default Delivery;
