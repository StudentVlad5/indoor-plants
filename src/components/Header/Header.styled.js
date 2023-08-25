import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px 40px 10px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;


  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 30px 40px 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 50px 120px 40px 120px;
    max-width: ${theme.breakpoints.desktop};
  }

  transition: background-color 0.3s ease-in-out; /* Додаємо плавну анімацію для переходу background-color */

  /* Задаємо background-color, який з'явиться при гортанні вниз */
  ${({ isScrolled }) => isScrolled && `background-color: rgb(252, 249, 242);`}
`;

export { HeaderContainer };
