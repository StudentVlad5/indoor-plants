import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';

const GiftsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <>
      <SEO title="HomeForest Gifts" description="Gifts" />
      <Section>
        <Container>
          <Title>GiftsPage</Title>
        </Container>
      </Section>
    </>
  );
};

export default GiftsPage;
