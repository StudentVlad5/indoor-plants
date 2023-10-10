import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { update } from 'redux/auth/operations';
import { selectId, getUserAvatar } from 'redux/auth/selectors';
import {
  BtnLight,
  EditCameraForm,
  EditPhotoInput,
  EditPhotoLabel,
  ProfileContainer,
  ProfileSpanName,
  ProfileSpanValues,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
  UserDataSection,
  UserPasswordList,
  PensilStyle,
  BtnGreen,
  TitleArticle,
  BtnContainer,
  IconBtn,
} from './UserData.styled';

import NotFoundImg from 'images/No-image-available.webp';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';
import { Profile } from '../Profile/Profile';
import { ChangePassword } from '../ChangePassword/ChangePassword';
import { DefaultDelivery } from '../DefaultDelivery/DefaultDelivery';

export const UserData = () => {
  const [editProfileSettings, setEditProfileSettings] = useState(false);
  const dispatch = useDispatch();

  const id = useSelector(selectId);
  const userAvatar = useSelector(getUserAvatar);
  let avatar = NotFoundImg;
  if (userAvatar !== '' && userAvatar !== undefined) {
    avatar =
      BASE_URL_IMG +
      'avatars/' +
      userAvatar.split('/')[userAvatar.split('/').length - 1];
  }
  // const { t } = useTranslation();
  let { userIn } = useAuth();

  const changeAvatar = e => {
    const data = {};
    data['avatar'] = e.target.files[0];
    data['id'] = id;
    dispatch(update(data));
  };

  const birthday = userIn.birthday
    ? new Date(userIn.birthday).toLocaleDateString()
    : '';

  return (
    <UserDataSection>
      <UserDataContainer>
        {!editProfileSettings && (
          <>
            <UserDataImgWrapper>
              <UserDataImg alt="User" src={avatar} />
              <EditCameraForm>
                <EditPhotoInput
                  type="file"
                  name="edit photo"
                  id="user_photo"
                  onChange={changeAvatar}
                  accept=".gif,.jpg,.jpeg,.webp,.png"
                />
              </EditCameraForm>
            </UserDataImgWrapper>
            <TitleArticle>Profile</TitleArticle>
            <ProfileContainer>
              <IconBtn onClick={() => setEditProfileSettings(true)}>
                <PensilStyle />
              </IconBtn>
              <ProfileSpanName>
                {userIn.userName} {userIn.surname}
              </ProfileSpanName>
              <ProfileSpanValues>{userIn.email}</ProfileSpanValues>
              <ProfileSpanValues>{birthday}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.phone}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.location}</ProfileSpanValues>
            </ProfileContainer>
          </>
        )}
        {editProfileSettings && <Profile onClose={setEditProfileSettings} />}
      </UserDataContainer>
      <UserDataContainer>
        <TitleArticle>Change Password</TitleArticle>
        <ChangePassword />
      </UserDataContainer>
      <UserDataContainer>
        <TitleArticle>My addresses</TitleArticle>
        <BtnLight>add address</BtnLight>
      </UserDataContainer>
      <UserDataContainer>
        <TitleArticle>Default delivery</TitleArticle>
        <DefaultDelivery />
      </UserDataContainer>
    </UserDataSection>
  );
};
