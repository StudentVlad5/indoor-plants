import React from 'react';
import { UserComp } from 'components/UserComp/UserComp';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { useEffect } from 'react';

const UserPage = () => {
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
      <SEO title="HomeForest Profile" description="User profile" />
      <UserComp />
    </>
  );
};

export default UserPage;
