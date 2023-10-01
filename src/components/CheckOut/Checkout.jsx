import React from 'react';
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
            <LinkFolder className="linkFolder" to={`/checkout/step2`}>
              Step 2
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/checkout/step3`}>
              Step 3
            </LinkFolder>
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
