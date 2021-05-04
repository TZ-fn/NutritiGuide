import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const StyledMainWrapper = styled.main`
  padding: 20px;
  border-radius: 10px;
  flex-grow: 2;
  background: linear-gradient(
    ${theme.backgroundLighterGreen},
    hsl(0, 0%, 100%),
    ${theme.backgroundLighterGreen}
  );
`;

const Main = () => (
  <StyledMainWrapper>
    <Button>Analyse!</Button>
  </StyledMainWrapper>
);

export default Main;
