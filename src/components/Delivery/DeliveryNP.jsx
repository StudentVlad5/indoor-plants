import React, { useState, useEffect } from 'react';
import schemas from 'components/Schemas/schemas';
import { FormContainer, Div, SelectInput } from './Delivery.styled';
import { getListOfCities, getListOfDepartments } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

const DeliveryNP = ({ novaPoshta, department }) => {
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

  const [departmentNameUP, setDepartmentNameUP] = useState('');

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

  return (
    <FormContainer>
      {novaPoshta && department && (
        <>
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
        </>
      )}
      {isLoading ? onLoading() : onLoaded()}
    </FormContainer>
  );
};

export default DeliveryNP;
