import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUser, getUserAvatar } from 'redux/auth/selectors';
import {
  MobileAccountButton,
  AccountButton,
  IconUser,
  AvatarUser,
} from './UserNav.styled';
// import { useTranslation } from 'react-i18next';

export const MobileUserNav = ({ toggleMenu }) => {
  const user = useSelector(selectUser);
  const avatar = useSelector(getUserAvatar);

  // const { t } = useTranslation();

  return (
    <MobileAccountButton to="/user" onClick={toggleMenu}>
      {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />}
      {user}
    </MobileAccountButton>
  );
};

export const UserNav = () => {
  const user = useSelector(selectUser);
  const avatar = useSelector(getUserAvatar);

  return (
    <AccountButton to="/user">
      {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />}
      {user}
    </AccountButton>
  );
};

MobileUserNav.propTypes = {
  toggleMenu: PropTypes.arrayOf(PropTypes.string),
};
