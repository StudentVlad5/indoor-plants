import styled from 'styled-components';

const Section = styled.section`
  margin: ${props => props.margin || '0 auto'};
  padding-top: ${props => props.paddingTop || '60px'};
  padding-bottom: ${props => props.paddingBottom || '60px'};
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: ${props => props.marginTablet || '0 auto'};
    padding-top: ${props => props.paddingTopTablet || '60px'};
    padding-bottom: ${props => props.paddingBottomTablet || '60px'};
  }

  @media screen and (min-width: 1440px) {
    margin: ${props => props.marginDesktop || '0 auto'};
    padding-top: ${props => props.paddingTopDesktop || '120px'};
    padding-bottom: ${props => props.paddingBottomDesktop || '120px'};
  }
`;

const Container = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    flex-direction: ${props => props.flexDirectionTablet || 'column'};
    align-items: ${props => props.alignItemsTablet || 'center'};
    justify-content: ${props => props.justifyContentTablet || 'center'};
    padding: 0 30px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: ${props => props.flexDirectionDesktop || 'column'};
    align-items: ${props => props.alignItemsDesktop || 'center'};
    justify-content: ${props => props.justifyContentDesktop || 'center'};
    max-width: 1440px;
    padding: 0 120px;
  }
`;

const Title = styled.h1`
  font-family: 'Raisonne', sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${props => props.theme.brown};

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Raisonne Pro', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${props => props.theme.brown};
  text-transform: uppercase;
`;

const Headline = styled.h3`
  font-family: 'Nib Pro', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 144.5%; /* 46.24px */
  color: ${props => props.theme.brown};

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export { Container, Section, Title, Headline, Subtitle };
