import React from 'react';
import { Navigation } from 'components/Header/Navigation/Navigation';
import { HeaderContainer } from './Header.styled';
import { Logo } from './Elements/logo/Logo';
import { Menu } from './Elements/menu/Menu';
import { useState } from 'react';
import { useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Menu />
      <Logo />
      {/* <Language /> */}
      <Navigation />
    </HeaderContainer>
  );
};
