import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { IconClose } from 'components/Footer/ModalTeam/ModalTeam.styled';

export const BasketCompItem = styled.li`
  display: flex;
  gap: 20px;

  width: 100%;
  height: 100%;
  padding: 5px;

  background-color: ${theme.colors.green6};
`;

export const BasketCompImg = styled.img`
  width: 107px;
  height: 140px;
`;

export const BoxForDiscrData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 130px);
`;

export const BtnItem = styled.p`
  display: flex;
  align-items: center;
  margin-top: 10px;

  color: ${theme.colors.brown1};
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;

  cursor: pointer;
`;

export const DiscrDataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DiscrDataListItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DiscrDataListItemTitle = styled.h4`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-top: 1px;
`;

export const DiscrDataListItemHeading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DiscrDataListItemTitlePrice = styled.span`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-top: 1px;
`;

export const DiscrDataListItemPrice = styled.p`
  color: ${props =>
    props.$red ? `${theme.colors.red}` : `${theme.colors.brown1}`};
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: ${props => (props.$red ? 'none' : 'line-through')};
`;

export const DiscrDataTable = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const DiscrDataTableLine = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const DiscrDataTableHead = styled.th`
  width: 50%;

  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
`;

export const DiscrDataTableData = styled.td`
  display: flex;
  gap: 10px;

  width: 50%;

  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const IconBtn = styled.button`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 17px;
    height: 17px;

    & > path {
      stroke: ${theme.colors.brown1};
      fill: ${theme.colors.brown1};
    }
  }

  & span {
    color: ${theme.colors.brown1};

    font-family: ${theme.fonts[0]};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
  }

  &:disabled {
    cursor: not-allowed;

    & > svg > path {
      stroke: ${theme.colors.brown3};
      fill: ${theme.colors.brown3};
    }
  }
`;

export const BasketCompIconClose = styled(IconClose)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
`;
