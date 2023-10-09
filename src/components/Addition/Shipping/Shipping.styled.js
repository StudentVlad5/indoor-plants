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
const Subtitle = styled.li`
  margin: 10px 0;
`;
const SubtitleP = styled.p`
  padding: 10px 30px;
`;
const Img = styled.img`
  border-radius: 20px;
  margin: 20px;
`;

export { Container, Title, Subtitle, SubtitleP, Img };
