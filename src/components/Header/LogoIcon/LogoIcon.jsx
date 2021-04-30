import styled from 'styled-components';

const LogoIcon = styled.img`
  margin-right: 10px;

  @media (max-width: 480px) {
    & {
      width: 60px;
      height: 60px;
    }
  }
`;

export default LogoIcon;
