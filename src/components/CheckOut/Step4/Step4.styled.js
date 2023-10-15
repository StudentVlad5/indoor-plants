import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { DataContainer } from '../Order/Order.styled';

export const DataTitle = styled.div`
  width: 100%;
  border-bottom: 0.5px solid ${theme.colors.brown};
  padding-bottom: 12px;
`;
export const DataContainerItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  align-self: start;

  gap: 20px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const DataContainerItems = styled(DataContainer)`
  max-width: 285px;
  min-height: 265px;
  justify-content: start;
`;
export const InputComments = styled.textarea`
  outline: none;
  border: none;
  background: transparent;
`;
