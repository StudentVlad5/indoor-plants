import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Section } from 'components/baseStyles/CommonStyle.styled';

const GiftsSection = styled(Section)`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    height: 1px;
    width: 100%;
    background: ${theme.colors.brown1};
  }
`;

export { GiftsSection };
