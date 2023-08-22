import styled from 'styled-components';
import { Section } from 'components/baseStyles/CommonStyle.styled';

export const HeroSection = styled(Section)`
  /* height: 100%;
  padding: 0; */
  background-color: #fcf9f2;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0;

  /* position: relative; // for img

  height: 100%;
  width: 100%;

  justify-content: start;
  align-items: start;

  background-repeat: no-repeat; 

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-size: 50vh auto, 1400px auto;
    background-position: bottom 0px left 90%, bottom -150px left 30%;
  }

  @media screen and (min-width: 1280px) {
    min-height: calc(100vh - 120px);

    background-repeat: no-repeat;
    background-size: 524px auto, 425px 393px, 1178px 450px;
    background-position: bottom 0px left 92%, bottom 0px right 0px,
      bottom 0px left 0px;
  } */
`;

export const HeroBox = styled.div`
  position: absolute;
  padding: 37px 77px 37px 16px;
  width: 100%;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 5px 5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    -5px -5px 4px 0px rgba(255, 255, 255, 0.1) inset,
    20px 30px 100px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(7.5px);
`;

export const Img = styled.img`
  background-repeat: no-repeat;
  background-size: 'cover';
  width: 100%;
`;

export const HeroBoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroTitle = styled.h1`
  color: #3f3222;
  font-family: 'Raisonne', sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const HeroDiscr = styled.p`
  color: #3f3222;
  font-family: 'Nib Pro', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 26.56px */
  margin: 12px 0;
`;

export const HeroBtn = styled.button`
  border-radius: 5px;
  border-color: transparent;
  background: #5a6b47;

  padding: 10px 40px;
  color: #fcf9f2;
  text-align: center;
  font-family: 'Raisonne Pro', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
