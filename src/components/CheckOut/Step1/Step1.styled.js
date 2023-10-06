import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

export const FormContainer = styled.div`
  position: relative;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Legend = styled.legend`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
    color: ${theme.colors.brown1};
  }
`;

export const Label = styled.label`
  margin-right: 15px;
  line-height: 32px;
  cursor: pointer;
`;

export const SubLabel = styled.label`
  margin-right: 15px;
  line-height: 32px;
  font-size: ${theme.fontSizes.small};
  cursor: pointer;
`;

export const TextAreaLabel = styled.label`
  display: flex;
  flex-direction: column;
  line-height: 32px;
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.brown1};
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts[0]};
  color: ${theme.colors.green};
  background-color: ${theme.colors.white};
  opacity: 0.5;
  border: 2px solid ${theme.colors.brown};
`;

export const Input = styled.input`
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;
  position: relative;
  top: 4px;
  &:checked {
    border: 6px solid ${theme.colors.darkGreen};
  }
`;
