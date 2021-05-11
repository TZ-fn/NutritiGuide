import styled from 'styled-components';
import theme from 'theme/mainTheme';

const Logo = styled.h1`
  margin: 0;
  font-family: Lobster, cursive;
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.regular};
  text-shadow: hsla(0, 0%, 0%, 0.2) 10px 10px 10px;

  @media (max-width: 495px) {
    & {
      font-size: ${theme.fontSize.m};
    }
  }
`;

export default Logo;
