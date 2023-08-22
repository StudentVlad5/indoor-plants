import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';
import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const MobileHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px 0px 20px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 24px 32px 0px 32px;
  }
`;
const IconClose = styled(iconClose)`
  cursor: pointer;
  & > path {
    stroke: ${theme.colors.grey1};
    fill: ${theme.colors.grey1};
  }
`;

export { MobileHeader, IconClose };
