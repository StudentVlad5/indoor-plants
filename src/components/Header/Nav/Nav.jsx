import React from 'react';
import PropTypes from 'prop-types';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileNav = ({ toggleMenu }) => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  return (
    <MobileNavList>
      <NavItem to={`/?${searchParams}`} onClick={toggleMenu}>
        {t('About Us')}
      </NavItem>
      <NavItem to={`/catalog?${searchParams}`} onClick={toggleMenu}>
        {t('Shop')}
      </NavItem>
      <NavItem to={`/gifts?${searchParams}`} onClick={toggleMenu}>
        {t('Gifts')}
      </NavItem>
      <NavItem to="/care" onClick={toggleMenu}>
        {t('Care')}
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  return (
    <NavList>
      <NavItem to={`/?${searchParams}`}>{t('About Us')}</NavItem>
      <NavItem to={`/catalog?${searchParams}`}>{t('Shop')}</NavItem>
      <NavItem to={`/gifts?${searchParams}`}>{t('Gifts')}</NavItem>
      <NavItem to="/care">{t('Care')}</NavItem>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};