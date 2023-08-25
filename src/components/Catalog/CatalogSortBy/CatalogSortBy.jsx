import React from 'react';
import { SortContainer, Title } from './CatalogSortBy.styled';
import { ButtonSplit } from 'components/helpers/ButtonSplit/ButtonSplit';

export const CatalogSortBy = () => {
  return (
    <SortContainer>
      <Title>Indoor Plants</Title>
      <ButtonSplit>Sort</ButtonSplit>
    </SortContainer>
  );
};
