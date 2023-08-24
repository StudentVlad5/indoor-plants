import styled from 'styled-components';
import { ReactComponent as quotationMark } from 'images/svg/quotationMark.svg';
import { ReactComponent as arrow } from 'images/svg/arrow.svg';

export const ProductsBox = styled.div`
  padding: 60px 10px 0 10px;
`;

export const ProductsTitle = styled.h2`
  color: #5a6b47;
  font-family: 'Nib Pro', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 144.5%;
  margin-bottom: 24px;
`;

export const ProductsBtn = styled.a`
  display: flex;
  justify-content: flex-end;
  color: #5a6b47;
  font-family: 'Nib Pro', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ProductsList = styled.ul`
  display: flex;
  margin-top: 24px;
  position: relative;
  padding-bottom: 60px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    height: 1px;
    background: #5f4a32;
  }
`;

export const ProductsListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ProductsImg = styled.img`
  width: 285px;
  height: 400px;
`;

export const ProductsListItemDiscr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductsListItemDiscrText = styled.div`
  display: flex;
  margin-top: 21px;
`;

export const ListItemDiscrTitle = styled.h4`
  color: #5a6b47;
  text-align: center;
  font-family: 'Nib Pro', sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const ListItemDiscrSize = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    color: #8c8276;
    text-align: center;
    font-family: 'Raisonne Pro', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const HealthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 28px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    height: 1px;
    background: #5f4a32;
  }
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

export const ReadMore = styled.a`
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
  padding-bottom: 60px;
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
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const HealthImgTitle = styled(HealthTitle)`
  margin-top: 60px;
  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    line-height: 144.5%; /* 46.24px */
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

export const CareBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    height: 1px;
    background: #5f4a32;
  }
`;

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
      display: block;
      display: flex;
    }
  }
`;

export const CareBoxText = styled.div`
  margin-right: 173px;
`;

export const CareImgBox = styled.div`
  position: relative;
  padding-bottom: 60px;
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

export const Feedback = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    height: 1px;
    background: #5f4a32;
  }
`;

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeedbackTitle = styled(HealthTitle)`
  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 144.5%; /* 46.24px */
    margin-bottom: 64px;
  }
`;

export const FeedbackDiscr = styled(HealthDiscr)`
  text-align: center;
  width: 261px;
  margin-bottom: 0;
`;

export const QuotationMarkIcon = styled(quotationMark)``;

export const ArrowIcon = styled(arrow)`
  cursor: pointer;

  &:nth-child(1) {
    transform: scaleX(-1);
  }
`;

export const FeedbackUser = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 182.5%;
`;
