import React from 'react';
import { Logout } from 'components/UserComp/Logout/Logout';
import { Outlet } from 'react-router-dom';
import {
  UserSection,
  UserContainer,
  UserAboutWrapper,
  UserDataWrapper,
  UserTitle,
  FolderWrapper,
  LinkFolder,
} from './UserComp.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const UserComp = () => {
  return (
    <UserSection>
      <UserContainer>
        <Title as="h1" hidden>
          Profile
        </Title>
        <UserDataWrapper>
          <FolderWrapper>
            <UserTitle as="h2">My account:</UserTitle>
            <LinkFolder className="linkFolder" to={`/user/profile`}>
              Profile settings
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/user/orders`}>
              My orders
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/user/favorites`}>
              Favorites
            </LinkFolder>
            <Logout />
          </FolderWrapper>
          <UserAboutWrapper>
            <Outlet />
          </UserAboutWrapper>
        </UserDataWrapper>
      </UserContainer>
    </UserSection>
  );
};
