import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const CareSection = styled(Section)`
  padding-top: 122px;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

const CareContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
`;
export { CareSection, CareContainer };
