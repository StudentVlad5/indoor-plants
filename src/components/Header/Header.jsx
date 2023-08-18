import React from 'react';
import { Navigation } from 'components/Header/Navigation/Navigation';
import { HeaderContainer } from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import Language from 'components/Language/Language';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Language />
      <Navigation />
    </HeaderContainer>
  );
};
