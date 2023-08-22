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
import { Products } from '../Products/Products';
export const Hero = () => {
  // const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroContainer>
        <Img src={hero} alt="heroImg" />
        <HeroBox>
          <HeroBoxText>
            <HeroTitle>Indoor Plants</HeroTitle>
            <HeroDiscr>bring the beauty of nature into your home</HeroDiscr>
            <HeroBtn type="button">Shop now</HeroBtn>
          </HeroBoxText>
        </HeroBox>

      </HeroContainer>
      <Products />

    </HeroSection>
  );
};
