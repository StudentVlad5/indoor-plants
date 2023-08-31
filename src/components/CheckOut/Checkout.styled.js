import styled from 'styled-components';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';

const FormSection = styled.section`
  @media screen and (max-width: ${theme.breakpoints.tablet_max}) {
    background-repeat: no-repeat;
    background-size: 620px auto;
    background-position: bottom -250px left 30%;
  }

  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: ${theme.breakpoints.desktop_max}) {
    background-repeat: no-repeat;
    background-size: 1396px auto;
    background-position: bottom -130px left 50%;
  }
`;

const FormContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 170px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 80px;
    min-height: calc(100vh - 120px);

    background-repeat: no-repeat;
    background-size: 1280px auto;
    background-position: bottom 0 left 50%;
  }
`;

const TitleCheckOut = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
    color: ${theme.colors.brown1};
  }
`;

const TextCheckOut = styled.p`
  font-size: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
  margin-top: 0;
  color: ${theme.colors.brown2};
`;

const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  color: ${theme.colors.brown1};
  background: ${theme.colors.green4};
  transform: scale(1);
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  margin-bottom: 20px;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.brown2};
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 71px;
  }
`;

export { FormSection, FormContainer, TitleCheckOut, TextCheckOut, Btn };
