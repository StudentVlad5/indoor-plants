import React from 'react';
import { HeroSection, HeroContainer, HeroTitle } from './Hero.styled';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>{t('HOME')}</HeroTitle>
      </HeroContainer>
    </HeroSection>
  );
};
