import React from 'react';
import { getCareList } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  CareContainer,
  CareSection,
  ListItem,
  TitleHeading,
  List,
  CareSpanTitle,
  CareP,
  CareSpan,
  CareLi,
  CareUl,
} from './Care.styled';

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
        <div>
          {products &&
            alphabet.map(item => (
              <List key={item}>
                <ListItem>{item.toUpperCase()}</ListItem>
                {arraOfNames &&
                  uniqArr.map((it, index) => {
                    if (it?.slice(0, 1).toLowerCase() === item)
                      return (
                        <TitleHeading
                          style={{ cursor: 'pointer' }}
                          key={index}
                          onClick={e => handleChoicePlant(e)}
                        >
                          {it}
                        </TitleHeading>
                      );
                  })}
              </List>
            ))}
        </div>
        {isLoading ? onLoading() : onLoaded()}
      </CareContainer>
      <CareContainer>
        {plant &&
          plant.map(plant => (
            <CareUl key={plant.id}>
              <CareLi>
                <CareSpanTitle style={{ fontWeight: '700' }}>
                  Common names:{' '}
                </CareSpanTitle>
                <CareP style={{ fontWeight: '700' }}>
                  {plant.common.join(', ')}
                </CareP>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Category: </CareSpanTitle>
                <CareSpan>{plant.category}</CareSpan>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Family: </CareSpanTitle>
                <CareSpan>{plant.family}</CareSpan>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Latin name: </CareSpanTitle>
                <CareP>{plant.latin}</CareP>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Origin: </CareSpanTitle>
                <CareSpan>{plant.origin}</CareSpan>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Ideal light: </CareSpanTitle>
                <CareSpan>{plant.ideallight}</CareSpan>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Tolerated light: </CareSpanTitle>
                <CareP>{plant.toleratedlight}</CareP>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Watering: </CareSpanTitle>
                <CareP>{plant.watering}</CareP>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Temp max °C: </CareSpanTitle>
                <CareSpan>{plant.tempmax.celsius}</CareSpan>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Temp min °C: </CareSpanTitle>
                <CareSpan>{plant.tempmin.celsius}</CareSpan>
              </CareLi>
              <CareLi>
                <CareSpanTitle>Use: </CareSpanTitle>
                <CareSpan>{plant.use.join(', ')}</CareSpan>
              </CareLi>
            </CareUl>
          ))}
      </CareContainer>
    </CareSection>
  );
};
