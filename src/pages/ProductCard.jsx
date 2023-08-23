import React from 'react'; //, { useState, useEffect }
import { useTranslation } from 'react-i18next';
import { SEO } from 'utils/SEO';
// import { fetchData } from '../services/APIservice';
import { ProductCard } from '../components/ProductCard/ProductCard';
// import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
// import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

const ProductCardPage = () => {
  // const [product, setProduct] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { t } = useTranslation();

  // useEffect(() => {
  //   (async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData('/catalog/:id');
  //       setProduct(data);
  //       if (!data) {
  //         return onFetchError(t('Whoops, something went wrong'));
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, [t]);

  return (
    <>
      <SEO
        title={t('HomeForest Product card')}
        description="Product Card Page"
      />
      {/* {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {product.length > 0 && !error && <ProductCard product={product} />} */}
      <ProductCard />
    </>
  );
};

export default ProductCardPage;
