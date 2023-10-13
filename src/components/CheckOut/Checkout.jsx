import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  FormSection,
  CheckOutContainer,
  CheckOutTitle,
  CheckOutDataWrapper,
  FolderWrapper,
  LinkFolder,
  CheckOutAboutWrapper,
  Liner,
  LinkFolderTitle,
} from './Checkout.styled';

// import { useTranslation } from 'react-i18next';

export const CheckOut = () => {
  // const { t } = useTranslation();

  return (
    <FormSection>
      <CheckOutContainer>
        <CheckOutTitle as="h1" hidden>
          CheckOut Steps
        </CheckOutTitle>
        <CheckOutDataWrapper>
          <FolderWrapper>
            <LinkFolder className="linkFolder step1Btn" to={`/checkout/step1`}>
              <span>1</span>
              <LinkFolderTitle>Delivery</LinkFolderTitle>
            </LinkFolder>
            <Liner>
              <span></span>
            </Liner>
            <LinkFolder className="linkFolder step2Btn" to={`/checkout/step2`}>
              <span>2</span>
              <LinkFolderTitle>Address</LinkFolderTitle>
            </LinkFolder>
            <Liner>
              <span></span>
            </Liner>
            <LinkFolder
              className="linkFolder isDisabled step3Btn"
              to={`/checkout/step3`}
            >
              <span>3</span>
              <LinkFolderTitle>Payment</LinkFolderTitle>
            </LinkFolder>
            <Liner>
              <span></span>
            </Liner>
            <LinkFolder
              className="linkFolder isDisabled step4Btn"
              to={`/checkout/step4`}
            >
              <span>4</span>
              <LinkFolderTitle>Total</LinkFolderTitle>
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
