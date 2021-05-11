import styled from 'styled-components';
import theme from 'theme/mainTheme';

const SubLogo = styled.h3`
  text-shadow: hsla(0, 0%, 0%, 0.2) 10px 10px 10px;

  @media (max-width: 495px) {
    & {
      font-size: ${theme.fontSize.x4s};
    }
  }
`;

export default SubLogo;
