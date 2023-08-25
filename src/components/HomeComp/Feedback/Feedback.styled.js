import { Section } from 'components/baseStyles/CommonStyle.styled';
import styled from 'styled-components';
import { HealthDiscr, HealthTitle } from '../Health/Health.styled';
import { ReactComponent as arrow } from 'images/svg/arrow.svg';
import { ReactComponent as quotationMark } from 'images/svg/quotationMark.svg';

export const FeedbackSection = styled(Section)`
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

export const Feedback = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
/* 
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
    }
  } */
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
