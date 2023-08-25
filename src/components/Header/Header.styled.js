import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0px 20px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 0px 32px;
    /* max-width: 900px; */
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 120px 0px 120px;
    /* max-width: 1440px; */
  }

  transition: background-color 0.3s ease-in-out; /* Додаємо плавну анімацію для переходу background-color */

  /* Задаємо background-color, який з'явиться при гортанні вниз */
  ${({ isScrolled }) => isScrolled && `background-color: rgb(252, 249, 242);`}
`;

export { HeaderContainer };
