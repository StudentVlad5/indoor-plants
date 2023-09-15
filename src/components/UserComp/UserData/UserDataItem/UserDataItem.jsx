import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectId } from 'redux/auth/selectors';
import { update } from 'redux/auth/operations';
import {
  CheckMarkStyle,
  Error,
  InputWrapper,
  PensilStyle,
  UserDataItemBtn,
  UserDataItemInput,
  UserDataItemInputBtnWrapper,
  UserDataItemLabel,
  UserDataItemWrapper,
} from './UserDataItem.styled';
import PropTypes from 'prop-types';
import { onSuccess } from 'components/helpers/Messages/NotifyMessages';

export const UserDataItem = ({
  name,
  label,
  type,
  defaultValue,
  active,
  setActive,
  profile,
  password,
}) => {
  const emailRegExp = /^.+@.+\..+$/;
  const cityRegex = /^[a-zA-Z\s,'-]+$/;
  const phoneRegExp = /^\+380\d{9}$/;
  const dayToday = Date.now();
  const minDate = new Date('01.01.1950');
  const passwordCheck = /^[a-zA-Z0-9]{7,32}$/g;
  const id = useSelector(selectId);
  const dispatch = useDispatch();

  const setChangePasswordShow = password;
  const [inputValue, setInputValue] = useState(defaultValue ?? '');
  const [isError, setIsError] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'userName':
        setInputValue(value);
        break;

      case 'email':
        setInputValue(value);
        break;

      case 'birthday':
        setInputValue(value);
        break;

      case 'phone':
        setInputValue(value);
        break;

      case 'location':
        setInputValue(value);
        break;

      case 'password':
        setInputValue(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = name => {
    switch (name) {
      case 'userName':
        setActive('userName');
        if (
          inputValue.length !== 0 &&
          (inputValue.length < 2 || inputValue.length > 16)
        ) {
          setIsError('type from 2 to 16 letters');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ userName: inputValue, id }));
        break;

      case 'email':
        setActive('email');
        if (!inputValue.match(emailRegExp)) {
          setIsError('please type valid email');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ email: inputValue, id }));
        break;

      case 'birthday':
        setActive('birthday');
        if (new Date(inputValue) > dayToday) {
          setIsError('date is incorrect');
          return;
        }
        if (new Date(inputValue) < minDate) {
          setIsError('date is incorrect');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(
          update({
            birthday: inputValue,
            id,
          }),
        );
        break;

      case 'phone':
        setActive('phone');
        if (!phoneRegExp.test(inputValue)) {
          setIsError('please type valid phone number starting with +380');
          return;
        }
        if (inputValue.length !== 13) {
          setIsError('phone number should contain 13 digits');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ phone: inputValue, id }));
        break;

      case 'location':
        setActive('location');
        if (!inputValue.match(cityRegex)) {
          setIsError('use format Kyiv, Brovary');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ location: inputValue, id }));
        break;

      case 'password':
        setActive('password');
        if (inputValue.length < 7) {
          setIsError('password should contain more digits');
          return;
        }
        if (inputValue.length > 32) {
          setIsError('password should contain less digits');
          return;
        }
        if (!inputValue.match(passwordCheck)) {
          setIsError('please type valid password');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ password: inputValue, id }));
        setInputValue('');
        onSuccess('Password changed successfully');
        setChangePasswordShow(false);
        break;

      default:
        return;
    }
  };

  const activeHandleClick = name => {
    if (!active) setActive(name);
  };

  return (
    <UserDataItemWrapper>
      <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
      <UserDataItemInputBtnWrapper>
        <InputWrapper>
          <UserDataItemInput
            value={!profile ? inputValue : defaultValue}
            onChange={handleChange}
            active={active === name}
            disabled={active !== name}
            type={type}
            name={name}
            id={name}
            autoComplete="off"
          />
          {isError && active === name ? <Error>{isError}</Error> : null}
        </InputWrapper>

        {!profile &&
          (active === name ? (
            <UserDataItemBtn>
              <CheckMarkStyle onClick={() => handleSubmit(name)} />
            </UserDataItemBtn>
          ) : (
            <UserDataItemBtn
              disabled={active && active !== name}
              onClick={() => activeHandleClick(name)}
            >
              <PensilStyle />
            </UserDataItemBtn>
          ))}
      </UserDataItemInputBtnWrapper>
    </UserDataItemWrapper>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  active: PropTypes.string,
  setActive: PropTypes.func,
  profile: PropTypes.any,
};
