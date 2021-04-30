import styled from 'styled-components';
import theme from 'theme/mainTheme';

const SubLogo = styled.h3`
  @media (max-width: 480px) {
    & {
      font-size: ${theme.fontSize.x4s};
    }
  }
`;

export default SubLogo;
