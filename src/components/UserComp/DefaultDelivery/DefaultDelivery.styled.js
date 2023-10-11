import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ProfileInput } from '../Profile/Profile.styled';

const ProfileInputSelect = styled(ProfileInput)`
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: ${theme.colors.brown1};
`;

export { ProfileInputSelect };
