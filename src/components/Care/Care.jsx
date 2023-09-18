import React from 'react';
import { getCareList } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import { CareContainer, CareSection } from './Care.styled';

export const Care = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [plant, setPlant] = useState(false);
  const [, setError] = useState(null);

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let arraOfNames = [];
  if (products) {
    products.map(item => {
      arraOfNames.push(...item.common);
    });
  }
  let uniqArr = Array.from(new Set(arraOfNames.map(item => item.trim())));

  const handleChoicePlant = e => {
    e.preventDefault;
    let plantForSearch = [];
    plantForSearch = products?.map(item => {
      for (let i = 0; i < item.common?.length; i++) {
        if (item.common[i] === e.currentTarget.innerText) {
          plantForSearch.push(item);
        }
      }
      setPlant(plantForSearch);
    });
  };

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await getCareList(`/care`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <CareSection>
      <CareContainer>
        <h1>CARE</h1>
        <div>
          {products &&
            alphabet.map(item => (
              <ul key={item}>
                {item}
                {arraOfNames &&
                  uniqArr.map((it, index) => {
                    if (it?.slice(0, 1).toLowerCase() === item)
                      return (
                        <li
                          style={{ cursor: 'pointer' }}
                          key={index}
                          onClick={e => handleChoicePlant(e)}
                        >
                          {it}
                        </li>
                      );
                  })}
              </ul>
            ))}
        </div>
        s{isLoading ? onLoading() : onLoaded()}
      </CareContainer>
      <CareContainer>
        {plant &&
          plant.map(plant => (
            <ul key={plant.id}>
              <li>
                <span>Common names: </span>
                <span>{plant.common.join(', ')}</span>
              </li>
              <li>
                <span>Category: </span>
                <span>{plant.category}</span>
              </li>
              <li>
                <span>Family: </span>
                <span>{plant.family}</span>
              </li>
              <li>
                <span>Latin name: </span>
                <span>{plant.latin}</span>
              </li>
              <li>
                <span>Origin: </span>
                <span>{plant.origin}</span>
              </li>
              <li>
                <span>Ideal light: </span>
                <span>{plant.ideallight}</span>
              </li>
              <li>
                <span>Tolerated light: </span>
                <span>{plant.toleratedlight}</span>
              </li>
              <li>
                <span>Watering: </span>
                <span>{plant.watering}</span>
              </li>
              <li>
                <span>Temp max °C: </span>
                <span>{plant.tempmax.celsius}</span>
              </li>
              <li>
                <span>Temp min °C: </span>
                <span>{plant.tempmin.celsius}</span>
              </li>
              <li>
                <span>Use: </span>
                <span>{plant.use.join(', ')}</span>
              </li>
            </ul>
          ))}
      </CareContainer>
    </CareSection>
  );
};
