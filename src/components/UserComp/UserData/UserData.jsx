import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserDataItem } from './UserDataItem/UserDataItem';
import {
  BtnChangePassword,
  EditCameraForm,
  EditCameraWrapper,
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
  BtnSave,
  BtnCancel,
  TitleArticle,
  BtnContainer,
} from './UserData.styled';
import { useAuth } from 'hooks/useAuth';
import { update } from 'redux/auth/operations';
import { selectId, getUserAvatar } from 'redux/auth/selectors';
import NotFoundImg from '../../../images/No-image-available.webp';

export const UserData = () => {
  const { BASE_URL_IMG } = window.global;
  const [editProfileSettings, setEditProfileSettings] = useState(false);
  const [active, setActive] = useState('');
  const [changePasswordShow, setChangePasswordShow] = useState(false);
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
  let profile = false;

  const changeAvatar = e => {
    const data = {};
    data['avatar'] = e.target.files[0];
    data['id'] = id;
    dispatch(update(data));
  };

  const birthday = userIn.birthday
    ? new Date(userIn.birthday).toISOString().slice(0, 10)
    : '';

  return (
    <UserDataSection>
      <UserDataContainer>
        <TitleArticle>Photo</TitleArticle>
        <UserDataImgWrapper>
          <UserDataImg alt="User" src={avatar} />
          <EditCameraForm>
            <EditCameraWrapper>
              <EditPhotoLabel htmlFor="user_photo">
                <span>Edit photo</span>
              </EditPhotoLabel>
            </EditCameraWrapper>
            <EditPhotoInput
              type="file"
              name="edit photo"
              id="user_photo"
              onChange={changeAvatar}
              accept=".gif,.jpg,.jpeg,.webp,.png"
            />
          </EditCameraForm>
        </UserDataImgWrapper>

        {!editProfileSettings && (
          <>
            <TitleArticle>Profile</TitleArticle>
            <ProfileContainer>
              <PensilStyle onClick={() => setEditProfileSettings(true)} />
              <ProfileSpanName>{userIn.userName}</ProfileSpanName>
              <ProfileSpanValues>{userIn.email}</ProfileSpanValues>
              <ProfileSpanValues>{birthday}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.phone}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.location}</ProfileSpanValues>
            </ProfileContainer>
          </>
        )}
        {editProfileSettings && (
          <>
            <UserDataList>
              <UserDataItem
                profile={profile}
                label={'Name'}
                defaultValue={userIn.userName}
                type="text"
                name="userName"
                active={active}
                setActive={setActive}
                id="name"
              />

              <UserDataItem
                profile={profile}
                label={'Email'}
                defaultValue={userIn.email}
                type="email"
                name="email"
                active={active}
                setActive={setActive}
                id="email"
              />

              <UserDataItem
                profile={profile}
                label={'Birthday'}
                defaultValue={birthday || '01.01.1900'}
                type="date"
                name="birthday"
                active={active}
                setActive={setActive}
                id="birthday"
              />

              <UserDataItem
                profile={profile}
                label={'Phone'}
                defaultValue={userIn.phone}
                type="tel"
                name="phone"
                active={active}
                setActive={setActive}
                id="phone"
              />

              <UserDataItem
                profile={profile}
                label={'City'}
                defaultValue={userIn.location}
                type="text"
                name="location"
                active={active}
                setActive={setActive}
                id="city"
              />
            </UserDataList>
            <BtnContainer>
              <BtnCancel onClick={() => setEditProfileSettings(false)}>
                CANCEL
              </BtnCancel>
              <BtnSave onClick={() => setEditProfileSettings(false)}>
                SAVE
              </BtnSave>
            </BtnContainer>
          </>
        )}
      </UserDataContainer>
      <TitleArticle>Change Password</TitleArticle>
      <BtnChangePassword
        onClick={() => setChangePasswordShow(!changePasswordShow)}
      >
        Change Password
      </BtnChangePassword>
      {changePasswordShow && (
        <UserPasswordList>
          <UserDataItem
            profile={profile}
            label={'New Password'}
            type="text"
            name="password"
            active={active}
            setActive={setActive}
            id="ChangePassword"
            password={setChangePasswordShow}
          />
        </UserPasswordList>
      )}
    </UserDataSection>
  );
};
