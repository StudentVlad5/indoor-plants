import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px 0px 10px;
  margin: 0 auto;
  width: 100%;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 30px 0px 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 50px 120px 0px 120px;
    max-width: ${theme.breakpoints.desktop};
  }
`;

export { HeaderContainer };
