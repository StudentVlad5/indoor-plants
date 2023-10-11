import React, { useEffect } from 'react';
import { Container, Title, Parah } from './Careers.styled';

export const Сareers = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <Title>Сareers</Title>
      <Parah>Currently, the company has no vacancies</Parah>
    </Container>
  );
};
