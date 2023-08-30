import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUser, getUserAvatar } from 'redux/auth/selectors';
import NotFoundImg from '../../../images/No-image-available.webp';
import {
  MobileAccountButton,
  AccountButton,
  IconUser,
  AvatarUser,
} from './UserNav.styled';
// import { useTranslation } from 'react-i18next';

export const MobileUserNav = ({ toggleMenu }) => {
  const user = useSelector(selectUser);
  const userAvatar = useSelector(getUserAvatar);
  const { BASE_URL_IMG } = window.global;
  let avatar = NotFoundImg;
  if (userAvatar !== '' && userAvatar !== undefined) {
    avatar =
      BASE_URL_IMG +
      'avatars/' +
      userAvatar.split('/')[userAvatar.split('/').length - 1];
  }

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
  const userAvatar = useSelector(getUserAvatar);
  const { BASE_URL_IMG } = window.global;
  let avatar = NotFoundImg;
  if (userAvatar !== '' && userAvatar !== undefined) {
    avatar =
      BASE_URL_IMG +
      'avatars/' +
      userAvatar.split('/')[userAvatar.split('/').length - 1];
  }

  return (
    <AccountButton to="/user">
      {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />}
      {user}
    </AccountButton>
  );
};

MobileUserNav.propTypes = {
  toggleMenu: PropTypes.func,
};
