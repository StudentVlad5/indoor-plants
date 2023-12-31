import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites, selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav } from 'components/Header/Nav/Nav';
import { AuthNav } from 'components/Header/AuthNav/AuthNav';
import { UserNav } from 'components/Header/UserNav/UserNav';
import { ShoppingBag } from '../ShoppingBag/ShoppingBag';
import { Search } from 'components/Search/Search';
import {
  Container,
  IconSearch,
  NavBlock,
  IconFavorite,
  MobileContainer,
  MobileNavBlock,
  IconWrapper,
  Count,
  View,
} from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);

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
        <View>
          {!showSearchForm && (
            <IconSearch onClick={toggleSearchForm} aria-label="Search" />
          )}
          {showSearchForm && <Search onClose={closeSearchForm} />}

          {isLoggedIn ? <UserNav /> : <AuthNav />}

          {isLoggedIn ? (
            <Link to={'/user/favorites'}>
              <IconWrapper>
                <IconFavorite aria-label="Favorites" />
                {favorites.length > 0 && <Count>{favorites.length}</Count>}
              </IconWrapper>
            </Link>
          ) : (
            <Link to={'/signin'}>
              <IconWrapper>
                <IconFavorite aria-label="Favorites" />
              </IconWrapper>
            </Link>
          )}
        </View>

        <ShoppingBag />
      </NavBlock>
    </Container>
  );
};

export const MobileNavigation = ({ toggleMobileMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);

  const [showSearchForm, setShowSearchForm] = useState(false);
  const toggleSearchForm = () => {
    setShowSearchForm(state => !state);
  };

  return (
    <MobileContainer>
      <Nav />
      <MobileNavBlock>
        {!showSearchForm && (
          <IconSearch onClick={toggleSearchForm} aria-label="Search" />
        )}
        {showSearchForm && (
          <Search
            onClose={toggleSearchForm}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}

        {isLoggedIn ? (
          <Link to={'/user/favorites'} onClick={toggleMobileMenu}>
            <IconWrapper>
              <IconFavorite aria-label="Favorites" />
              {favorites.length > 0 && <Count>{favorites.length}</Count>}
            </IconWrapper>
          </Link>
        ) : (
          <Link to={'/signin'}>
            <IconWrapper>
              <IconFavorite aria-label="Favorites" />
            </IconWrapper>
          </Link>
        )}
      </MobileNavBlock>
    </MobileContainer>
  );
};
