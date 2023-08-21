import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 140px);

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 120px);
  }
`;
