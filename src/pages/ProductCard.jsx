import React, { useState, useEffect } from 'react'; //
import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
import { SEO } from 'utils/SEO';
import { fetchData } from '../services/APIservice';
// import { cardComponent } from 'redux/card/selectors';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { useParams } from 'react-router-dom';

const ProductCardPage = () => {
  const routeParams = useParams();
  console.log('routeParams:', routeParams);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog/${routeParams.id}`);
        console.log('getData ~ data:', data);
        setProduct(data);
        console.log(product.length);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (routeParams.id !== '' && routeParams !== undefined) {
      getData();
    }
  }, [routeParams.id, t]);

  return (
    <>
      <SEO
        title={t('HomeForest Product card')}
        description="Product Card Page"
      />
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {Object.keys(product).length > 0 && !error && (
        <ProductCard product={product} />
      )}
    </>
  );
};

export default ProductCardPage;
