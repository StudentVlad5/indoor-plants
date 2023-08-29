import React from 'react';
import {
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeroDiscr,
  HeroBtn,
  HeroBoxText,
  HeroBox,
  Img,
} from './Hero.styled';
// import { useTranslation } from 'react-i18next';
import hero from '../../../images/hero/hero1.png';
import heroDesk from '../../../images/hero/heroDesk.png';
import { Products } from '../Products/Products';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
export const Hero = () => {
  // const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog?${searchParams}`);
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
    <HeroSection>
      <HeroContainer>
        <Img src={hero} alt="heroImg" />
        <Img src={heroDesk} alt="heroImg" />

        <HeroBox>
          <HeroBoxText>
            <HeroTitle>Indoor Plants</HeroTitle>
            <HeroDiscr>bring the beauty of nature into your home</HeroDiscr>
            <HeroBtn type="button">Shop now</HeroBtn>
          </HeroBoxText>
        </HeroBox>
      </HeroContainer>

      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {products.length > 0 && !error && <Products products={products} />}
      {/* <Products /> */}
    </HeroSection>
  );
};
