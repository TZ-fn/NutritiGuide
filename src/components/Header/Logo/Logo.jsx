import styled from 'styled-components';
import theme from 'theme/mainTheme';

const Logo = styled.h1`
  margin: 0;
  font-family: Lobster, cursive;
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.regular};

  @media (max-width: 480px) {
    & {
      font-size: ${theme.fontSize.m};
    }
  }
`;

export default Logo;
