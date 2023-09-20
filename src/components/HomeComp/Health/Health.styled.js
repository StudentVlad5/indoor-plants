import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HealthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HealthBoxDiscr = styled.div`
  &:nth-child(1) {
    display: block;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  &:nth-child(2) {
    display: none;
    @media screen and (min-width: 1440px) {
      display: block;
      display: flex;
    }
  }
`;

export const BoxText = styled.div`
  margin-left: 173px;
`;

export const HealthHeadTitle = styled.h3`
  color: #5f4a32;
  font-family: 'Raisonne Pro', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const HealthTitle = styled.h2`
  color: #5a6b47;
  font-family: 'Nib Pro', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    font-size: 32px;
  }
`;

export const HealthDiscr = styled.p`
  color: #8c8276;
  font-family: 'Nib Pro', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 26.56px */
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
    width: 437px;
  }
`;

export const ReadMore = styled(Link)`
  color: #5f4a32;
  font-family: 'Nib Pro';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ImgBox = styled.div`
  position: relative;
  margin-top: 24px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const HealthList = styled.ul`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const HealthListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const HealthImgTitle = styled(HealthTitle)`
  margin-top: 0;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    line-height: 144.5%; /* 46.24px */
    margin-bottom: 40px;
  }
`;

export const HealthImgDiscr = styled.h4`
  color: #5f4a32;
  text-align: center;
  font-family: Nib Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 18px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    margin-top: 24px;
    margin-bottom: 0;
  }
`;
