import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px 0px 30px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 10;
  transition: background-color 0.3s ease-in-out;
  ${({ isScrolled }) => isScrolled && `background-color: rgb(252, 249, 242);`};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 30px 0px 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 50px 120px 0px 120px;
    max-width: ${theme.breakpoints.desktop};
  }
`;
const HeaderUnderLine = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 1px;
  margin-top: 40px;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export { HeaderContainer, HeaderSection, HeaderUnderLine };