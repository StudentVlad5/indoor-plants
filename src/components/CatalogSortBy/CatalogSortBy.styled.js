import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 36px;
`;
const Title = styled.h2`
  font-size: ${theme.fontSizes.extraXXL};
  font-family: ${theme.fonts[1]};
  color: ${theme.colors.green};
`;
export { SortContainer, Title };
