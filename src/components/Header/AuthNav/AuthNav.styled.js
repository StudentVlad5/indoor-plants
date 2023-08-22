import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const MobileContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 46px;
  transition: ${theme.transition[0]};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 0px;
    display: none;
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;
const Container = styled(MobileContainer)`
  display: none;
  transition: ${theme.transition[0]};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    gap: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 20px;
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;

export { MobileContainer, Container };
