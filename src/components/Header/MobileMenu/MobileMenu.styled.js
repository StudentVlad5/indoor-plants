import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';
import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const MobileHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px 0px 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 45px 0px 45px;
  }

  & a {
    margin: 0 auto;
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
