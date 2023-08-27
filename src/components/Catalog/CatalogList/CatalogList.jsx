import React, { useEffect, useState } from 'react';
import { fetchData } from 'services/APIservice';
import { useSearchParams } from 'react-router-dom';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import {
  CatalogListContainer,
  ItemWraper,
  NameWraper,
} from './CatalogList.styled';

export const CatalogList = () => {
  const [listOfGoods, setListOfGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const { BASE_URL_IMG } = window.global;
  // const BASE_URL_IMG = 'http://localhost:3030/uploads/';

  useEffect(() => {
    async function fetchListOfGoods() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog?${searchParams}`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setListOfGoods(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchListOfGoods();
  }, []);

  console.log(listOfGoods);

  return (
    <CatalogListContainer>
      {listOfGoods?.length === 0 && !isLoading ? (
        <h3>Whoops! Can&apost find anything...</h3>
      ) : (
        listOfGoods.map(item => (
          <ItemWraper key={item._id}>
            <img src={BASE_URL_IMG + item.images[0]} alt={item.name} />
            <h4 style={{ margin: '4px auto' }}>{item.name}</h4>
            <NameWraper>
              {item.options.map(data => (
                <li style={{ margin: 'auto' }} key={data.title}>
                  {data.title} -{' '}
                  {Math.round(
                    Number(data.price.split(',').join('.')) -
                      Number(data.discount.split(',').join('.')),
                    2,
                  )}
                  {item.currency}
                </li>
              ))}
            </NameWraper>
          </ItemWraper>
        ))
      )}
    </CatalogListContainer>
  );
};
