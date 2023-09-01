import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import styled from 'styled-components';

const UserDataSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 0px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    align-items: end;
  }
`;
const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 0px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: space-around;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    margin: 30px 0;
    padding: 0 20px;
  }
`;

const UserDataImgWrapper = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    position: relative;
    margin-bottom: 36px;
  }
`;

const EditCameraForm = styled.form`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    position: absolute;
    right: 0;
    top: 214px;
  }
`;

const UserDataImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  object-fit: cover;
`;

const EditCameraWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  flex-direction: row-reverse;
`;

const EditPhotoLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 24px;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-weight: 400;
  line-height: 1.8;
  transition: all 150ms linear;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-right: 0px;
  }
`;

const EditPhotoInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
`;

const UserDataList = styled.ul`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 16px;
    padding-bottom: 55px;
    width: 379px;
    margin-left: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 16px;
  }
`;

const UserPasswordList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 16px;
    padding-bottom: 55px;
    width: 379px;
    margin-left: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 16px;
  }
`;

const BtnChangePassword = styled(Button)`
  display: flex;
  width: 180px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  text-decoration: none;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid ${theme.colors.brown};
  color: ${theme.colors.brown};
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
`;
export {
  EditCameraForm,
  EditCameraWrapper,
  EditPhotoInput,
  EditPhotoLabel,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
  BtnChangePassword,
  UserDataSection,
  UserPasswordList,
};
