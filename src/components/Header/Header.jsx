import React from 'react';
import styled from 'styled-components';
import Heading from '../common/Heading';
import Logo from './Logo/Logo';
import theme from '../../theme/mainTheme';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.background};
  border-bottom: 2px solid ${theme.accentDarkGreen};
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Heading HeadingLevel='h1'>NutritiGuide</Heading>
  </Wrapper>
);

export default Header;
