import React, { useState } from 'react';
import {
  ArrowIcon,
  Feedback,
  FeedbackBox,
  FeedbackDiscr,
  FeedbackSection,
  FeedbackTitle,
  FeedbackUser,
  QuotationMarkIcon,
} from './Feedback.styled';

export const FeedbackComp = () => {
  const feedbackArr = [
    {
      text: 'Yukka has taken pride of place in his new home and looks beautiful in the sun on a white wall.',
      user: 'Matthew H.',
    },
    {
      text: ' Strelitzia is beautiful! 😍 I got it as a gift from my husband and I think it was from the heart because she has been with us for less than a month and two new leaves are already growing 🙂',
      user: 'Jenny P.',
    },
  ];
  const [currentSlide, setcurrentSlide] = useState(0);
  const nextSlide = () => {
    setcurrentSlide(prevSlide => (prevSlide + 1) % feedbackArr.length);
  };

  const prevSlide = () => {
    setcurrentSlide(prevSlide =>
      prevSlide === 0 ? feedbackArr.length - 1 : prevSlide - 1,
    );
  };

  return (
    <FeedbackSection>
      <Feedback>
        <FeedbackTitle>What our clients say</FeedbackTitle>
        <FeedbackBox>
          <ArrowIcon onClick={prevSlide} />
          <FeedbackDiscr>
            <QuotationMarkIcon />
            {feedbackArr[currentSlide].text}
            <FeedbackUser>{feedbackArr[currentSlide].user}</FeedbackUser>
          </FeedbackDiscr>
          <ArrowIcon onClick={nextSlide} />
        </FeedbackBox>

        {/* <FeedbackBox>
          <FeedbackDiscr>
            <QuotationMarkIcon />
            {feedbackArr[currentSlide].text}
            <FeedbackUser>{feedbackArr[currentSlide].user}</FeedbackUser>
          </FeedbackDiscr>
        </FeedbackBox> */}
      </Feedback>
    </FeedbackSection>
  );
};
