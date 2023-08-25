import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from 'utils/SEO';
import { fetchData } from '../services/APIservice';
import { Catalog } from '../components/Catalog/Catalog';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog`);
        setProducts(data);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t]);

  return (
    <>
      <SEO title="HomeForest Catalog" description="Catalog of goods" />
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {products.length > 0 && !error && <Catalog products={products} />}
    </>
  );
};

export default CatalogPage;
