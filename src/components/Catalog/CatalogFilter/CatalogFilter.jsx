import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as SC from './CatalogFilter.styled';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Open } from 'images/svg/open.svg';

export const CatalogFilter = ({ products }) => {
  // const [filters, setFilters] = useState(
  //   localStorage.getItem('filters') ? localStorage.getItem('filters') : [],
  // );

  const [typeOfPlants, setTypeOfPlants] = useState(
    localStorage.getItem('typeOfPlants')
      ? localStorage.getItem('typeOfPlants')
      : [],
  );

  const [light, setLight] = useState(
    localStorage.getItem('light') ? localStorage.getItem('light') : [],
  );

  const [petFriendly, setPetFriendly] = useState(
    localStorage.getItem('petFriendly')
      ? localStorage.getItem('petFriendly')
      : [],
  );

  const [price, setPrice] = useState(
    localStorage.getItem('price') ? localStorage.getItem('price') : [],
  );

  const [maintenance, setMaintenance] = useState(
    localStorage.getItem('maintenance')
      ? localStorage.getItem('maintenance')
      : [],
  );

  const [potSize, setPotSize] = useState(
    localStorage.getItem('potSize') ? localStorage.getItem('potSize') : [],
  );

  const [waterSchedule, setWaterSchedule] = useState(
    localStorage.getItem('waterSchedule')
      ? localStorage.getItem('waterSchedule')
      : [],
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const toggleFilterItem = e => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('active');
  };

  const getUniqueOptions = key => {
    const unique = [...new Set(products.map(item => item[key]))];
    return unique.sort();
  };

  const setParams = () => {
    let params = Object.fromEntries(searchParams);

    if (typeOfPlants !== '') {
      params.typeOfPlants = typeOfPlants;
    }
    if (light !== '') {
      params.light = light;
    }
    if (petFriendly !== '') {
      params.petFriendly = petFriendly;
    }
    if (price !== '') {
      params.price = price;
    }
    if (maintenance !== '') {
      params.maintenance = maintenance;
    }

    if (potSize !== '') {
      params.potSize = potSize;
    }

    if (waterSchedule !== '') {
      params.waterSchedule = waterSchedule;
    }

    setSearchParams(params);
    console.log('setParams ~ params:', params);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'typeOfPlants':
        // setTypeOfPlants([...typeOfPlants, value]);
        setTypeOfPlants(value);
        localStorage.setItem('typeOfPlants', typeOfPlants);
        console.log('handleChange ~ typeOfPlants:', typeOfPlants);
        break;
      case 'light':
        setLight(value);
        localStorage.setItem('light', value);
        break;
      case 'petFriendly':
        setPetFriendly(value);
        localStorage.setItem('petFriendly', value);
        break;
      case 'price':
        setPrice(value);
        localStorage.setItem('price', value);
        break;
      case 'maintenance':
        setMaintenance(value);
        localStorage.setItem('maintenance', value);
        break;
      case 'potSize':
        setPotSize(value);
        localStorage.setItem('potSize', value);
        break;
      case 'waterSchedule':
        setWaterSchedule(value);
        localStorage.setItem('waterSchedule', value);
        break;

      default:
        handleClearAll();
        break;
    }
  };

  const handleClearAllFilters = () => {
    setTypeOfPlants('');
    setLight('');
    setPetFriendly('');
    setPrice('');
    setMaintenance('');
    setPotSize('');
    setWaterSchedule('');
    localStorage.setItem('typeOfPlants', '');
    localStorage.setItem('light', '');
    localStorage.setItem('petFriendly', '');
    localStorage.setItem('price', '');
    localStorage.setItem('maintenance', '');
    localStorage.setItem('potSize', '');
    localStorage.setItem('waterSchedule', '');
    setSearchParams({ page: 1, perPage: 12 });
  };

  return (
    <>
      <SC.Filters>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('TYPE OF PLANTS')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('typeOfPlants').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="typeOfPlants"
                    value={card}
                    checked={typeOfPlants === card}
                    onChange={e => {
                      // setTypeOfPlants([...typeOfPlants, e.target.value]);
                      // localStorage.setItem('typeOfPlants', prevState => ({
                      //   ...prevState,
                      //   [e.target.name]: e.target.value,
                      // }));
                      // setParams(e.target.name, e.target.value);
                      handleChange(e);
                    }}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('LIGHT')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('light').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="light"
                    value={card}
                    checked={light === card}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('PET FRIENDLY')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('petFriendly').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="petFriendly"
                    value={card}
                    checked={petFriendly === card}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('PRICE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          {/* {getUniqueOptions('currentPrice').map((card, i) => {
                      return (
                        <label key={i}>
                          <SC.FilterInnerListItem
                            type="checkbox"
                            name="price"
                            value={card}
                            checked={price === card}
                            onChange={e => {
                            setPrice({ ...e.target.value });
                          }}
                          />
                          {card}
                        </label>
                      );
                    })} */}
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('MAINTENANCE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('maintenance').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="maintenance"
                    value={card}
                    checked={maintenance === card}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('POT SIZE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('potSize').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="potSize"
                    value={card}
                    checked={potSize === card}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>{t('WATER SCHEDULE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('waterSchedule').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="waterSchedule"
                    value={card}
                    checked={waterSchedule === card}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
      </SC.Filters>
      <SC.FilterBtn type="button" onClick={handleClearAllFilters}>
        {t('CLEAR ALL')}
      </SC.FilterBtn>
      <SC.InfoBtnBox>
        <SC.InfoBtn type="button">{t('SIZE GUIDE')}</SC.InfoBtn>
        <SC.InfoBtn type="button">{t('ABOUT OUR SHIPPING')}</SC.InfoBtn>
      </SC.InfoBtnBox>
    </>
  );
};

CatalogFilter.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          oldPrice: PropTypes.number,
          currentPrice: PropTypes.number,
          total: PropTypes.number,
        }),
      ),
      totalQuantity: PropTypes.number,
      typeOfPlants: PropTypes.string,
      light: PropTypes.string,
      petFriendly: PropTypes.string,
      maintenance: PropTypes.string,
      potSize: PropTypes.string,
      waterSchedule: PropTypes.string,
      images: PropTypes.array,
    }),
  ),
};
