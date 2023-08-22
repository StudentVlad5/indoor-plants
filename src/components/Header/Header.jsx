import React from 'react';
import { Navigation } from 'components/Header/Navigation/Navigation';
import { HeaderContainer } from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import { Menu } from './Elements/menu/Menu';

export const Header = () => {
  return (
    <HeaderContainer>
      <Menu />
      <Logo />
      {/* <Language /> */}
      <Navigation />
    </HeaderContainer>
  );
};
