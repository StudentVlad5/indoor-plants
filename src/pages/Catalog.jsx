import React, { useEffect, useState } from 'react';
import { SEO } from 'utils/SEO';
import { fetchData } from 'services/APIservice';
import { useSearchParams } from 'react-router-dom';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
const CatalogPage = () => {
  const [listOfGoods, setListOfGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const BASE_URL_IMG = 'http://localhost:3030/uploads/';

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
    <>
      <SEO title="HomeForest Catalog" description="Catalog of goods" />
      <h3>CatalogPage</h3>
      <div>
        {listOfGoods?.length === 0 && !isLoading ? (
          <h3>Whoops! Can&apost find anything...</h3>
        ) : (
          listOfGoods.map(item => (
            <div key={item._id}>
              <p>{item.name}</p>
              <img src={BASE_URL_IMG + item.images[0]} alt={item.name} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CatalogPage;
