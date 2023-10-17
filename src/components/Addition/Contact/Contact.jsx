import React, { useEffect } from 'react';
import { Container, Title, ContactsList, SubTitleLi } from './Contact.styled';

export const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>Contact us</Title>
      <ContactsList>
        <SubTitleLi>+38 095 930 98 76</SubTitleLi>
        <SubTitleLi>+43 681 10541148</SubTitleLi>
        <SubTitleLi>contact@brand-maze.com</SubTitleLi>
      </ContactsList>
    </Container>
  );
};