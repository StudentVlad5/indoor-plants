import React, { useState, useEffect } from 'react'; //
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SEO } from 'utils/SEO';
import { fetchData } from '../services/APIservice';
import { cardComponent } from 'redux/card/selectors';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
// import { Title } from 'components/baseStyles/CommonStyle.styled';

const ProductCardPage = () => {
  const card = useSelector(cardComponent);
  console.log('ProductCardPage ~ card:', card);

  const [product, setProduct] = useState([]);
  // const [product, setProduct] = useState({});
  console.log('page ~ product:', product);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog/${card.id}`);
        console.log('getData ~ data:', data);
        setProduct(data);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (card.id !== '') {
      getData();
    }
  }, [card.id, t]);

  return (
    <>
      <SEO
        title={t('HomeForest Product card')}
        description="Product Card Page"
      />
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {product.length > 0 && !error && <ProductCard product={product} />}
      {/* {product ? (
        <ProductCard product={product} />
      ) : (
        <Title>{t("Whoops, we don't have any information")}</Title>
      )} */}
    </>
  );
};

export default ProductCardPage;
