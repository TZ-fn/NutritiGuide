import styled from 'styled-components';
import theme from 'theme/mainTheme';

const Logo = styled.h1`
  margin: 0;
  font-family: Lobster, cursive;
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.regular};

  @media screen and (max-width: 500px) {
    & {
      font-size: ${theme.fontSize.s};
    }
  }
`;

export default Logo;
