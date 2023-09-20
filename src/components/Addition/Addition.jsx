import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AdditionSection,
  AdditionContainer,
  AdditionAboutWrapper,
  AdditionDataWrapper,
  AdditionTitle,
  FolderWrapper,
  LinkFolder,
} from './Addition.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const Addition = () => {
  return (
    <AdditionSection>
      <AdditionContainer>
        <Title as="h1" hidden>
          Addition
        </Title>
        <AdditionDataWrapper>
          <FolderWrapper>
            <AdditionTitle as="h2">Magazin:</AdditionTitle>
            <LinkFolder className="linkFolder" to={`/addition/about_company`}>
              About company
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/addition/faq`}>
              FAQ
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/addition/blogs`}>
              BLOGS
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/addition/shipping`}>
              Shipping & Handling
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/addition/garantee`}>
              30-Day Garantee
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/addition/course`}>
              Free Online Course
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/addition/rewards_program`}>
              Rewards Program
            </LinkFolder>
            <LinkFolder className="linkFolder" to={`/addition/contact`}>
              Contact Us
            </LinkFolder>
          </FolderWrapper>
          <AdditionAboutWrapper>
            <Outlet />
          </AdditionAboutWrapper>
        </AdditionDataWrapper>
      </AdditionContainer>
    </AdditionSection>
  );
};
