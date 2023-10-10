import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  padding: 20px;
`;
const OrderItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  color: ${theme.colors.white};
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};
  background-color: ${theme.colors.green1};
  border-radius: 10px;
  padding: 8px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
const OrderItemWrap = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 12px;
`;
const OrderItemDetails = styled(OrderItemWrap)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const OrderItemDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin: 4px;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 12px;
  }
`;
const ImgItem = styled.img`
  width: 80px;
  height: 115px;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 4px 4px 10px -1px ${theme.colors.brown};
  -webkit-box-shadow: 4px 4px 10px -1px ${theme.colors.brown};
  -moz-box-shadow: 4px 4px 10px -1px ${theme.colors.brown};
`;

export {
  ListContainer,
  OrderItem,
  OrderItemWrap,
  OrderItemDetailsContainer,
  OrderItemDetails,
  ImgItem,
};
