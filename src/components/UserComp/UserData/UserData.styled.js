import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { ReactComponent as Pencil } from 'images/svg/pencil.svg';
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
    margin-bottom: 90px;
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

const BtnSave = styled(Button)`
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
`;

const BtnCancel = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.brown};
  border-radius: 4px;
  color: ${theme.colors.brown1};
  transform: scale(1);
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  flex-direction: column;
  padding: 20px 20px;
  background-color: ${theme.colors.blue3};
  width: 100%;
  margin: 0 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  width: 100%;
  gap: 20px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const ProfileSpanName = styled.span`
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.green};
`;

const ProfileSpanValues = styled.span`
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 4px 0;
  color: ${theme.colors.brown1};
`;

const PensilStyle = styled(Pencil)`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 14px;
  height: 14px;
  fill: ${theme.colors.brown1};
  transform: all 150ms linear;
  cursor: pointer;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

const TitleArticle = styled.div`
  width: 100%;
  padding: 0 20px;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${theme.colors.brown1};
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
  BtnSave,
  BtnCancel,
  UserDataSection,
  UserPasswordList,
  ProfileContainer,
  ProfileSpanName,
  ProfileSpanValues,
  PensilStyle,
  TitleArticle,
  BtnContainer,
};
