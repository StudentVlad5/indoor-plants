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
  CareSpan,
  CareLi,
  CareUl,
  ListContainer,
  CareSpanName,
  CareSpanValue,
} from './Care.styled';

import { ReactComponent as Category } from '../../images/svg/care/category.svg';
import { ReactComponent as Family } from '../../images/svg/care/family.svg';
import { ReactComponent as Ideal_light } from '../../images/svg/care/ideal_light.svg';
import { ReactComponent as Latin_name } from '../../images/svg/care/latin_name.svg';
import { ReactComponent as Origin } from '../../images/svg/care/origin.svg';
import { ReactComponent as Temp_max } from '../../images/svg/care/temp_max.svg';
import { ReactComponent as Temp_min } from '../../images/svg/care/temp_min.svg';
import { ReactComponent as Tolereted_light } from '../../images/svg/care/tolereted_light.svg';
import { ReactComponent as Use } from '../../images/svg/care/use.svg';
import { ReactComponent as Watering } from '../../images/svg/care/watering.svg';
import { Search } from './Search/Search';

export const Care = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [plant, setPlant] = useState(false);
  const [, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ListContainer>
          {products &&
            alphabet.map(item => (
              <List key={item}>
                <ListItem>{item.toUpperCase()}</ListItem>
                {arraOfNames &&
                  uniqArr.map((it, index) => {
                    if (
                      it?.slice(0, 1).toLowerCase() === item &&
                      it?.includes(searchQuery)
                    )
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
        </ListContainer>
        {isLoading ? onLoading() : onLoaded()}
      </CareContainer>
      <CareContainer>
        <ListContainer>
          {plant &&
            plant.map(plant => (
              <CareUl key={plant.id}>
                <CareLi>
                  <CareSpanName>names: </CareSpanName>
                  <CareSpanValue>{plant.common.join(', ')}</CareSpanValue>
                </CareLi>
                <CareLi>
                  <Category />
                  <CareSpanTitle>Category: </CareSpanTitle>
                  <CareSpan>{plant.category}</CareSpan>
                </CareLi>
                <CareLi>
                  <Family />
                  <CareSpanTitle>Family: </CareSpanTitle>
                  <CareSpan>{plant.family}</CareSpan>
                </CareLi>
                <CareLi>
                  <Latin_name />
                  <CareSpanTitle>Latin name: </CareSpanTitle>
                  <CareSpan>{plant.latin}</CareSpan>
                </CareLi>
                <CareLi>
                  <Origin />
                  <CareSpanTitle>Origin: </CareSpanTitle>
                  <CareSpan>{plant.origin}</CareSpan>
                </CareLi>
                <CareLi>
                  <Ideal_light />
                  <CareSpanTitle>Ideal light: </CareSpanTitle>
                  <CareSpan>{plant.ideallight}</CareSpan>
                </CareLi>
                <CareLi>
                  <Tolereted_light />
                  <CareSpanTitle>Tolerated light: </CareSpanTitle>
                  <CareSpan>{plant.toleratedlight}</CareSpan>
                </CareLi>
                <CareLi>
                  <Watering />
                  <CareSpanTitle>Watering: </CareSpanTitle>
                  <CareSpan>{plant.watering}</CareSpan>
                </CareLi>
                <CareLi>
                  <Temp_max />
                  <CareSpanTitle>Temp max °C: </CareSpanTitle>
                  <CareSpan>{plant.tempmax.celsius}</CareSpan>
                </CareLi>
                <CareLi>
                  <Temp_min />
                  <CareSpanTitle>Temp min °C: </CareSpanTitle>
                  <CareSpan>{plant.tempmin.celsius}</CareSpan>
                </CareLi>
                <CareLi>
                  <Use />
                  <CareSpanTitle>Use: </CareSpanTitle>
                  <CareSpan>{plant.use.join(', ')}</CareSpan>
                </CareLi>
              </CareUl>
            ))}
        </ListContainer>
      </CareContainer>
    </CareSection>
  );
};
