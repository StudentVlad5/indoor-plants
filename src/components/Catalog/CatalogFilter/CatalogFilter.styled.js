import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Filters = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 16px; */
  width: 100%;
`;

const Filter = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px 0 8px 10px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 18px 0 18px 10px;
    font-size: 14px;
  }

  border-top: 1px solid ${theme.colors.beige};

  &:last-of-type {
    border-bottom: 0.5px solid ${theme.colors.beige};
  }
`;

const FilterBtn = styled.button`
  width: 100%;
  padding: 6px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.brown1};

  background-color: transparent;

  border: 0.5px solid ${theme.colors.brown1};
  border-radius: 10px;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 16px 0;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: #6f8d4c;
    background-color: ${theme.colors.green5};
    border: 1px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    border: 1px solid ${theme.colors.brown2};
    cursor: default;
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
      stroke: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
  }
`;

const FilterHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  cursor: pointer;

  &.active ~ div {
    display: flex;
  }
`;

const FilterInnerList = styled.div`
  display: none;
  /* display: flex; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4px;

  width: 100%;

  & > label {
    display: flex;
  }
`;

const FilterInnerListItem = styled.input`
  margin-right: 4px;

  &:checked {
    background-color: ${theme.colors.green};
  }
`;

const InfoBtn = styled.button`
  width: 100%;
  padding: 6px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 0.5px solid ${theme.colors.green};
  border-radius: 10px;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 16px 0;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.green2};
    border: 0.5px solid ${theme.colors.green2};
  }

  &:disabled {
    color: ${theme.colors.brown1};
    background-color: ${theme.colors.green4};
    border: 0.5px solid ${theme.colors.green4};
    cursor: default;
  }
`;

const InfoBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 100%;
`;

export {
  IconBtn,
  FilterBtn,
  Filters,
  Filter,
  FilterHeading,
  FilterInnerList,
  FilterInnerListItem,
  InfoBtn,
  InfoBtnBox,
};
