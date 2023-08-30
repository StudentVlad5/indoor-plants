import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { useEffect } from 'react';

const Register = () => {
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
      <SEO title="HomeForest Register" description="Register your account" />
      <RegisterForm />
    </>
  );
};

export default Register;
