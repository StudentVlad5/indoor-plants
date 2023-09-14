import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav } from 'components/Header/Nav/Nav';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserNav } from 'components/Header/UserNav/UserNav';
import { Basket } from '../Basket/Basket';
import { Search } from 'components/Search/Search';

import {
  Container,
  IconSearch,
  NavBlock,
  IconFavorite,
  MobileContainer,
  MobileNavBlock,
  IconSearchMobile,
  IconFavoriteMobile,
} from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [showSearchForm, setShowSearchForm] = useState(false);
  const toggleSearchForm = () => {
    setShowSearchForm(state => !state);
  };
  const closeSearchForm = () => {
    setShowSearchForm(false);
  };

  return (
    <Container>
      <Nav />
      <NavBlock>
        {!showSearchForm && (
          <IconSearch onClick={toggleSearchForm} aria-label="Search" />
        )}
        {showSearchForm && <Search onClose={closeSearchForm} />}

        {isLoggedIn ? <UserNav /> : <AuthNav />}

        {isLoggedIn ? (
          <Link to={'/user/favorites'}>
            <div style={{ width: '24px', height: '24px' }}>
              <IconFavorite />
            </div>
          </Link>
        ) : (
          <Link to={'/signin'}>
            {' '}
            <div style={{ width: '24px', height: '24px' }}>
              <IconFavorite />
            </div>
          </Link>
        )}

        <Basket />
      </NavBlock>
    </Container>
  );
};

export const MobileNavigation = ({ toggleMobileMenu }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const toggleSearchForm = () => {
    setShowSearchForm(state => !state);
  };

  return (
    <MobileContainer>
      <Nav />
      <MobileNavBlock>
        {!showSearchForm && (
          <IconSearchMobile onClick={toggleSearchForm} aria-label="Search" />
        )}
        {showSearchForm && (
          <Search
            onClose={toggleSearchForm}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}

        <IconFavoriteMobile />
        <Basket />
      </MobileNavBlock>
    </MobileContainer>
  );
};
