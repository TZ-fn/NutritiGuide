import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import LogoIcon from 'components/Header/LogoIcon/LogoIcon';
import Logo from 'components/Header/Logo/Logo';
import avocadoLogo from 'assets/images/avocado.svg';
import SubLogo from './SubLogo/SubLogo';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 2rem;
  background: linear-gradient(
    66deg,
    ${theme.backgroundLighterGreen},
    ${theme.backgroundLightGreen} 66%
  );
  border-bottom: 2px solid ${theme.accentDarkGreen};
  border-radius: 0 0 7px 7px;
  box-shadow: hsla(0, 0%, 0%, 0.2) 0 5px 10px;

  & > h1,
  h3 {
    margin: 0;
  }
`;

const Header = () => (
  <Wrapper>
    <LogoIcon src={avocadoLogo} alt='NutritiGuide Logo' />
    <div>
      <Logo>NutritiGuide</Logo>
      <SubLogo>Your personal dietician</SubLogo>
    </div>
  </Wrapper>
);

export default Header;
