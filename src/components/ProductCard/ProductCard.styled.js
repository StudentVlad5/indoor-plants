import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';

const ProductCardSection = styled(Section)`
  padding-top: 40px;
`;

const ProductCardContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
`;

const ProductNav = styled.div`
  padding: 24px 0;
  border-top: 1px solid ${theme.colors.brown1};
  border-bottom: 1px solid ${theme.colors.brown1};
`;

const ProductNavList = styled.ul`
  display: inline-flex;
`;

const ProductNavItem = styled.li`
  position: relative;
  margin-right: 13px;

  &:not(:last-child)::before {
    content: ' / ';
    position: absolute;
    top: 0;
    right: -8px;
  }
`;

const ProductNavLink = styled.a`
  font-family: ${theme.fonts[0]}; //'Nib Pro'
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${props =>
    props.$primary ? theme.colors.green : theme.colors.green1};

  text-decoration: none;
`;
const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-top: 48px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 47px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
  }

  /* & .swiper-slide {
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }  */
`;

const ControlsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ControlsItem = styled.li`
  & > img {
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }
`;

const ProductImage = styled.img`
  width: 437px;
  height: 600px;
  margin-bottom: 16px;
`;

const DeliveryInfo = styled.ul`
  display: inline-flex;
  justify-content: flex-start;
  gap: 38px;
`;

const DeliveryInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 200px;

  & span {
    font-family: 'Archivo'; //Raisonne Pro
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    color: ${theme.colors.green};
  }

  & p {
    text-align: center;
    font-family: 'Domine'; //Nib Pro
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    color: ${theme.colors.brown2};
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 50%;
    padding-left: 163px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 16px;
  padding-bottom: 40px;

  border-bottom: 1px solid ${theme.colors.brown1};
`;

const Prices = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Discount = styled.li`
  font-family: 'Domine'; //Nib Pro
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  color: ${theme.colors.green1};
`;

const Price = styled.li`
  font-family: 'Domine'; //Nib Pro
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;

  color: ${theme.colors.brown2};
`;

const Description = styled(Subtitle)`
  text-transform: lowercase;
`;

const Options = styled.div`
  /* margin-bottom: 24px; */
`;

const ProductSubTitle = styled(Subtitle)`
  margin-bottom: ${props => props.marginBottom || '16px'};
  text-transform: uppercase;
`;

const OptionsList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Option = styled.button`
  width: 137px;
  padding: 6px 8px;

  font-family: 'Archivo'; //Raisonne Pro
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;

  color: ${theme.colors.green1};
  background-color: transparent;

  border-radius: 10px;
  border: 0.5px solid ${theme.colors.brown1};
  cursor: pointer;

  &:hover,
  &:focus {
    color: #6f8d4c;
    background-color: ${theme.colors.green5};
    border: 1px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown2};
    background-color: transparent;
    border: 1px solid ${theme.colors.brown2};
    cursor: default;
  }
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 132px;

  border-radius: 10px;
  border: 0.5px solid ${theme.colors.brown1};

  & span {
    font-family: 'Domine'; //Nib Pro
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 166%; /* 26.56px */
    color: ${theme.colors.green};
  }
`;

const IconBtn = styled.button`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
  }

  &:disabled {
    cursor: default;

    & > svg > path {
      stroke: ${theme.colors.brown2};
      fill: ${theme.colors.brown2};
    }
  }
`;

const TextBtn = styled.button`
  width: 100%;
  padding: 10px 0;

  font-family: 'Archivo'; //Raisonne Pro
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 1px solid ${theme.colors.green};
  border-radius: 10px;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors.green2};
    border: 1px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    background-color: ${theme.colors.green4};
    border: 1px solid ${theme.colors.green4};
    cursor: default;
  }
`;

const InfoSection = styled.div`
  /* margin-bottom: 24px; */
`;

const Accord = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 24px;
`;

const AccordCareList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  animation: fade-in-top 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  transition: all ${theme.transition};
`;

const AccordCareItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 100%;

  & span {
    color: ${theme.colors.brown2};
    font-family: 'Domine'; //Nib Pro
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 138%; /* 19.32px */
  }
`;

const AccordIncludedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-left: 20px;

  list-style: disc;
  color: ${theme.colors.grey};

  animation: fade-in-top 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  transition: all ${theme.transition};
`;

const AccordIncludedItem = styled.li`
  display: list-item;

  font-family: 'Domine'; //Nib Pro
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 138%; /* 19.32px */

  color: ${theme.colors.grey};
`;

export {
  ProductCardSection,
  ProductCardContainer,
  ProductNav,
  ProductNavList,
  ProductNavItem,
  ProductNavLink,
  ProductContent,
  ProductGallery,
  ProductImage,
  ControlsList,
  ControlsItem,
  DeliveryInfo,
  DeliveryInfoItem,
  ProductInfo,
  Heading,
  Prices,
  Discount,
  Price,
  Description,
  Options,
  ProductSubTitle,
  OptionsList,
  Option,
  Quantity,
  IconBtn,
  TextBtn,
  InfoSection,
  Accord,
  AccordCareList,
  AccordCareItem,
  AccordIncludedList,
  AccordIncludedItem,
};
