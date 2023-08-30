import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserDataItem } from './UserDataItem/UserDataItem';
import {
  EditCameraForm,
  EditCameraWrapper,
  EditPhotoInput,
  EditPhotoLabel,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
} from './UserData.styled';
import { useAuth } from 'hooks/useAuth';
import { update } from 'redux/auth/operations';
import { selectId, getUserAvatar } from 'redux/auth/selectors';
import NotFoundImg from '../../../images/No-image-available.webp';

export const UserData = () => {
  const { BASE_URL_IMG } = window.global;
  const [active, setActive] = useState('');
  const dispatch = useDispatch();
  const id = useSelector(selectId);
  const userAvatar = useSelector(getUserAvatar);
  let avatar = NotFoundImg;
  console.log(userAvatar, 'userAvatar');
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
    console.log('data', data);
    dispatch(update(data));
  };

  const birthday = userIn.birthday
    ? new Date(userIn.birthday).toISOString().slice(0, 10)
    : '';

  return (
    <>
      <UserDataContainer>
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
      </UserDataContainer>
    </>
  );
};
