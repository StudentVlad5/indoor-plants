import React from 'react';
import { getCareList } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import { CareContainer, CareSection } from './Care.styled';

export const Care = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(false);
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
                  uniqArr.map(it => {
                    if (it?.slice(0, 1).toLowerCase() === item)
                      return <li key={it.id}>{it}</li>;
                  })}
              </ul>
            ))}
        </div>
        {isLoading ? onLoading() : onLoaded()}
      </CareContainer>
    </CareSection>
  );
};
