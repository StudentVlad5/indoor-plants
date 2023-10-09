import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.medium};

  width: 100%;
  margin: 10px 0;
  padding: 20px;
`;
const Title = styled.h3`
  margin: 20px 0;
`;
const SubTitleP = styled.p`
  margin: 20px 0;
`;

export { Container, Title, SubTitleP };
