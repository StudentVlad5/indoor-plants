import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { useEffect } from 'react';
import ForgotPasswordForm from 'components/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addHeaderBottom({
        headerBottom: 'addHeaderBottom',
      }),
    );
  }, []);

  return (
    <>
      <SEO
        title="HomeForest Change Password"
        description="Change Password for your account"
      />
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPasswordPage;
