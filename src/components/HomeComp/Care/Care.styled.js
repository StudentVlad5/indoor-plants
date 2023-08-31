import styled from 'styled-components';


export const CareBoxDiscr = styled.div`
  &:nth-child(1) {
    display: block;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  &:nth-child(2) {
    display: none;
    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }
`;

export const CareBoxText = styled.div`
  margin-right: 173px;
`;

export const CareImgBox = styled.div`
  position: relative;
  margin-top: 24px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const CareImg = styled.img`
  /* margin-top: 24px; */

  /* @media screen and (min-width: 1440px) {
    margin-top: 0;
  } */
`;
