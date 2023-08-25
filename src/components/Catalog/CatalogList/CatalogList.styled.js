import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const CatalogListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const ItemWraper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 285px;
  height: 520px;
`;
const NameWraper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

export { CatalogListContainer, ItemWraper, NameWraper };
