import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'; //, useSelector
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

import { fetchData } from 'services/APIservice';
import { getFromStorage, saveToStorage } from 'services/localStorService';
// import { addReload } from 'redux/reload/slice';
// import { reloadValue } from 'redux/reload/selectors';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import * as SC from './CatalogFilter.styled';

import { ReactComponent as Open } from 'images/svg/open.svg';

export const CatalogFilter = ({ onClear }) => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setError] = useState(null); //error

  // const reload = useSelector(reloadValue);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [typeOfPlants, setTypeOfPlants] = useState(
    getFromStorage('typeOfPlants') ? getFromStorage('typeOfPlants') : [],
  );
  const [rare, setRare] = useState(
    getFromStorage('rare') ? getFromStorage('rare') : [],
  );
  const [light, setLight] = useState(
    getFromStorage('light') ? getFromStorage('light') : [],
  );
  const [petFriendly, setPetFriendly] = useState(
    getFromStorage('petFriendly') ? getFromStorage('petFriendly') : [],
  );
  const min = Math.min.apply(
    Math,
    products.flatMap(product => product.currentPrice),
  );
  const max = Math.max.apply(
    Math,
    products.flatMap(product => product.currentPrice),
  );
  const [minPrice, setMinPrice] = useState(
    getFromStorage('minPrice') ? getFromStorage('minPrice') : '',
  );
  const [maxPrice, setMaxPrice] = useState(
    getFromStorage('maxPrice') ? getFromStorage('maxPrice') : '',
  );
  const [hardToKill, setHardToKill] = useState(
    getFromStorage('hardToKill') ? getFromStorage('hardToKill') : [],
  );
  const [potSize, setPotSize] = useState(
    getFromStorage('potSize') ? getFromStorage('potSize') : [],
  );
  const [waterSchedule, setWaterSchedule] = useState(
    getFromStorage('waterSchedule') ? getFromStorage('waterSchedule') : [],
  );

  useEffect(() => {
    (async function getData() {
      try {
        const { data } = await fetchData(`/catalog`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [t]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const { data } = await fetchData(`/catalog`);
  //       if (!data) {
  //         return onFetchError(t('Whoops, something went wrong'));
  //       }
  //       setProducts(data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   }
  //   getData();

  //   if (reload) {
  //     getData();
  //     dispatch(addReload(false));
  //   }
  // }, [t, dispatch, reload]);

  useEffect(() => {
    saveToStorage('typeOfPlants', typeOfPlants);
    saveToStorage('rare', rare);
    saveToStorage('light', light);
    saveToStorage('petFriendly', petFriendly);
    saveToStorage('minPrice', minPrice);
    saveToStorage('maxPrice', maxPrice);
    saveToStorage('hardToKill', hardToKill);
    saveToStorage('potSize', potSize);
    saveToStorage('waterSchedule', waterSchedule);
    setParams();
  }, [
    typeOfPlants,
    rare,
    light,
    petFriendly,
    minPrice,
    maxPrice,
    hardToKill,
    potSize,
    waterSchedule,
  ]);

  const toggleFilterItem = e => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('active');
  };

  const getUniqueOptions = key => {
    if (key === 'potSize') {
      const uniqueSizes = [];
      const array = [...new Set(products.map(item => item[key]))];
      const unique = array
        .sort((a, b) => a.size - b.size)
        .filter(element => {
          const isDuplicate = uniqueSizes.includes(element.size);
          if (!isDuplicate) {
            uniqueSizes.push(element.size);
            return true;
          }
          return false;
        });
      return unique;
    }

    const unique = [...new Set(products.map(item => item[key]))];
    return unique.sort();
  };

  const setParams = () => {
    let params = Object.fromEntries(searchParams);
    // console.log('params:', params);
    // console.log('searchParams:', Object.fromEntries(searchParams));

    if (typeOfPlants !== '') {
      params.typeOfPlants = typeOfPlants;
    }
    if (rare !== '') {
      params.rare = rare;
    }
    if (light !== '') {
      params.light = light;
    }
    if (petFriendly !== '') {
      params.petFriendly = petFriendly;
    }
    if (minPrice !== '') {
      params.minPrice = minPrice;
    }
    if (maxPrice !== '') {
      params.maxPrice = maxPrice;
    }
    if (hardToKill !== '') {
      params.hardToKill = hardToKill;
    }
    if (potSize !== '') {
      params.potSize = potSize;
    }
    if (waterSchedule !== '') {
      params.waterSchedule = waterSchedule;
    }

    setSearchParams(params);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'typeOfPlants':
        if (typeOfPlants.includes(value)) {
          setTypeOfPlants(typeOfPlants.filter(item => item !== value));
          // dispatch(addReload(true));
        } else {
          setTypeOfPlants([...typeOfPlants, value]);
          // dispatch(addReload(true));
          saveToStorage('typeOfPlants', JSON.stringify(typeOfPlants));
          setParams();
        }
        break;
      case 'rare':
        if (rare.includes(value)) {
          setRare(rare.filter(item => item !== value));
          // dispatch(addReload(true));
        } else {
          setRare([...rare, value]);
          // dispatch(addReload(true));
          saveToStorage('rare', rare);
          setParams();
        }
        break;
      case 'light':
        if (light.includes(value)) {
          setLight(light.filter(item => item !== value));
          // dispatch(addReload(true));
        } else {
          setLight([...light, value]);
          // dispatch(addReload(true));
          saveToStorage('light', light);
          setParams();
        }
        break;
      case 'petFriendly':
        if (petFriendly.includes(value)) {
          setPetFriendly(petFriendly.filter(item => item !== value));
          // dispatch(addReload(true));
        } else {
          setPetFriendly([...petFriendly, value]);
          // dispatch(addReload(true));
          saveToStorage('petFriendly', petFriendly);
          setParams();
        }
        break;
      case 'minPrice':
        setMinPrice(value);
        // dispatch(addReload(true));
        saveToStorage('minPrice', value);
        setParams();
        break;
      case 'maxPrice':
        setMaxPrice(value);
        // dispatch(addReload(true));
        saveToStorage('maxPrice', value);
        setParams();
        break;
      case 'hardToKill':
        if (hardToKill.includes(value)) {
          setHardToKill(hardToKill.filter(item => item !== value));
          // dispatch(addReload(true));
        } else {
          setHardToKill([...hardToKill, value]);
          // dispatch(addReload(true));
          saveToStorage('hardToKill', hardToKill);
          setParams();
        }
        break;
      case 'potSize':
        if (potSize.includes(value)) {
          setPotSize(potSize.filter(item => item !== value));
          // dispatch(addReload(true));
        } else {
          setPotSize([...potSize, value]);
          // dispatch(addReload(true));
          saveToStorage('potSize', potSize);
          setParams();
        }
        break;
      case 'waterSchedule':
        if (waterSchedule.includes(value)) {
          setWaterSchedule(waterSchedule.filter(item => item !== value));
          // dispatch(addReload(true));
        } else {
          setWaterSchedule([...waterSchedule, value]);
          dispatch(addReload(true));
          saveToStorage('waterSchedule', waterSchedule);
          setParams();
        }
        break;

      default:
        handleClearAllFilters();
        break;
    }
  };

  const handleClearAllFilters = () => {
    setTypeOfPlants([]);
    setRare([]);
    setLight([]);
    setPetFriendly([]);
    setMinPrice([]);
    setMaxPrice([]);
    setHardToKill([]);
    setPotSize([]);
    setWaterSchedule([]);
    saveToStorage('typeOfPlants', []);
    saveToStorage('rare', []);
    saveToStorage('light', []);
    saveToStorage('petFriendly', []);
    saveToStorage('minPrice', []);
    saveToStorage('maxPrice', []);
    saveToStorage('hardToKill', []);
    saveToStorage('potSize', []);
    saveToStorage('waterSchedule', []);
    setSearchParams({ page: 1, perPage: 12 });
    // dispatch(addReload(true));
    onClear();
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
                    defaultChecked={typeOfPlants.includes(card)}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>{card}</span>
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
            <span>{t('RARE')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('rare').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="rare"
                    value={card}
                    defaultChecked={rare.includes(card)}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>{card}</span>
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
                    defaultChecked={petFriendly.includes(card)}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>{card}</span>
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
            <span>{t('HARD TO KILL')}</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('hardToKill').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="hardToKill"
                    value={card}
                    defaultChecked={hardToKill.includes(card)}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>{card}</span>
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
                    defaultChecked={light.includes(card)}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>{card}</span>
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
                    defaultChecked={waterSchedule.includes(card)}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>{card}</span>
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
                    value={card.size}
                    defaultChecked={potSize === card.size}
                    onChange={e => {
                      handleChange(e);
                    }}
                  />
                  <span>
                    {card.size} {card.unit}
                  </span>
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
          <SC.FilterInnerList>
            <SC.RangeWrapper>
              <label>
                From
                <SC.FilterInnerListItem
                  type="number"
                  name="minPrice"
                  value={minPrice}
                  disabled={minPrice === 0}
                  placeholder={min}
                  onChange={e => {
                    setMinPrice(e.target.value);
                    handleChange(e);
                  }}
                />
                <>$</>
              </label>
              <label>
                To
                <SC.FilterInnerListItem
                  type="number"
                  name="maxPrice"
                  value={maxPrice}
                  disabled={maxPrice === 0}
                  placeholder={max}
                  onChange={e => {
                    setMaxPrice(e.target.value);
                    handleChange(e);
                  }}
                />
                <>$</>
              </label>
            </SC.RangeWrapper>
            <SC.RangeLabel>
              <Range
                range
                // draggableTrack
                min={min}
                max={max}
                value={[minPrice, maxPrice]}
                defaultValue={[min, max]}
                step={1}
                pushable={(true, 1)}
                disabled={minPrice === 0}
                onChange={value => {
                  setMinPrice(value[0]);
                  setMaxPrice(value[1]);

                  saveToStorage('minPrice', value[0]);
                  saveToStorage('maxPrice', value[1]);
                  setParams();
                }}
              />
            </SC.RangeLabel>
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
  onClear: PropTypes.func,
};
