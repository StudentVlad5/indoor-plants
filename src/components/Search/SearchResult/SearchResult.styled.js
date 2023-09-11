import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const SearchResult = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 40;
  width: 1000px;
  height: 500px;

  background-color: ${theme.colors.fon};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Products = styled.div`
  width: 68%;
  padding: 20px;
`;

const Category = styled.div`
  width: 32%;
  padding: 30px;
  background-color: ${theme.colors.greyOpacity};
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;

  transition: ${theme.transition[0]};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 2px solid ${theme.colors.brown1};
    border: none;
  }
`;

const IconClose = styled(iconClose)`
  size: 24px;
  display: block;

  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
`;

export { SearchResult, Wrapper, Products, Category, ButtonClose, IconClose };
