import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

import { fetchData } from 'services/APIservice';
import { addReload } from 'redux/reload/slice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import * as SC from './CatalogFilter.styled';

import { ReactComponent as Open } from 'images/svg/open.svg';

export const CatalogFilter = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [typeOfPlants, setTypeOfPlants] = useState(
    localStorage.getItem('typeOfPlants')
      ? localStorage.getItem('typeOfPlants')
      : [],
  );
  const [rare, setRare] = useState(
    localStorage.getItem('rare') ? localStorage.getItem('rare') : [],
  );
  const [light, setLight] = useState(
    localStorage.getItem('light') ? localStorage.getItem('light') : [],
  );
  const [petFriendly, setPetFriendly] = useState(
    localStorage.getItem('petFriendly')
      ? localStorage.getItem('petFriendly')
      : [],
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
    localStorage.getItem('minPrice') ? localStorage.getItem('minPrice') : '',
  );
  const [maxPrice, setMaxPrice] = useState(
    localStorage.getItem('maxPrice') ? localStorage.getItem('maxPrice') : '',
  );
  const [hardToKill, setHardToKill] = useState(
    localStorage.getItem('hardToKill')
      ? localStorage.getItem('hardToKill')
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

  useEffect(() => {
    localStorage.setItem('typeOfPlants', typeOfPlants);
    localStorage.setItem('rare', rare);
    localStorage.setItem('light', light);
    localStorage.setItem('petFriendly', petFriendly);
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('maxPrice', maxPrice);
    localStorage.setItem('hardToKill', hardToKill);
    localStorage.setItem('potSize', potSize);
    localStorage.setItem('waterSchedule', waterSchedule);
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

  console.log('min:', min);
  console.log('max:', max);
  console.log('minPrice:', minPrice);
  console.log('maxPrice:', maxPrice);

  const toggleFilterItem = e => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('active');
  };

  const getUniqueOptions = key => {
    if (key === 'potSize') {
      // const unique = [...new Set(products.map(item => item[key].size))];
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
    console.log('params:', params);
    console.log('searchParams:', Object.fromEntries(searchParams));

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
          setTypeOfPlants(typeOfPlants.filter(item !== value));
          dispatch(addReload(true));
        } else {
          setTypeOfPlants([...typeOfPlants, value]);
          dispatch(addReload(true));
          localStorage.setItem('typeOfPlants', typeOfPlants);
          setParams();
        }
        break;
      case 'rare':
        if (rare.includes(value)) {
          setRare(rare.filter(item => item !== value));
          dispatch(addReload(true));
        } else {
          setRare([...rare, value]);
          dispatch(addReload(true));
          localStorage.setItem('rare', rare);
          setParams();
        }
        break;
      case 'light':
        if (light.includes(value)) {
          setLight(light.filter(item => item !== value));
          dispatch(addReload(true));
        } else {
          setLight([...light, value]);
          dispatch(addReload(true));
          localStorage.setItem('light', light);
          setParams();
        }
        break;
      case 'petFriendly':
        if (petFriendly.includes(value)) {
          setPetFriendly(petFriendly.filter(item => item !== value));
          dispatch(addReload(true));
        } else {
          setPetFriendly([...petFriendly, value]);
          dispatch(addReload(true));
          localStorage.setItem('petFriendly', petFriendly);
          setParams();
        }
        break;
      case 'minPrice':
        setMinPrice(value);
        dispatch(addReload(true));
        localStorage.setItem('minPrice', value);
        setParams();
        break;
      case 'maxPrice':
        setMaxPrice(value);
        dispatch(addReload(true));
        localStorage.setItem('maxPrice', value);
        setParams();
        break;
      case 'hardToKill':
        if (hardToKill.includes(value)) {
          setHardToKill(hardToKill.filter(item => item !== value));
          dispatch(addReload(true));
        } else {
          setHardToKill([...hardToKill, value]);
          dispatch(addReload(true));
          localStorage.setItem('hardToKill', hardToKill);
          setParams();
        }
        break;
      case 'potSize':
        if (potSize.includes(value)) {
          setPotSize(potSize.filter(item => item !== value));
          dispatch(addReload(true));
        } else {
          setPotSize([...potSize, value]);
          dispatch(addReload(true));
          localStorage.setItem('potSize', potSize);
          setParams();
        }
        break;
      case 'waterSchedule':
        if (waterSchedule.includes(value)) {
          setWaterSchedule(waterSchedule.filter(item => item !== value));
          dispatch(addReload(true));
        } else {
          setWaterSchedule([...waterSchedule, value]);
          dispatch(addReload(true));
          localStorage.setItem('waterSchedule', waterSchedule);
          setParams();
        }
        break;

      default:
        handleClearAllFilters();
        break;
    }
  };

  const handleClearAllFilters = () => {
    setTypeOfPlants('');
    setRare('');
    setLight('');
    setPetFriendly('');
    setMinPrice('');
    setMaxPrice('');
    setHardToKill('');
    setPotSize('');
    setWaterSchedule('');
    localStorage.setItem('typeOfPlants', '');
    localStorage.setItem('rare', '');
    localStorage.setItem('light', '');
    localStorage.setItem('petFriendly', '');
    localStorage.setItem('minPrice', '');
    localStorage.setItem('maxPrice', '');
    localStorage.setItem('hardToKill', '');
    localStorage.setItem('potSize', '');
    localStorage.setItem('waterSchedule', '');
    setSearchParams({ page: 1, perPage: 12 });
    dispatch(addReload(true));
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

                  localStorage.setItem('minPrice', value[0]);
                  localStorage.setItem('maxPrice', value[1]);
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
