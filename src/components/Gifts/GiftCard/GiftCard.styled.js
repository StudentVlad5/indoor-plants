import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { InnerLeftWrapper, InnerRightWrapper } from '../Gifts.styled';

const InnerLeft = styled(InnerLeftWrapper)``;

const InnerRight = styled(InnerRightWrapper)`
  position: relative;

  height: 370px;
  padding: 0;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100%;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }
  }
`;

const Card = styled.div`
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    width: 460px;
    height: 300px;
  }
`;

export { InnerLeft, InnerRight, Card };
