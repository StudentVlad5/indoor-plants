import React from 'react';
import * as SC from './NotFound.styled';

export const NotFound = () => {
  // const { t } = useTranslation();

  return (
    <SC.ErrorBox>
      <SC.ErrorBoxText>
        <SC.ErrorTitle>404</SC.ErrorTitle>
        <SC.ErrorDiscr>sorry, this page cannot be found</SC.ErrorDiscr>
        <SC.ErrorBtn>
          <SC.GoBackBtn to={'/'}>Back</SC.GoBackBtn>
        </SC.ErrorBtn>
      </SC.ErrorBoxText>
    </SC.ErrorBox>
  );
};
