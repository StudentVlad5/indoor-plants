import React, { useState } from 'react';
import {
  FormSection,
  CheckOutContainer,
  CheckOutTitle,
  CheckOutDataWrapper,
  FolderWrapper,
  LinkFolder,
  CheckOutAboutWrapper,
} from './Checkout.styled';
import { Outlet } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

export const CheckOut = () => {
  // const { t } = useTranslation();

  return (
    <FormSection>
      <CheckOutContainer>
        <CheckOutTitle as="h1" hidden>
          CheckOut
        </CheckOutTitle>
        <CheckOutDataWrapper>
          <FolderWrapper>
            <CheckOutTitle as="h2">CheckOut:</CheckOutTitle>
            <LinkFolder className="linkFolder" to={`/checkout/step1`}>
              Step 1
            </LinkFolder>
            <span className="isDisabled step2Btn">
              <LinkFolder className="linkFolder" to={`/checkout/step2`}>
                Step 2
              </LinkFolder>
            </span>
            <span className="isDisabled step3Btn">
              <LinkFolder className="linkFolder" to={`/checkout/step3`}>
                Step 3
              </LinkFolder>
            </span>
          </FolderWrapper>
          <CheckOutAboutWrapper>
            <Outlet />
          </CheckOutAboutWrapper>
        </CheckOutDataWrapper>
      </CheckOutContainer>
    </FormSection>
  );
};

export default CheckOut;
